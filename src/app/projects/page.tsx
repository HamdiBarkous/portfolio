import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Hamdi Barkous",
  description: "Explore projects, publications, and competition achievements by Hamdi Barkous.",
};

// Data extracted from resume.tex
const projectsData = [
  // Experience
  {
    type: 'experience' as const,
    title: 'FinGenesis',
    subtitle: 'ML Engineer',
    dateOrPeriod: '2023 – Present',
    description: [
      'Designed and implemented DL/ML models to predict price movements of financial symbols.',
      'Developed an agentic framework for ticker-based sentiment analysis, enabling actionable insights.',
      'Designed and implemented rule-based trading strategies.',
      'Designed and implemented LLM-based trading strategies with explainability.',
      'Designed a backtesting framework for evaluating trading strategies.',
      'Improved data pipeline efficiencies and speed.',
    ],
    keywords: ['Deep Learning', 'Machine Learning', 'Finance', 'Agentic Frameworks', 'Sentiment Analysis', 'LLM', 'Trading', 'Backtesting', 'Data Pipelines'],
  },
  {
    type: 'experience' as const,
    title: 'XAI Lab - Concordia University',
    subtitle: 'AI Research Scholar',
    dateOrPeriod: 'May 2020 – Sep 2020',
    description: 'Implemented and validated the ETS+RD-LSTM model for midterm load forecasting.',
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
    // link: 'Optional link to publication if available'
  },
  // AI Competitions
  {
    type: 'competition' as const,
    title: 'Unifi Value Frameworks PDF Lifting Competition ($5000)',
    subtitle: 'Ranked 1/76',
    dateOrPeriod: 'Competition', // Generic date placeholder
    description: 'Developed a solution for extracting structured data from PDF documents.',
    keywords: ['LLM', 'RAG', 'PDF Extraction'],
    link: 'https://github.com/HamdiBarkous/Unifi-Value-Frameworks-PDF-Lifting-Competition',
  },
  {
    type: 'competition' as const,
    title: 'DataDrive2030 Early Learning Predictors Challenge ($3000)',
    subtitle: 'Ranked 1/336',
    dateOrPeriod: 'Competition',
    description: 'Predicted early learning outcomes based on provided datasets.',
    keywords: ['Machine Learning', 'XGBoost', 'Predictive Modeling'],
    link: 'https://github.com/HamdiBarkous/DataDrive2030-Early-Learning-Predictors-Challenge',
  },
  {
    type: 'competition' as const,
    title: 'Carbon Dioxide Prediction Challenge ($2100)',
    subtitle: 'Ranked 1/441',
    dateOrPeriod: 'Competition',
    description: 'Forecasted carbon dioxide levels using time series data.',
    keywords: ['Machine Learning', 'Time Series Forecasting', 'Environment'],
    link: 'https://github.com/HamdiBarkous/UmojaHack-Africa-2023-Carbon-Dioxide-Prediction-Challenge',
  },
];


export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12 md:mb-16">
        Projects & Experience
      </h1>
      {/* Add wrapper div with accent background */}
      <div className="bg-muted/10 rounded-lg p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}