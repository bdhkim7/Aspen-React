import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <div className="site-wrapper-reveal">
      <div className="section-space--ptb_100">
        <div className="container">
          <h1 className="heading mb-20">Thank you</h1>
          <p className="mb-30">Your inquiry was received. We will get back to you shortly.</p>
          <Link href="/" className="ht-btn ht-btn-md">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
