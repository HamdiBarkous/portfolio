import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Hamdi Barkous's professional experience in machine learning engineering and AI research.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
