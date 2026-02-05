import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Achievements",
  description: "Explore Hamdi Barkous's projects, hackathon victories, and research publications in ML and AI.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
