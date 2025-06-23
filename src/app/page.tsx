import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ThemedIcon } from "@/components/ThemedIcon";
// Removed unused Badge import: import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  CodeXml, // Icon for Programming Languages
  BrainCircuit, // Icon for ML/AI
  ServerCog, // Icon for Backend & APIs
  Database, // Icon for Databases & Storage
  Cloud, // Icon for Cloud & MLOps
  WandSparkles, // Icon for AI Dev
} from 'lucide-react';

// Enhanced Skills Data with better organization and balance
const skillsCategories = [
  {
    name: "ML/AI Frameworks",
    icon: BrainCircuit,
    skills: [
      { name: "PyTorch", iconName: "pytorch" },
      { name: "TensorFlow", iconName: "tensorflow" },
      { name: "Hugging Face", iconName: "huggingface" },
      { name: "LangGraph", iconName: "langgraph" },
    ],
  },
  {
    name: "Backend & Development",
    icon: ServerCog,
    skills: [
      { name: "Python", iconName: "python" },
      { name: "FastAPI", iconName: "fastapi" },
      { name: "MLflow", iconName: "mlflow" },
      { name: "SQL", iconName: "sql" },
    ],
  },
  {
    name: "Data & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", iconName: "postgress" },
      { name: "Redis", iconName: "redis" },
      { name: "Supabase", iconName: "supabase" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS SageMaker", iconName: "aws" },
      { name: "Docker", iconName: "docker" },
      { name: "Git", iconName: "git" },
    ],
  },
  {
    name: "AI-Enhanced Tools",
    icon: WandSparkles,
    skills: [
      { name: "Cursor", iconName: "cursor" },
      { name: "Cline", iconName: "cline" },
      { name: "MCP Servers", iconName: "mcp" },
    ],
  },
];


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <section id="hero" className="mb-16 md:mb-20 lg:mb-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/img/self.jpg" // Path relative to the public directory
            alt="Hamdi Barkous"
            width={180} // Adjust size as needed
            height={180}
            priority // Load image eagerly as it's above the fold
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
            Hamdi Barkous
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            ML Engineer
          </h2>
          <p className="max-w-3xl text-base sm:text-lg text-muted-foreground mb-8">
            Passionate about artificial intelligence, mathematics, and optimization. Dedicated to the development and refinement of deep learning models with a strong work ethic and a continuous drive for learning.
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/HamdiBarkous" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href="https://www.linkedin.com/in/HamdiBarkous" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href="mailto:hamdi.barkous@ept.ucar.tn" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
       </div> {/* Add missing closing div for text content */}
      </section>

      {/* Skills Section - Enhanced Design */}
      <div className="mb-16 md:mb-20 lg:mb-24">
        <section id="skills">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillsCategories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-3 rounded-xl p-3 bg-background/60 border border-border/30 transition-all duration-200 hover:bg-background/80 hover:border-primary/30 hover:shadow-md hover:scale-105"
                      >
                        <div className="icon-container-enhanced flex h-9 w-9 items-center justify-center rounded-lg p-1">
                          <ThemedIcon
                            name={skill.iconName}
                            alt={`${skill.name} logo`}
                            width={24}
                            height={24}
                            className="themed-icon h-6 w-6 object-contain"
                          />
                        </div>
                        <span className="text-sm font-semibold text-foreground/85 group-hover/skill:text-foreground transition-colors whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Optional Highlights Section can go here */}
      {/*
      <section id="highlights" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Highlights Placeholder</h2>
        <p>Achievements, Competitions...</p>
      </section>
      */}
    </div>
  );
}
