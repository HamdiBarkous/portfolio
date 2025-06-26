"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Briefcase, BookOpen, ExternalLink, Calendar, Trophy, Target } from 'lucide-react';
import Link from 'next/link';

const workData = [
  {
    id: 1,
    type: 'experience' as const,
    title: 'FinGenesis',
    role: 'ML Engineer',
    period: '2024 – Present',
    impact: 'Built DL/ML models for financial prediction with trading strategies',
    description: 'Designed and implemented deep learning models to predict price movements, developed agentic frameworks for sentiment analysis, and created backtesting systems for trading strategies.',
    achievements: [
      'Implemented DL/ML models for financial symbol prediction',
      'Built agentic framework for ticker-based sentiment analysis',
      'Designed rule-based and LLM trading strategies',
      'Created comprehensive backtesting framework',
      'Optimized data pipeline efficiency and speed'
    ],
    skills: ['Deep Learning', 'Machine Learning', 'Finance', 'LLM', 'Trading', 'Python'],
    status: 'ongoing',
    featured: true
  },
  {
    id: 2,
    type: 'experience' as const,
    title: 'XAI Lab - Concordia University',
    role: 'AI Research Scholar',
    period: 'May 2023 – Sep 2023',
    impact: 'Advanced electric load forecasting with hybrid ETS+RD-LSTM model',
    description: 'Conducted cutting-edge research on midterm electric load forecasting, implementing and validating a novel hybrid model combining ETS and residual dilated LSTM architectures.',
    achievements: [
      'Implemented hybrid ETS+RD-LSTM forecasting model',
      'Conducted comprehensive literature review of SOTA methods',
      'Enhanced model architecture through iterative optimization',
      'Led ablation study comparing deep learning approaches'
    ],
    skills: ['LSTM', 'Time Series', 'Research', 'ETS', 'Forecasting'],
    status: 'completed'
  },
  {
    id: 3,
    type: 'competition' as const,
    title: 'Unifi PDF Lifting Competition',
    role: '1st Place Winner',
    period: 'Feb 2024',
    impact: '$5,000 prize • Ranked 1/76 participants',
    description: 'Developed an advanced solution for extracting structured data from PDF documents using LLM and RAG techniques.',
    achievements: [
      'Won 1st place out of 76 participants',
      'Earned $5,000 in prize money',
      'Built production-ready PDF extraction system',
      'Implemented LLM-powered document processing'
    ],
    skills: ['LLM', 'RAG', 'PDF Processing', 'NLP'],
    status: 'won',
    featured: true,
    link: 'https://github.com/HamdiBarkous/Unifi-Value-Frameworks-PDF-Lifting-Competition'
  },
  {
    id: 4,
    type: 'competition' as const,
    title: 'DataDrive2030 Early Learning Challenge',
    role: '1st Place Winner',
    period: 'Jan 2023',
    impact: '$3,000 prize • Ranked 1/336 participants',
    description: 'Predicted early learning outcomes using advanced machine learning techniques and feature engineering.',
    achievements: [
      'Won 1st place out of 336 participants',
      'Earned $3,000 in prize money',
      'Built predictive models for education outcomes',
      'Advanced feature engineering and model optimization'
    ],
    skills: ['Machine Learning', 'XGBoost', 'Predictive Modeling'],
    status: 'won',
    featured: true,
    link: 'https://github.com/HamdiBarkous/DataDrive2030-Early-Learning-Predictors-Challenge'
  },
  {
    id: 5,
    type: 'publication' as const,
    title: 'Hybrid Deep Learning Model for Electric Load Forecasting',
    role: 'Lead Author',
    period: 'Dec 2023',
    impact: 'Published at IEEE International Conference on Smart Cities',
    description: 'A comprehensive analysis of hybrid deep learning approaches for midterm electric load forecasting, published at a premier IEEE conference.',
    achievements: [
      'Published at 21st IEEE International Conference',
      'Presented at Smart Cities conference in Australia',
      'Novel hybrid model architecture contribution',
      'Comprehensive performance analysis and benchmarking'
    ],
    skills: ['Deep Learning', 'Load Forecasting', 'Research'],
    status: 'published'
  },
  {
    id: 6,
    type: 'competition' as const,
    title: 'Carbon Dioxide Prediction Challenge',
    role: '1st Place Winner',
    period: 'Mar 2022',
    impact: '$2,100 prize • Ranked 1/441 participants',
    description: 'Forecasted carbon dioxide levels using time series analysis and machine learning techniques.',
    achievements: [
      'Won 1st place out of 441 participants',
      'Earned $2,100 in prize money',
      'Environmental impact modeling',
      'Advanced time series forecasting'
    ],
    skills: ['Time Series Forecasting', 'Environmental Modeling'],
    status: 'won',
    link: 'https://github.com/HamdiBarkous/UmojaHack-Africa-2023-Carbon-Dioxide-Prediction-Challenge'
  }
];

const categories = [
  { id: 'all', label: 'All Work', icon: Target },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'competition', label: 'Competitions', icon: Trophy },
  { id: 'publication', label: 'Publications', icon: BookOpen }
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredWork = activeCategory === 'all' 
    ? workData 
    : workData.filter(item => item.type === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'won': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'completed': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'published': return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default: return 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'experience': return Briefcase;
      case 'competition': return Trophy;
      case 'publication': return BookOpen;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
            My Work & Achievements
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my professional journey through impactful projects, competition victories, and research contributions in machine learning and AI.
          </p>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Competition Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">$10K+</div>
              <div className="text-sm text-muted-foreground">Prize Money</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">1</div>
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
                  {category.id === 'all' ? workData.length : workData.filter(item => item.type === category.id).length}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredWork.map((item, index) => {
            const Icon = getTypeIcon(item.type);
            
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                  item.featured ? 'ring-2 ring-primary/20 shadow-primary/10' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                      <Trophy className="w-3 h-3 mr-1" />
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
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium">{item.role}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </div>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-primary mb-2">Impact & Results</div>
                    <p className="text-foreground font-medium">{item.impact}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Action */}
                  {item.link && (
                    <Button asChild className="w-full group/btn">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                        <div className="ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity">
                          →
                        </div>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on challenging ML projects and research opportunities.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}