"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDictionary, useLocale } from "@/components/LocaleProvider";
import { company, countries, inquiryTypes } from "@/data/site";
import { localizePath } from "@/i18n/paths";

type ContactFormProps = {
  heading?: string;
  subheading?: string;
  showSupportPhone?: boolean;
};

export function ContactForm({
  heading,
  subheading,
  showSupportPhone = false,
}: ContactFormProps) {
  const router = useRouter();
  const locale = useLocale();
  const t = useDictionary();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0);
  const [challenge, setChallenge] = useState<{ token: string; image: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    setChallenge(null);
    void (async () => {
      const response = await fetch("/api/contact/captcha");
      if (!response.ok || cancelled) return;
      const data = (await response.json()) as { token?: string; image?: string };
      if (!cancelled && data.token && data.image) {
        setChallenge({ token: data.token, image: data.image });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [captchaKey]);

  function refreshCaptcha() {
    setCaptchaValue("");
    setCaptchaKey((key) => key + 1);
  }

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
      captcha: captchaValue,
      captchaToken: challenge?.token ?? "",
      aspen_hp: String(form.get("aspen_hp") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        if (data?.error === "captcha") {
          refreshCaptcha();
          throw new Error(t.contact.captchaMismatch);
        }
        throw new Error(data?.error ?? t.contact.sendError);
      }

      router.push(localizePath("/thank-you", locale));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : t.contact.sendError);
    }
  }

  return (
    <div className="contact-us-area appointment-contact-bg section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-title section-space--mb_50">
              <h3 className="mb-20">
                {heading ?? (showSupportPhone ? t.contact.contactUs : t.contact.questions)}
              </h3>
              <p className="sub-title">
                {subheading ?? (showSupportPhone ? t.contact.allInquiriesSupport : t.contact.reach)}
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <form onSubmit={onSubmit}>
                <div className="contact-hp" aria-hidden="true">
                  <input name="aspen_hp" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="contact-form__two">
                  <div className="contact-input">
                    <div className="contact-inner">
                      <input name="name" type="text" placeholder={t.contact.name} required />
                    </div>
                    <div className="contact-inner">
                      <input name="email" type="email" placeholder={t.contact.email} required />
                    </div>
                  </div>
                  <div className="contact-input">
                    <div className="contact-inner">
                      <select name="country" required defaultValue="">
                        <option value="" disabled>
                          {t.contact.country}
                        </option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {t.contact.countries[country] ?? country}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="form-item contact-inner">
                      <span className="inquiry">
                        <select name="inquiry" className="select-item" required defaultValue="">
                          <option value="" disabled>
                            {t.contact.inquiryType}
                          </option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {t.contact.inquiries[type] ?? type}
                            </option>
                          ))}
                        </select>
                      </span>
                    </div>
                  </div>
                  <div className="contact-inner contact-message">
                    <textarea
                      name="message"
                      placeholder={t.contact.message}
                      required
                    />
                  </div>
                  <div className="contact-captcha">
                    <div className="contact-captcha__challenge">
                      {challenge ? (
                        <img
                          className="contact-captcha__image"
                          src={challenge.image}
                          alt={t.contact.captchaAlt}
                        />
                      ) : (
                        <div className="contact-captcha__image contact-captcha__image--loading" />
                      )}
                      <button
                        type="button"
                        className="contact-captcha__refresh"
                        onClick={refreshCaptcha}
                      >
                        {t.contact.captchaRefresh}
                      </button>
                    </div>
                    <div className="contact-inner">
                      <input
                        name="captcha"
                        value={captchaValue}
                        onChange={(event) => setCaptchaValue(event.target.value)}
                        placeholder={t.contact.captchaLabel}
                        aria-label={t.contact.captchaLabel}
                        autoComplete="off"
                        autoCapitalize="characters"
                        spellCheck={false}
                        maxLength={8}
                        required
                      />
                    </div>
                  </div>
                  <div className="comment-submit-btn">
                    <button
                      className="ht-btn ht-btn-md"
                      type="submit"
                      disabled={status === "submitting" || !challenge}
                    >
                      {status === "submitting" ? t.contact.sending : t.contact.send}
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
                {showSupportPhone ? t.contact.allInquiries : t.contact.giveUsACall}
              </h6>
              <h3 className="call-us">
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
              </h3>
              {showSupportPhone ? (
                <>
                  <h6 className="heading font-weight--reguler">{t.contact.technicalSupport}</h6>
                  <h3 className="call-us">
                    <a href={company.supportPhoneHref}>{company.supportPhoneDisplay}</a>
                  </h3>
                </>
              ) : (
                <div className="text">{t.contact.happyToAnswer}</div>
              )}
              <div className="location-button mt-20">
                <a href={company.mapsUrl} className="location-text-button">
                  <span className="button-icon" />
                  <span className="button-text">{t.contact.viewMap}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
