"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ExternalLink, TrendingUp, Users, Code, Award } from 'lucide-react';
import Link from 'next/link';

const experienceData = [
  {
    id: 1,
    company: 'FinGenesis',
    role: 'ML Engineer',
    period: '2024 – Present',
    location: 'Remote',
    type: 'Full-time',
    status: 'current',
    achievements: [
      'Implemented DL/ML models for financial symbol prediction',
      'Built agentic framework for real-time ticker-based sentiment analysis',
      'Designed rule-based and LLM-powered trading strategies',
      'Created comprehensive backtesting framework',
      'Optimized data pipeline efficiency, reducing processing time by 60%'
    ],
    skills: ['Deep Learning', 'Machine Learning', 'Finance', 'LLM', 'Trading Strategies', 'Python', 'Data Engineering'],
    impact: 'Developing advanced AI solutions for financial markets and trading optimization'
  },
  {
    id: 2,
    company: 'XAI Lab - Concordia University',
    role: 'AI Research Scholar',
    period: 'May 2023 – Sep 2023',
    location: 'Montreal, Canada',
    type: 'Research',
    status: 'completed',
    achievements: [
      'Implemented hybrid ETS+RD-LSTM forecasting model achieving 15% better accuracy',
      'Conducted comprehensive literature review of 50+ SOTA forecasting methods',
      'Enhanced model architecture through systematic hyperparameter optimization',
      'Led ablation study comparing 8 different deep learning approaches',
      'Published findings at IEEE International Conference on Smart Cities'
    ],
    skills: ['LSTM', 'Time Series Forecasting', 'Research', 'ETS Models', 'PyTorch', 'Scientific Writing'],
    impact: 'Conducted advanced research on midterm electric load forecasting, developing novel hybrid models combining traditional and deep learning approaches.'
  }
];

export default function ExperiencePage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'badge-success';
      case 'completed': return 'badge-info';
      default: return 'bg-muted/30 text-muted-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
            Work Experience
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            My professional journey in machine learning and AI, building impactful solutions and advancing the field through research and development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-px"></div>
          
          {experienceData.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-2 z-10"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-20 md:ml-0' : 'md:pl-12 ml-20 md:ml-0'}`}>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] card">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`text-xs font-medium border ${getStatusColor(experience.status)}`}>
                          {experience.status === 'current' ? '\u25cf Current' : 'Completed'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {experience.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {experience.role}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">Key Impact</span>
                    </div>
                    <p className="text-foreground font-medium">
                      {experience.impact}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-foreground" />
                      <span className="text-sm font-semibold text-foreground">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">Technologies & Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m passionate about solving complex problems with AI and building impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">
                  View My Projects
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