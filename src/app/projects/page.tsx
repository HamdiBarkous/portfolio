"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, BookOpen, Code, ExternalLink, Calendar, Target, Award, Users } from 'lucide-react';
import Link from 'next/link';

const projectsData = [
  {
    id: 1,
    type: 'project',
    title: 'T3 Chat Clone',
    subtitle: 'AI Chatbot with MCP Tools Integration • Live Deployment',
    period: 'Jun 2025',
    impact: 'Full-stack AI chatbot with advanced features',
    description: 'Built and deployed a sophisticated AI chatbot during a cloneathon challenge, featuring cutting-edge MCP tools integration, real-time streaming, and multi-modal capabilities.',
    highlights: [
      'Integrated MCP (Model Context Protocol) tools for external system connectivity',
      'Implemented multi-modal input with documents and image processing',
      'Built real-time streamable messages for responsive UX',
      'Developed innovative chat branching for conversation exploration',
      'Full authentication system with user management',
      'Successfully deployed with AWS backend and Vercel frontend'
    ],
    skills: ['TypeScript', 'Python', 'MCP', 'AI/LLM', 'Real-time Streaming', 'Multi-modal AI', 'Full-stack'],
    status: 'live',
    featured: true,
    link: 'https://github.com/HamdiBarkous/t3-chat-clone',
    liveUrl: 'https://t3-chat-clone-delta.vercel.app/',
    stats: { frontend: 'Next.js', backend: 'Python', deployment: 'AWS + Vercel' }
  },
  {
    id: 2,
    type: 'competition',
    title: 'Unifi PDF Lifting Competition',
    subtitle: '1st Place Winner • $5,000 Prize',
    period: 'Feb 2024',
    impact: 'Ranked 1/76 participants',
    description: 'Developed an advanced solution for extracting structured data from PDF documents using state-of-the-art LLM and RAG techniques.',
    highlights: [
      'Won 1st place out of 76 participants',
      'Earned $5,000 in prize money',
      'Built production-ready PDF extraction system',
      'Implemented LLM-powered document processing pipeline'
    ],
    skills: ['LLM', 'RAG', 'PDF Processing', 'NLP', 'Python'],
    status: 'won',
    link: 'https://github.com/HamdiBarkous/Unifi-Value-Frameworks-PDF-Lifting-Competition',
    stats: { participants: 76, prize: '$5,000', rank: '1st' }
  },
  {
    id: 3,
    type: 'competition',
    title: 'DataDrive2030 Early Learning Challenge',
    subtitle: '1st Place Winner • $3,000 Prize',
    period: 'Jan 2023',
    impact: 'Ranked 1/336 participants',
    description: 'Predicted early learning outcomes using advanced machine learning techniques and sophisticated feature engineering approaches.',
    highlights: [
      'Won 1st place out of 336 participants',
      'Earned $3,000 in prize money',
      'Built predictive models for education outcomes',
      'Advanced feature engineering and model optimization'
    ],
    skills: ['Machine Learning', 'XGBoost', 'Feature Engineering', 'Predictive Modeling'],
    status: 'won',
    link: 'https://github.com/HamdiBarkous/DataDrive2030-Early-Learning-Predictors-Challenge',
    stats: { participants: 336, prize: '$3,000', rank: '1st' }
  },
  {
    id: 4,
    type: 'publication',
    title: 'A Comprehensive Analysis of a Hybrid Deep Learning Model for Midterm Electric Load Forecasting',
    subtitle: 'IEEE International Conference Publication',
    period: 'Dec 2023',
    impact: 'Published at IEEE Smart Cities Conference',
    description: 'A comprehensive analysis of hybrid deep learning approaches for midterm electric load forecasting, published at a premier IEEE conference.',
    highlights: [
      'Published at 21st IEEE International Conference',
      'Presented at Smart Cities conference in Australia',
      'Novel hybrid model architecture contribution',
      'Comprehensive performance analysis and benchmarking'
    ],
    skills: ['Deep Learning', 'Load Forecasting', 'Research', 'PyTorch', 'Time Series'],
    status: 'published',
    link: 'https://ieeexplore.ieee.org/document/10466962',
    stats: { venue: 'IEEE', impact: 'International', type: 'Conference' }
  },
  {
    id: 5,
    type: 'competition',
    title: 'Carbon Dioxide Prediction Challenge',
    subtitle: '1st Place Winner • $2,100 Prize',
    period: 'Mar 2022',
    impact: 'Ranked 1/441 participants',
    description: 'Forecasted carbon dioxide levels using advanced time series analysis and machine learning techniques for environmental impact modeling.',
    highlights: [
      'Won 1st place out of 441 participants',
      'Earned $2,100 in prize money',
      'Environmental impact modeling expertise',
      'Advanced time series forecasting techniques'
    ],
    skills: ['Time Series Forecasting', 'Environmental Modeling', 'Python', 'Statistical Analysis'],
    status: 'won',
    link: 'https://github.com/HamdiBarkous/UmojaHack-Africa-2023-Carbon-Dioxide-Prediction-Challenge',
    stats: { participants: 441, prize: '$2,100', rank: '1st' }
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Target, count: projectsData.length },
  { id: 'project', label: 'Full Stack Projects', icon: Code, count: projectsData.filter(p => p.type === 'project').length },
  { id: 'competition', label: 'Competitions', icon: Trophy, count: projectsData.filter(p => p.type === 'competition').length },
  { id: 'publication', label: 'Publications', icon: BookOpen, count: projectsData.filter(p => p.type === 'publication').length }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(item => item.type === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'won': return 'badge-success';
      case 'published': return 'badge-info';
      case 'live': return 'badge-highlight';
      case 'ongoing': return 'badge-warning';
      default: return 'bg-muted/30 text-muted-foreground border-border';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'competition': return Trophy;
      case 'publication': return BookOpen;
      case 'project': return Code;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
            Projects & Achievements
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A showcase of my competition victories, research publications, and innovative projects in machine learning and AI.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">Full Stack Project</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">$10,000+</div>
              <div className="text-sm text-muted-foreground">AI Hackathon Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">1</div>
              <div className="text-sm text-muted-foreground">IEEE Publication</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card hover:bg-muted border border-border hover:border-primary/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm md:text-base">{category.label}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getTypeIcon(project.type);
            
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                  project.featured ? 'ring-2 ring-primary/20 shadow-primary/10' : ''
                } card`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="badge-prize">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {project.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                        <span>•</span>
                        <span>{project.impact}</span>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-xl">
                      {project.type === 'competition' && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{project.stats.rank}</div>
                            <div className="stat-label">Rank</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-foreground">{project.stats.participants}</div>
                            <div className="stat-label">Participants</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{project.stats.prize}</div>
                            <div className="stat-label">Prize</div>
                          </div>
                        </>
                      )}
                      {project.type === 'publication' && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{project.stats.venue}</div>
                            <div className="stat-label">Venue</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-foreground">{project.stats.impact}</div>
                            <div className="stat-label">Scope</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{project.stats.type}</div>
                            <div className="stat-label">Type</div>
                          </div>
                        </>
                      )}
                      {project.type === 'project' && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{project.stats.frontend}</div>
                            <div className="stat-label">Frontend</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-foreground">{project.stats.backend}</div>
                            <div className="stat-label">Backend</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{project.stats.deployment}</div>
                            <div className="stat-label">Deployment</div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description.replace(/'/g, "&apos;")}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="space-y-3">
                    {project.link && project.link !== '#' && (
                      <Button asChild className="w-full">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.type === 'publication' ? 'View Paper' : 'View Source Code'}
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild className="w-full">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Collaborate on the Next Big Thing</h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m always excited to work on challenging projects and competitions. Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/experience">
                  View Experience
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 