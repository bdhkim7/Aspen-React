import { NextResponse } from "next/server";
import { inquiryTypes } from "@/data/site";
import { verifyCaptcha } from "@/lib/captcha";
import { sendContactInquiry } from "@/lib/mail";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    email?: string;
    country?: string;
    inquiry?: string;
    message?: string;
    captcha?: string;
    captchaToken?: string;
    aspen_hp?: string;
  } | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.aspen_hp?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const country = body.country?.trim() ?? "";
  const inquiry = body.inquiry?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !country || !inquiry || !message) {
    return NextResponse.json({ error: "Please complete the form and try again." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!(inquiryTypes as readonly string[]).includes(inquiry)) {
    return NextResponse.json({ error: "Please choose a valid inquiry type." }, { status: 400 });
  }

  if (!verifyCaptcha(body.captchaToken ?? "", body.captcha ?? "")) {
    return NextResponse.json({ error: "captcha" }, { status: 400 });
  }

  try {
    await sendContactInquiry({ name, email, country, inquiry, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact inquiry", error);
    return NextResponse.json(
      { error: "Unable to send your inquiry right now. Please try again later." },
      { status: 500 },
    );
  }
}
