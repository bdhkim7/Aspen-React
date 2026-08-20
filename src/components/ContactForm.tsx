"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { countries, inquiryTypes } from "@/data/site";

type ContactFormProps = {
  heading?: string;
  subheading?: string;
  showSupportPhone?: boolean;
};

export function ContactForm({
  heading = "Questions?",
  subheading = "Reach us via email or phone!",
  showSupportPhone = false,
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      country: String(form.get("country") ?? ""),
      inquiry: String(form.get("inquiry") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Unable to send your inquiry.");
      }

      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your inquiry.");
    }
  }

  return (
    <div className="contact-us-area appointment-contact-bg section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-title section-space--mb_50">
              <h3 className="mb-20">{heading}</h3>
              <p className="sub-title">{subheading}</p>
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <form onSubmit={onSubmit}>
                <div className="contact-form__two">
                  <div className="contact-input">
                    <div className="contact-inner">
                      <input name="name" type="text" placeholder="Name *" required />
                    </div>
                    <div className="contact-inner">
                      <input name="email" type="email" placeholder="Email *" required />
                    </div>
                  </div>
                  <div className="contact-input">
                    <div className="contact-inner">
                      <select name="country" required defaultValue="">
                        <option value="" disabled>
                          Country *
                        </option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-item contact-inner">
                      <span className="inquiry">
                        <select name="inquiry" className="select-item" required defaultValue="">
                          <option value="" disabled>
                            Inquiry Type
                          </option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </span>
                    </div>
                  </div>
                  <div className="contact-inner contact-message">
                    <textarea
                      name="message"
                      placeholder="Please describe your inquiry"
                      required
                    />
                  </div>
                  <div className="comment-submit-btn">
                    <button className="ht-btn ht-btn-md" type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? "Sending..." : "Send Inquiry"}
                    </button>
                    {message ? <p className="form-messege">{message}</p> : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ml-auto mt-20">
            <div className="contact-info-three text-left">
              <h6 className="heading font-weight--reguler">
                {showSupportPhone ? "All Inquiries" : "Give Us A Call"}
              </h6>
              <h3 className="call-us">
                <a href="tel:+12142570113">(+1) 214-257-0113</a>
              </h3>
              {showSupportPhone ? (
                <>
                  <h6 className="heading font-weight--reguler">Technical Support</h6>
                  <h3 className="call-us">
                    <a href="tel:+5215513360895">(+52) 1-55-1336-0895</a>
                  </h3>
                </>
              ) : (
                <div className="text">We are happy to answer any questions about our solutions</div>
              )}
              <div className="location-button mt-20">
                <a
                  href="https://goo.gl/maps/rc6Mj1xm7Bc8ZQ237"
                  className="location-text-button"
                >
                  <span className="button-icon" />
                  <span className="button-text">View on Google map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
