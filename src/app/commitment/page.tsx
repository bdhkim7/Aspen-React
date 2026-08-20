import type { Metadata } from "next";
import { CommitmentPageView } from "@/components/pages/CommitmentPageView";

export const metadata: Metadata = {
  title: "Commitment to Quality",
};

export default function CommitmentPage() {
  return <CommitmentPageView />;
}
