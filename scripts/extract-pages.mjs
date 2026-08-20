import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const aspenDir = path.join(root, "..", "Aspen");
const outDir = path.join(root, "src", "content", "pages");

/** slug -> source HTML filename in Aspen/ */
const pageSources = {
  "europa-85": "europa.html",
  "europa-85l": "europa85L.html",
  "apx-24": "apx-24.html",
  "iodr-1417-gf": "iODR1417-GF.html",
  "iodr-1417": "iODR1417.html",
  "iodr-1717": "iODR1717.html",
  "aspen-vet": "AspenVet.html",
  "laica-85l": "laica85L.html",
  "laica-90": "laica90.html",
  "fdr-hd": "FDR-HD.html",
  "exprimer": "exprimer.html",
  "vieworks-panel": "vieworks-panel.html",
  "ws80a": "WS80A.html",
  "rs85": "RS85.html",
  "rs80a": "RS80A.html",
  "rosem": "rosem.html",
  "hs70a": "HS70A.html",
  "hera-w10": "HERA-W10.html",
  "air-touch": "BU_AiR-Touch.html",
  dental: "dental.html",
  clinics: "clinics.html",
  mobile: "mobile.html",
  military: "military.html",
  "urgent-care": "urgent-care.html",
  veterinary: "vet.html",
  orthopedic: "orthopedic.html",
  aspenview: "AspenView_EN.html",
  "aspenview-es": "AspenView_ES.html",
  leadership: "leadership.html",
  history: "our-history.html",
};

const htmlLinkMap = {
  "index.html": "/",
  "aboutus.html": "/about-us",
  "commitment.html": "/commitment",
  "contact-us.html": "/contact-us",
  "faqs.html": "/faqs",
  "thankyou.html": "/thank-you",
  "leadership.html": "/about-us/leadership",
  "our-history.html": "/about-us/history",
  "dental.html": "/industries/dental",
  "orthopedic.html": "/industries/orthopedic",
  "clinics.html": "/industries/clinics",
  "mobile.html": "/industries/mobile",
  "military.html": "/industries/military",
  "urgent-care.html": "/industries/urgent-care",
  "vet.html": "/industries/veterinary",
  "europa.html": "/products/europa-85",
  "europa90.html": "/products/europa-90",
  "europa85L.html": "/products/europa-85l",
  "apx-24.html": "/products/apx-24",
  "iODR1417-GF.html": "/products/iodr-1417-gf",
  "iODR1417.html": "/products/iodr-1417",
  "iODR1717.html": "/products/iodr-1717",
  "AspenVet.html": "/products/aspen-vet",
  "laica85L.html": "/products/laica-85l",
  "laica90.html": "/products/laica-90",
  "FDR-HD.html": "/products/fdr-hd",
  "exprimer.html": "/products/exprimer",
  "vieworks-panel.html": "/products/vieworks-panel",
  "AspenView_EN.html": "/software/aspenview",
  "AspenView_ES.html": "/software/aspenview-es",
  "WS80A.html": "/products/ws80a",
  "RS85.html": "/products/rs85",
  "RS80A.html": "/products/rs80a",
  "rosem.html": "/products/rosem",
  "HS70A.html": "/products/hs70a",
  "HERA-W10.html": "/products/hera-w10",
  "BU_AiR-Touch.html": "/products/air-touch",
  "BU_airtouch.html": "/products/air-touch",
};

function rewriteLinks(html) {
  let result = html;
  result = result.replace(/href="\.?\/?assets\//g, 'href="/assets/');
  result = result.replace(/src="\.?\/?assets\//g, 'src="/assets/');
  result = result.replace(/data-svg-icon="\.?\/?assets\//g, 'data-svg-icon="/assets/');
  result = result.replace(/poster="\.?\/?assets\//g, 'poster="/assets/');
  result = result.replace(/href="https:\/\/aspen-imaging\.com"/g, 'href="/"');
  result = result.replace(/href="https:\/\/aspen-imaging\.com\//g, 'href="/');

  for (const [file, route] of Object.entries(htmlLinkMap)) {
    result = result.replaceAll(`href="${file}"`, `href="${route}"`);
    result = result.replaceAll(`href="./${file}"`, `href="${route}"`);
    result = result.replaceAll(`href="../${file}"`, `href="${route}"`);
  }

  return result;
}

function removeContactSection(html) {
  const marker = '<div class="contact-us-area';
  const start = html.indexOf(marker);
  if (start === -1) return html;
  return `${html.slice(0, start).trimEnd()}\n    </div>\n`;
}

function stripNonContent(html) {
  let result = html;
  result = result.replace(/<script[\s\S]*?<\/script>/gi, "");
  result = result.replace(/<!--[\s\S]*?-->/g, "");
  result = removeContactSection(result);
  result = result.replace(/onClick="submitToAPI\(event\)"/gi, "");
  result = result.replace(/onclick="submitToAPI\(event\)"/gi, "");
  return result;
}

function extractBody(html) {
  const siteStart = html.indexOf('<div class="site-wrapper-reveal">');
  const breadcrumbStart = html.lastIndexOf('class="breadcrumb-area"', siteStart);
  const breadcrumbComment = html.lastIndexOf("<!-- breadcrumb-area start -->", siteStart);

  let start = siteStart;
  if (breadcrumbStart !== -1 && siteStart - breadcrumbStart < 3000) {
    start = breadcrumbComment !== -1 ? breadcrumbComment : html.lastIndexOf("<div", siteStart);
    if (breadcrumbStart < start) {
      start = html.lastIndexOf("<div", breadcrumbStart);
    }
  }

  const footerMarkers = [
    "<!--====================  footer area  ====================-->",
    '<div class="footer-area-wrapper',
  ];
  let end = html.length;
  for (const marker of footerMarkers) {
    const idx = html.indexOf(marker, start);
    if (idx !== -1 && idx < end) end = idx;
  }

  if (start === -1 || end <= start) {
    throw new Error("Could not locate page content boundaries");
  }

  let content = html.slice(start, end).trim();
  content = stripNonContent(content);
  content = rewriteLinks(content);
  return content;
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  if (!match) return "Aspen Imaging";
  return match[1].replace(/^Aspen Imaging\s*-\s*/i, "").trim();
}

fs.mkdirSync(outDir, { recursive: true });

const manifest = {};

for (const [slug, filename] of Object.entries(pageSources)) {
  const sourcePath = path.join(aspenDir, filename);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`Missing source: ${filename}`);
    continue;
  }

  const html = fs.readFileSync(sourcePath, "utf8");
  const content = extractBody(html);
  const title = extractTitle(html);

  fs.writeFileSync(path.join(outDir, `${slug}.html`), content, "utf8");
  manifest[slug] = { title, source: filename };
  console.log(`Extracted ${slug} from ${filename}`);
}

fs.writeFileSync(
  path.join(root, "src", "data", "html-pages-manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8",
);

console.log(`Done. ${Object.keys(manifest).length} pages extracted.`);
