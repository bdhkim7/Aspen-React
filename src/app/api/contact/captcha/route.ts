import { NextResponse } from "next/server";
import { createCaptchaChallenge } from "@/lib/captcha";

export async function GET() {
  try {
    return NextResponse.json(createCaptchaChallenge());
  } catch (error) {
    console.error("Failed to create captcha", error);
    return NextResponse.json({ error: "Captcha is unavailable." }, { status: 500 });
  }
}
