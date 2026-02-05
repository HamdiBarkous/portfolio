"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/TypingAnimation";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="mb-12 md:mb-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left: Photo + Social Links */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-50 blur-md group-hover:opacity-75 transition-opacity duration-500 animate-gradient-shift" />
            <Image
              src="/img/hamdi.png"
              alt="Hamdi Barkous"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-background shadow-2xl object-cover"
              priority
            />
          </div>
          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              {
                href: "https://github.com/HamdiBarkous",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/HamdiBarkous",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:hamdi.barkous@ept.ucar.tn",
                icon: Mail,
                label: "Email",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Badge className="badge-success mb-4 text-sm">
            ● Available for Opportunities
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Hamdi Barkous
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
            <TypingAnimation
              words={[
                "AI Pionner",
                "ML Engineer",
                "Full Stack Developer",
                "Problem Solver",
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              pauseDuration={2500}
            />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            I am an AI Engineer, passionate about building intelligent systems
            and full-stack applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button size="lg" asChild className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group">
              <a href="/resume.pdf" download="Hamdi_Barkous_Resume.pdf">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
