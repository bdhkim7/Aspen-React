import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <ContactForm
      heading="Contact us"
      subheading="All inquiries and technical support"
      showSupportPhone
    />
  );
}
