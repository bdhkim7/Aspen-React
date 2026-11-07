import { ContactForm } from "@/components/ContactForm";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";
import type { ContentBlock, ContentPageData } from "@/types/content";

type ContentPageViewProps = {
  page: ContentPageData;
};

function Block({ block, comingSoon }: { block: ContentBlock; comingSoon: string }) {
  switch (block.type) {
    case "comingSoon":
      return (
        <div className="section-title-wrap text-center">
          <h3 className="heading">
            <span className="text-color-primary">{comingSoon}</span>
          </h3>
        </div>
      );
    case "heading": {
      const Tag = block.level === 2 ? "h2" : "h3";
      if (block.highlight && block.text.includes(block.highlight)) {
        const start = block.text.indexOf(block.highlight);
        return (
          <Tag className="heading">
            {block.text.slice(0, start)}
            <span className="text-color-primary">{block.highlight}</span>
            {block.text.slice(start + block.highlight.length)}
          </Tag>
        );
      }
      return <Tag className="heading">{block.text}</Tag>;
    }
    case "paragraph":
      return <p style={{ color: "#6c757d" }}>{block.text}</p>;
    case "teamMember":
      return (
        <div className="col-lg-4 col-md-6">
          <div className="grid-item">
            <div className="ht-team-member">
              <div className="team-image">
                <img className="img-fluid" src={block.image} alt={block.name} />
              </div>
              <div className="team-info text-center">
                <h5 className="name">{block.name}</h5>
                <div className="position">{block.role}</div>
              </div>
            </div>
          </div>
        </div>
      );
    case "imageText": {
      const text = (
        <div className="col-lg-6">
          <h4>{block.title}</h4>
          <p style={{ color: "#6c757d" }}>{block.body}</p>
        </div>
      );
      const image = (
        <div className="col-lg-6">
          <img className="img-fluid" src={block.image} alt={block.title} />
        </div>
      );
      return (
        <div className="row section-space--mt_40 align-items-center">
          {block.imageFirst ? (
            <>
              {image}
              {text}
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
      );
    }
    default:
      return null;
  }
}

export async function ContentPageView({ page }: ContentPageViewProps) {
  const t = getDictionary(await getLocale());
  const teamMembers = page.blocks.filter((block) => block.type === "teamMember");
  const otherBlocks = page.blocks.filter((block) => block.type !== "teamMember");
  const title = t.industries[page.slug] ?? page.breadcrumb;

  return (
    <div>
      <PageBreadcrumb title={title} />

      <div className="site-wrapper-reveal">
        <div className="feature-images-wrapper section-space--ptb_100">
          <div className="container">
            {otherBlocks.map((block, index) => (
              <div key={`${block.type}-${index}`} className="row mb-4">
                <div className="col-lg-12">
                  <Block block={block} comingSoon={t.comingSoon} />
                </div>
              </div>
            ))}

            {teamMembers.length ? (
              <div className="row ht-team-member-style-two">
                {teamMembers.map((block, index) => (
                  <Block
                    key={
                      block.type === "teamMember"
                        ? `${block.name}-${block.image}-${index}`
                        : `${block.type}-${index}`
                    }
                    block={block}
                    comingSoon={t.comingSoon}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {page.includeContact === false ? null : <ContactForm />}
    </div>
  );
}
