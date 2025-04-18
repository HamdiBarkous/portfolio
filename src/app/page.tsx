import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from 'lucide-react';

// Extracted Skills Data (based on resume.tex)
const skillsData = {
  programming: ["Python", "SQL"],
  mlDlFrameworks: ["TensorFlow", "PyTorch", "OpenCV", "Hugging Face Transformers"],
  devOpsTools: ["Docker", "Git", "PostgreSQL", "MLflow"],
  cloudInfrastructure: ["AWS SageMaker"],
  aiEnhancedDevelopment: ["Cursor", "Cline", "MCP Servers"],
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <section id="hero" className="mb-16 md:mb-20 lg:mb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
          Hamdi Barkous
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
          ML Engineer
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground mb-8">
          Passionate about artificial intelligence, mathematics, and optimization. Dedicated to the development and refinement of deep learning models with a strong work ethic and a continuous drive for learning.
        </p>
        <div className="flex justify-center items-center space-x-4">
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16 md:mb-20 lg:mb-24">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.programming.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          {/* ML/DL Frameworks */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ML/DL Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.mlDlFrameworks.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          {/* DevOps & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.devOpsTools.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          {/* Cloud & Infrastructure */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.cloudInfrastructure.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          {/* AI-Enhanced Development */}
          <div>
            <h3 className="text-xl font-semibold mb-4">AI-Enhanced Development</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.aiEnhancedDevelopment.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          {/* Languages can be added similarly if desired */}
        </div>
      </section>

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
