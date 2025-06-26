import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { ThemedIcon } from "@/components/ThemedIcon";
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
  Briefcase,
  Trophy,
  BookOpen,
  ArrowRight,
  Award,
  TrendingUp,
  Code,
  Calendar,
  ExternalLink,
  MapPin,
  Users
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

const featuredExperience = {
  company: 'FinGenesis',
  role: 'ML Engineer',
  period: '2024 – Present',
  description: 'Building cutting-edge deep learning models for financial prediction and sophisticated trading strategies.',
  skills: ['Deep Learning', 'Finance', 'LLM', 'Trading'],
  status: 'current'
};

const featuredProjects = [
  {
    title: 'Unifi PDF Lifting Competition',
    type: 'Competition Win',
    prize: '$5,000',
    rank: '1st/76',
    icon: Trophy,
    color: 'text-orange-600 bg-orange-500/10'
  },
  {
    title: 'IEEE Smart Cities Publication',
    type: 'Research Publication',
    venue: 'IEEE Conference',
    impact: 'International',
    icon: BookOpen,
    color: 'text-blue-600 bg-blue-500/10'
  },
  {
    title: 'DataDrive2030 Challenge',
    type: 'Competition Win',
    prize: '$3,000',
    rank: '1st/336',
    icon: Trophy,
    color: 'text-green-600 bg-green-500/10'
  }
];

const stats = [
  { label: 'Years Experience', value: '2+', icon: Briefcase },
  { label: 'Competition Wins', value: '3', icon: Trophy },
  { label: 'Total Prize Money', value: '$10K+', icon: Award },
  { label: 'IEEE Publications', value: '1', icon: BookOpen }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
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

        {/* Work Showcase Section */}
        <section id="work-showcase" className="mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
              My Work & Achievements
            </h2>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Navigation Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Experience Section */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative p-8 md:p-10">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h3>
                    <p className="text-muted-foreground">Professional work history</p>
                  </div>
                </div>

                {/* Current Role Highlight */}
                <div className="bg-muted/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      ● Current Role
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{featuredExperience.role}</h4>
                  <p className="text-primary font-semibold mb-2">{featuredExperience.company}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {featuredExperience.period}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{featuredExperience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredExperience.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button asChild className="w-full group/btn">
                  <Link href="/experience">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Full Experience
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Projects Section */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative p-8 md:p-10">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h3>
                    <p className="text-muted-foreground">Competitions & research</p>
                  </div>
                </div>

                {/* Featured Projects */}
                <div className="space-y-4 mb-6">
                  {featuredProjects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                        <div className={`p-2 rounded-lg ${project.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
                          <p className="text-xs text-muted-foreground">{project.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-foreground">
                            {project.prize || project.venue}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {project.rank || project.impact}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <Button asChild className="w-full group/btn" variant="secondary">
                  <Link href="/projects">
                    <Award className="w-4 h-4 mr-2" />
                    View All Projects
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Enhanced Design */}
        <section id="skills" className="mb-16 md:mb-20 lg:mb-24">
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

        {/* Call to Action */}
        <section id="cta" className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm passionate about solving complex problems with machine learning and building impactful solutions. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:hamdi.barkous@ept.ucar.tn">
                  Send Email
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
