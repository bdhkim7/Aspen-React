import type { ContentPageData } from "@/types/content";

export const leadershipPage: ContentPageData = {
  slug: "leadership",
  title: "Leadership",
  breadcrumb: "Leadership",
  includeContact: false,
  blocks: [
    {
      type: "heading",
      text: "We pride ourselves on having a team of highly-skilled experts",
      highlight: "highly-skilled",
    },
    {
      type: "teamMember",
      name: "Dollie Horton",
      role: "Marketing",
      image: "/assets/images/team/team-member-07-370x455.jpg",
    },
    {
      type: "teamMember",
      name: "Stephen Mearsley",
      role: "President & CEO",
      image: "/assets/images/team/team-member-01-370x455.jpg",
    },
    {
      type: "teamMember",
      name: "Maggie Strickland",
      role: "Financial Services",
      image: "/assets/images/team/team-member-06-370x455.jpg",
    },
    {
      type: "teamMember",
      name: "Stephany Mearsley",
      role: "Marketing",
      image: "/assets/images/team/team-member-04-370x452.jpg",
    },
    {
      type: "teamMember",
      name: "Monica Blews",
      role: "Marketing",
      image: "/assets/images/team/team-member-05-370x452.jpg",
    },
    {
      type: "teamMember",
      name: "Maggie Strickland",
      role: "Marketing",
      image: "/assets/images/team/team-member-03-370x452.jpg",
    },
    {
      type: "teamMember",
      name: "Dollie Horton",
      role: "Marketing",
      image: "/assets/images/team/team-member-02-370x452.jpg",
    },
    { type: "heading", text: "DEVELOPER", level: 3 },
    {
      type: "paragraph",
      text: "Gene Moreno, Carrie Greer, Brent Newman, Craig Stevenson",
    },
    { type: "heading", text: "Engineer", level: 3 },
    {
      type: "paragraph",
      text: "Albert Webster, Harry Castillo, Walter Reid, Gordon Baldwin",
    },
    { type: "heading", text: "Staff", level: 3 },
    {
      type: "paragraph",
      text: "Gene Moreno, Carrie Greer, Brent Newman, Craig Stevenson",
    },
    { type: "heading", text: "Design/Marketing", level: 3 },
    {
      type: "paragraph",
      text: "Charlotte Shaw, Kate Wong, Frederick Huff, Ora Johnson",
    },
  ],
};
