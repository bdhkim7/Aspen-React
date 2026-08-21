export type ContentBlock =
  | { type: "heading"; text: string; highlight?: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "comingSoon" }
  | {
      type: "teamMember";
      name: string;
      role: string;
      image: string;
    }
  | {
      type: "imageText";
      title: string;
      body: string;
      image: string;
      imageFirst?: boolean;
    };

export type ContentPageData = {
  slug: string;
  title: string;
  description?: string;
  breadcrumb: string;
  blocks: ContentBlock[];
  includeContact?: boolean;
};
