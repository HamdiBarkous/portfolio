import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { Button } from "@/components/ui/button";
// Removed unused Badge import: import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  CodeXml, // Icon for Programming
  BrainCircuit, // Icon for ML/DL
  ServerCog, // Icon for DevOps
  Cloud, // Icon for Cloud
  WandSparkles, // Icon for AI Dev
  // Removed placeholder/specific lucide icons: Code, Database, GitBranch
} from 'lucide-react';

// Updated Skills Data with SVG paths
const skillsCategories = [
  {
    name: "Programming",
    icon: CodeXml,
    skills: [
      { name: "Python", iconPath: "/logos/python.svg" },
      { name: "SQL", iconPath: "/logos/sql.svg" },
    ],
  },
  {
    name: "ML/DL Frameworks",
    icon: BrainCircuit,
    skills: [
      { name: "TensorFlow", iconPath: "/logos/tensorflow.svg" },
      { name: "PyTorch", iconPath: "/logos/pytorch.svg" },
      { name: "OpenCV", iconPath: "/logos/opencv.svg" },
      { name: "Hugging Face Transformers", iconPath: "/logos/huggingface.svg" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: ServerCog,
    skills: [
      { name: "Docker", iconPath: "/logos/docker.svg" },
      { name: "Git", iconPath: "/logos/git.svg" },
      { name: "PostgreSQL", iconPath: "/logos/postgress.svg" }, // Note: Filename is postgress.svg
      { name: "MLflow", iconPath: "/logos/mlflow.svg" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS SageMaker", iconPath: "/logos/aws.svg" }, // Using AWS logo
    ],
  },
  {
    name: "AI-Enhanced Development",
    icon: WandSparkles,
    skills: [
      { name: "Cursor", iconPath: "/logos/cursor.svg" },
      { name: "Cline", iconPath: "/logos/cline.svg" },
      { name: "MCP Servers", iconPath: "/logos/mcp.svg" },
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-xl border border-border/30 bg-background/50 p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted p-1">
                          <Image
                            src={skill.iconPath}
                            alt={`${skill.name} logo`}
                            width={20}
                            height={20}
                            className="h-5 w-5 object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
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
