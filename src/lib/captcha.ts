import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from "crypto";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const TTL_MS = 5 * 60 * 1000;

/** 5×7 glyphs. Ambiguous characters (0, O, 1, I) are omitted. */
const GLYPHS: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  G: ["01111", "10000", "10000", "10111", "10001", "10001", "01111"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  J: ["00111", "00001", "00001", "00001", "10001", "10001", "01110"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  Q: ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
  W: ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
  X: ["10001", "10001", "01010", "00100", "01010", "10001", "10001"],
  Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
  Z: ["11111", "00001", "00010", "00100", "01000", "10000", "11111"],
  "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
  "3": ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
  "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
  "5": ["11111", "10000", "10000", "11110", "00001", "00001", "11110"],
  "6": ["01110", "10000", "10000", "11110", "10001", "10001", "01110"],
  "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
  "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
  "9": ["01110", "10001", "10001", "01111", "00001", "00001", "01110"],
};

function signingKey(): Buffer {
  const secret = process.env.CAPTCHA_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error("CAPTCHA_SECRET is not configured");
  }
  return createHash("sha256").update(secret).digest();
}

function randomAnswer(): string {
  return Array.from({ length: 5 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("");
}

function renderImage(answer: string): string {
  const scale = 4;
  const glyphWidth = 5 * scale;
  const gap = 8;
  const padX = 14;
  const padY = 12;
  const width = padX * 2 + answer.length * glyphWidth + (answer.length - 1) * gap;
  const height = padY * 2 + 7 * scale;
  const parts: string[] = [
    `<rect width="${width}" height="${height}" fill="#f4f7fb"/>`,
  ];

  for (let i = 0; i < 28; i += 1) {
    const x = randomInt(0, width);
    const y = randomInt(0, height);
    parts.push(
      `<circle cx="${x}" cy="${y}" r="${randomInt(1, 2)}" fill="rgba(0,71,187,0.25)"/>`,
    );
  }

  for (let i = 0; i < 3; i += 1) {
    parts.push(
      `<line x1="${randomInt(0, width)}" y1="${randomInt(8, height - 8)}" x2="${randomInt(0, width)}" y2="${randomInt(8, height - 8)}" stroke="rgba(15,23,42,0.28)" stroke-width="1.5"/>`,
    );
  }

  answer.split("").forEach((char, index) => {
    const glyph = GLYPHS[char];
    const originX = padX + index * (glyphWidth + gap) + randomInt(-1, 2);
    const originY = padY + randomInt(-2, 3);
    const fill = `rgb(${randomInt(12, 40)},${randomInt(32, 70)},${randomInt(90, 150)})`;
    glyph.forEach((row, y) => {
      row.split("").forEach((bit, x) => {
        if (bit !== "1") return;
        parts.push(
          `<rect x="${originX + x * scale}" y="${originY + y * scale}" width="${scale}" height="${scale}" fill="${fill}"/>`,
        );
      });
    });
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${parts.join("")}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export function createCaptchaChallenge(): { token: string; image: string } {
  const answer = randomAnswer();
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", signingKey(), iv);
  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify({ answer, exp: Date.now() + TTL_MS })),
    cipher.final(),
  ]);
  const token = Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString("base64url");
  return { token, image: renderImage(answer) };
}

export function verifyCaptcha(token: string, attempt: string): boolean {
  try {
    const buf = Buffer.from(token, "base64url");
    if (buf.length < 29) return false;
    const iv = buf.subarray(0, 12);
    const tag = buf.subarray(12, 28);
    const encrypted = buf.subarray(28);
    const decipher = createDecipheriv("aes-256-gcm", signingKey(), iv);
    decipher.setAuthTag(tag);
    const payload = JSON.parse(
      Buffer.concat([decipher.update(encrypted), decipher.final()]).toString(),
    ) as { answer?: string; exp?: number };

    if (!payload.answer || typeof payload.exp !== "number" || payload.exp < Date.now()) {
      return false;
    }

    const expected = Buffer.from(payload.answer.toUpperCase());
    const given = Buffer.from(attempt.trim().toUpperCase());
    if (expected.length !== given.length || expected.length === 0) return false;
    return timingSafeEqual(expected, given);
  } catch {
    return false;
  }
}
