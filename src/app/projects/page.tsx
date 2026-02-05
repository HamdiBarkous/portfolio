"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  BookOpen,
  Code,
  Github,
  Calendar,
  Target,
  Users,
  ArrowUpRight,
  Sparkles,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 0,
    type: "project",
    title: "IntoTeX",
    subtitle: "AI-Powered PDF to LaTeX Converter",
    period: "2026",
    impact: "Full-stack SaaS with AI agent pipeline",
    description:
      "Built a full-stack SaaS platform that converts PDF documents to LaTeX source code using a LangGraph-based AI agent with vision capabilities and a sophisticated PDF extraction engine.",
    highlights: [
      "Sophisticated PDF extraction engine for complex document structures",
      "Self-correcting agentic pipeline with visual feedback",
      "Credit-based subscription system with Paddle payments",
    ],
    skills: [
      "Python",
      "LangGraph",
      "Vision AI",
      "FastAPI",
      "Next.js",
      "Supabase",
      "WebSocket",
      "Paddle",
    ],
    status: "live",
    featured: true,
    link: undefined as string | undefined,
    liveUrl: "https://intotex.com",
    githubUrl: undefined as string | undefined,
  },
  {
    id: 1,
    type: "project",
    title: "T3 Chat Clone",
    subtitle: "AI Chatbot with MCP Tools Integration",
    period: "Jun 2025",
    impact: "Full-stack AI chatbot with advanced features",
    description:
      "Built and deployed a sophisticated AI chatbot during a cloneathon challenge, featuring MCP tools integration, real-time streaming, and multi-modal capabilities.",
    highlights: [
      "MCP (Model Context Protocol) tools for external connectivity",
      "Multi-modal input with documents and image processing",
      "Real-time streaming & chat branching",
    ],
    skills: [
      "TypeScript",
      "Python",
      "MCP",
      "AI/LLM",
      "Real-time Streaming",
      "Multi-modal AI",
    ],
    status: "live",
    featured: true,
    link: "https://github.com/HamdiBarkous/t3-chat-clone",
    liveUrl: "https://t3-chat-clone-delta.vercel.app/",
    githubUrl: "https://github.com/HamdiBarkous/t3-chat-clone",
  },
  {
    id: 2,
    type: "competition",
    title: "Unifi PDF Lifting",
    subtitle: "1st Place • $5,000 Prize",
    period: "Feb 2024",
    impact: "Ranked 1/76 participants",
    description:
      "Advanced solution for extracting structured data from PDF documents using LLM and RAG techniques.",
    highlights: [
      "Won 1st place out of 76 participants",
      "Production-ready PDF extraction system",
    ],
    skills: ["LLM", "RAG", "PDF Processing", "NLP", "Python"],
    status: "won",
    link: "https://github.com/HamdiBarkous/Unifi-Value-Frameworks-PDF-Lifting-Competition",
    githubUrl:
      "https://github.com/HamdiBarkous/Unifi-Value-Frameworks-PDF-Lifting-Competition",
    stats: { participants: 76, prize: "$5,000", rank: "1st" },
  },
  {
    id: 3,
    type: "competition",
    title: "DataDrive2030",
    subtitle: "1st Place • $3,000 Prize",
    period: "Jan 2023",
    impact: "Ranked 1/336 participants",
    description:
      "Predicted early learning outcomes using advanced ML techniques and feature engineering.",
    highlights: [
      "Won 1st place out of 336 participants",
      "Predictive models for education outcomes",
    ],
    skills: [
      "Machine Learning",
      "XGBoost",
      "Feature Engineering",
      "Predictive Modeling",
    ],
    status: "won",
    link: "https://github.com/HamdiBarkous/DataDrive2030-Early-Learning-Predictors-Challenge",
    githubUrl:
      "https://github.com/HamdiBarkous/DataDrive2030-Early-Learning-Predictors-Challenge",
    stats: { participants: 336, prize: "$3,000", rank: "1st" },
  },
  {
    id: 4,
    type: "publication",
    title: "Hybrid DL for Load Forecasting",
    subtitle: "IEEE International Conference",
    period: "Dec 2023",
    impact: "Published at IEEE Smart Cities Conference",
    description:
      "A comprehensive analysis of hybrid deep learning approaches for midterm electric load forecasting.",
    highlights: [
      "21st IEEE International Conference",
      "Novel hybrid model architecture",
    ],
    skills: [
      "Deep Learning",
      "Load Forecasting",
      "Research",
      "PyTorch",
      "Time Series",
    ],
    status: "published",
    link: "https://ieeexplore.ieee.org/document/10466962",
  },
  {
    id: 5,
    type: "competition",
    title: "CO₂ Prediction Challenge",
    subtitle: "1st Place • $2,100 Prize",
    period: "Mar 2022",
    impact: "Ranked 1/441 participants",
    description:
      "Forecasted carbon dioxide levels using advanced time series analysis for environmental impact modeling.",
    highlights: [
      "Won 1st place out of 441 participants",
      "Environmental impact modeling",
    ],
    skills: [
      "Time Series",
      "Environmental Modeling",
      "Python",
      "Statistical Analysis",
    ],
    status: "won",
    link: "https://github.com/HamdiBarkous/UmojaHack-Africa-2023-Carbon-Dioxide-Prediction-Challenge",
    githubUrl:
      "https://github.com/HamdiBarkous/UmojaHack-Africa-2023-Carbon-Dioxide-Prediction-Challenge",
    stats: { participants: 441, prize: "$2,100", rank: "1st" },
  },
];

