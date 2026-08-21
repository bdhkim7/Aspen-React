import type { ContentPageData } from "@/types/content";

export const historyPage: ContentPageData = {
  slug: "history",
  title: "Our History",
  breadcrumb: "Our history",
  includeContact: false,
  blocks: [
    {
      type: "heading",
      text: "We create dreams for the future. We realize them sucessfully.",
      highlight: "for the future.",
    },
    {
      type: "paragraph",
      text: "You know that you found your dream when you have a desire to achieve a goal, have the gut to pursue it, have the courage to overcome any obstacles on your path and feel blessed when finally realizing it. Dream on, keep up and make it pay off.",
    },
    {
      type: "imageText",
      title: "1988 — The Foundation of Mitech",
      body: "The beginning of Mitech Co. was laid by three men: Jackie Moodle, Alan Morray and Burrow Kills. Back in 1988, three passionate young pupils, whose major is Information Technology, had discussed with each other about starting a company to deliver technological & digital services in an old rented apartment.",
      image: "/assets/images/timeline/timeline-image-01.jpg",
      imageFirst: true,
    },
    {
      type: "imageText",
      title: "1993 — Mitech’s Golden Age",
      body: "Mitech had been operating for 5 years when it reached the golden age in the company’s history. They received two prestigious awards for Dedicated Services & Community Contribution (in 1990), plus three successive award nominations for Best IT Company of the year (respectively in 1991, 1992 & 1993).",
      image: "/assets/images/timeline/timeline-image-02.jpg",
      imageFirst: true,
    },
    {
      type: "imageText",
      title: "1995 — Mitech’s Turning Point",
      body: "The company has a turning point in 1995 when one of its founders left the board of the management and established a new company in Healthcare & Assurance – HealSoul. Later on, Mitech and HealSoul have successfully cooperated in several projects to integrate technology into taking care of people’s health.",
      image: "/assets/images/timeline/blog-07-500x350.jpg",
      imageFirst: true,
    },
  ],
};
