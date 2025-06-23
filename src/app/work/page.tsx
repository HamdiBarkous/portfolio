import TimelineCard from '@/components/TimelineCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work | Hamdi Barkous",
  description: "Explore work experience, projects, and achievements by Hamdi Barkous.",
};

// Data extracted from resume.tex
const workData = [
  // Experience
  {
    type: 'experience' as const,
    title: 'FinGenesis',
    subtitle: 'ML Engineer',
    dateOrPeriod: '2024 – Present',
    description: [
      'Designed and implemented DL/ML models to predict price movements of financial symbols.',
      'Developed an agentic framework for ticker-based sentiment analysis, enabling actionable insights.',
      'Designed and implemented rule-based and LLM-based trading strategies with explainability.',
      'Designed a backtesting framework for evaluating trading strategies.',
      'Implemented various algorithms from the literature for forecasts post-processing.',
      'Improved data pipelines efficiencies and speed.',
    ],
    keywords: ['Deep Learning', 'Machine Learning', 'Finance', 'Agentic Frameworks', 'Sentiment Analysis', 'LLM', 'Trading', 'Backtesting', 'Data Pipelines'],
  },
  {
    type: 'experience' as const,
    title: 'XAI Lab - Concordia University',
    subtitle: 'AI Research Scholar',
    dateOrPeriod: 'May 2023 – Sep 2023',
    description: [
      'Worked on midterm electric load forecasting by implementing and validating a hybrid ETS+RD-LSTM model.',
      'Conducted an in-depth literature review of state-of-the-art forecasting methods, identifying key limitations and opportunities for improvement.',
      'Enhanced the baseline model\'s architecture and performance through iterative experimentation and optimization.',
      'Led a comprehensive ablation study to understand the individual contributions of each model component, and benchmarked performance against other advanced deep learning and statistical models.',
    ],
    keywords: ['LSTM', 'Dilation', 'Residual Connection', 'ETS', 'Forecasting', 'Time Series'],
  },
  // Publications
  {
    type: 'publication' as const,
    title: 'A Comprehensive Analysis of a Hybrid Deep Learning Model for Midterm Electric Load Forecasting',
    subtitle: '21st IEEE International Conference on Smart Cities, Australia',
    dateOrPeriod: 'Dec 13, 2023',
    description: 'Authors: Barkous, H., Amayri, M., & Bouguila, N.',
    keywords: ['Deep Learning', 'Load Forecasting', 'Hybrid Model', 'IEEE'],
  },
  // AI Competitions
  {
    type: 'competition' as const,
    title: 'Unifi Value Frameworks PDF Lifting Competition ($5000)',
    subtitle: 'Ranked 1/76',
    dateOrPeriod: 'Feb 2024',
    description: 'Developed a solution for extracting structured data from PDF documents.',
    keywords: ['LLM', 'RAG', 'PDF Extraction'],
    link: 'https://github.com/HamdiBarkous/Unifi-Value-Frameworks-PDF-Lifting-Competition',
  },
  {
    type: 'competition' as const,
    title: 'DataDrive2030 Early Learning Predictors Challenge ($3000)',
    subtitle: 'Ranked 1/336',
    dateOrPeriod: 'Jan 2023',
    description: 'Predicted early learning outcomes based on provided datasets.',
    keywords: ['Machine Learning', 'XGBoost', 'Predictive Modeling'],
    link: 'https://github.com/HamdiBarkous/DataDrive2030-Early-Learning-Predictors-Challenge',
  },
  {
    type: 'competition' as const,
    title: 'Carbon Dioxide Prediction Challenge ($2100)',
    subtitle: 'Ranked 1/441',
    dateOrPeriod: 'Mar 2022',
    description: 'Forecasted carbon dioxide levels using time series data.',
    keywords: ['Machine Learning', 'Time Series Forecasting', 'Environment'],
    link: 'https://github.com/HamdiBarkous/UmojaHack-Africa-2023-Carbon-Dioxide-Prediction-Challenge',
  },
];

export default function WorkPage() {
  // Separate experience and projects/competitions
  const experiences = workData.filter(item => item.type === 'experience');
  const projects = workData.filter(item => item.type === 'publication' || item.type === 'competition');

  // Sort by date (most recent first)
  const sortByDate = (a: any, b: any) => {
    // Extract year from dateOrPeriod for sorting
    const getYear = (dateStr: string) => {
      const match = dateStr.match(/(\d{4})/g);
      return match ? Math.max(...match.map(Number)) : 0;
    };
    return getYear(b.dateOrPeriod) - getYear(a.dateOrPeriod);
  };

  const sortedExperiences = [...experiences].sort(sortByDate);
  const sortedProjects = [...projects].sort(sortByDate);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Enhanced header with animations */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Work & Projects
        </h1>
        <div className="mt-4 opacity-0 animate-fade-in-up" 
             style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg">
            A timeline of professional experience and project achievements
          </p>
        </div>
      </div>
      
      {/* Enhanced timeline container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced central timeline line with gradient and glow */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full opacity-0 animate-fade-in" 
             style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {/* Animated glow effect */}
          <div className="absolute inset-0 w-1 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 rounded-full blur-sm animate-pulse" />
          
          {/* Date markers on timeline */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="bg-background border-2 border-primary rounded-full px-3 py-1 text-xs font-semibold text-primary shadow-lg">
              2024
            </div>
          </div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="bg-background border-2 border-primary rounded-full px-3 py-1 text-xs font-semibold text-primary shadow-lg">
              2023
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="bg-background border-2 border-muted-foreground rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground shadow-lg">
              2022
            </div>
          </div>
        </div>
        
        {/* Timeline content with enhanced animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Left column - Experience with staggered animations */}
          <div className="space-y-8">
            <div className="text-center lg:text-right mb-8 opacity-0 animate-slide-in-left" 
                 style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 relative z-10">
                  Experience
                </h2>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-full" />
              </div>
              <p className="text-muted-foreground mt-4">Professional roles and research positions</p>
            </div>
            {sortedExperiences.map((item, index) => (
              <div key={`exp-${index}`} className="lg:flex lg:justify-end">
                <div className="lg:max-w-lg">
                  <TimelineCard {...item} side="left" index={index} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Right column - Projects & Publications with staggered animations */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-8 opacity-0 animate-slide-in-right" 
                 style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 relative z-10">
                  Projects & Publications
                </h2>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/30 to-green-500/30 rounded-full" />
              </div>
              <p className="text-muted-foreground mt-4">Competition wins and research publications</p>
            </div>
            {sortedProjects.map((item, index) => (
              <div key={`proj-${index}`} className="lg:flex lg:justify-start">
                <div className="lg:max-w-lg">
                  <TimelineCard {...item} side="right" index={index + sortedExperiences.length} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="fixed bottom-8 right-8 z-50 opacity-0 animate-fade-in" 
             style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}