const categories = [
  {
    id: "all",
    label: "All",
    icon: Target,
    count: projectsData.length,
  },
  {
    id: "project",
    label: "Projects",
    icon: Code,
    count: projectsData.filter((p) => p.type === "project").length,
  },
  {
    id: "competition",
    label: "Competitions",
    icon: Trophy,
    count: projectsData.filter((p) => p.type === "competition").length,
  },
  {
    id: "publication",
    label: "Publications",
    icon: BookOpen,
    count: projectsData.filter((p) => p.type === "publication").length,
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((item) => item.type === activeCategory);

  const featuredProjects = filteredProjects.filter(
    (p) => p.featured
  );
  const otherProjects = filteredProjects.filter(
    (p) => !p.featured
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "won":
        return { label: "🏆 Winner", className: "badge-success" };
      case "published":
        return { label: "📄 Published", className: "badge-info" };
      case "live":
        return { label: "🟢 Live", className: "badge-highlight" };
      case "ongoing":
        return { label: "🔨 In Progress", className: "badge-warning" };
      default:
        return {
          label: status,
          className: "bg-muted/30 text-muted-foreground border-border",
        };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTypeAccent = (_type: string) => {
    return "from-primary/30 to-primary/5";
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTypeBorder = (_type: string) => {
    return "hover:border-primary/40";
  };

  return (
    <div className="min-h-screen">

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        {/* Page Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Projects & Achievements
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack AI products, competition wins, and research.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal delay={0.05}>
          <div className="flex justify-center gap-8 md:gap-16 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">3×</div>
              <div className="text-xs md:text-sm text-muted-foreground">1st Place Wins</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">$10K+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Prize Money</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">1</div>
              <div className="text-xs md:text-sm text-muted-foreground">IEEE Paper</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-2 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {category.label}
                  <span className={`ml-1.5 text-xs ${isActive ? "opacity-80" : "opacity-50"}`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Featured Projects — full width cards */}
            {featuredProjects.length > 0 && (
              <div className="space-y-6">
                {featuredProjects.map((project, index) => {
                  const statusBadge = getStatusBadge(project.status);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:shadow-xl ${getTypeBorder(project.type)} card`}
                    >
                      {/* Top accent gradient */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getTypeAccent(project.type)}`} />

                      <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {/* Left content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              <Badge className={`${statusBadge.className} text-xs`}>
                                {statusBadge.label}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {project.period}
                              </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {project.title}
                            </h2>
                            <p className="text-sm text-primary font-medium mb-4">
                              {project.subtitle}
                            </p>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl">
                              {project.description}
                            </p>

                            {/* Highlights as inline chips */}
                            <div className="flex flex-wrap gap-2 mb-5">
                              {project.highlights.map((h, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-md px-2.5 py-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                  {h}
                                </span>
                              ))}
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5">
                              {project.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="secondary"
                                  className="text-xs font-normal"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Right action area */}
                          <div className="flex md:flex-col gap-2 md:items-end shrink-0">
                            {project.liveUrl && (
                              <Button asChild size="sm" className="group/btn">
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Globe className="w-4 h-4 mr-1.5" />
                                  Live
                                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </Link>
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="group/btn"
                              >
                                <Link
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="w-4 h-4 mr-1.5" />
                                  Code
                                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Other Projects — grid */}
            {otherProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project, index) => {
                  const statusBadge = getStatusBadge(project.status);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: featuredProjects.length * 0.1 + index * 0.08,
                      }}
                      className={`group relative overflow-hidden rounded-xl bg-card border border-border/60 transition-all duration-300 hover:shadow-lg ${getTypeBorder(project.type)} card`}
                    >
                      {/* Top accent */}
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${getTypeAccent(project.type)}`} />

                      <div className="p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${statusBadge.className} text-xs`}>
                            {statusBadge.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {project.period}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-primary font-medium mb-3">
                          {project.subtitle}
                        </p>

                        {/* Competition stats inline */}
                        {project.stats && (
                          <div className="flex gap-4 mb-3 text-xs">
                            {project.stats.rank && (
                              <span className="text-muted-foreground">
                                Rank:{" "}
                                <span className="text-primary font-semibold">
                                  {project.stats.rank}
                                </span>
                              </span>
                            )}
                            {project.stats.participants && (
                              <span className="text-muted-foreground">
                                of{" "}
                                <span className="font-semibold text-foreground">
                                  {project.stats.participants}
                                </span>
                              </span>
                            )}
                            {project.stats.prize && (
                              <span className="text-muted-foreground">
                                Prize:{" "}
                                <span className="text-primary font-semibold">
                                  {project.stats.prize}
                                </span>
                              </span>
                            )}
                          </div>
                        )}

                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.skills.slice(0, 4).map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-[10px] font-normal px-1.5 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {project.skills.length > 4 && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-normal px-1.5 py-0.5 opacity-60"
                            >
                              +{project.skills.length - 4}
                            </Badge>
                          )}
                        </div>

                        {/* Action */}
                        {project.link && project.link !== "#" && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                          >
                            {project.type === "publication"
                              ? "View Paper"
                              : "View Source"}
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 bg-card border border-border rounded-2xl p-8 md:p-10">
              <Users className="w-10 h-10 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">
                Let&apos;s Build Something Together
              </h2>
              <p className="text-muted-foreground text-sm max-w-md">
                I&apos;m always excited to collaborate on challenging AI projects.
              </p>
              <div className="flex gap-3">
                <Button size="sm" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/experience">View Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
