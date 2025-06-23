"use client"

import Link from "next/link"
import { ArrowUpRight, Award, BookOpen, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const typeIcons = {
  experience: Briefcase,
  publication: BookOpen,
  competition: Award
}

interface TimelineCardProps {
  type: 'experience' | 'publication' | 'competition'
  title: string
  subtitle: string
  dateOrPeriod: string
  description: string | string[]
  keywords: string[]
  link?: string
  side: 'left' | 'right'
  index: number
}

export default function TimelineCard({
  type,
  title,
  subtitle,
  dateOrPeriod,
  description,
  keywords,
  link,
  side,
  index
}: TimelineCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = typeIcons[type]
  const typeColors = {
    experience: "from-blue-500 to-blue-600",
    publication: "from-purple-500 to-purple-600", 
    competition: "from-green-500 to-green-600"
  }

  const animationDelay = `${index * 0.1}s`

  return (
    <div 
      className={`relative w-full ${side === 'left' ? 'pr-8' : 'pl-8'} opacity-0 animate-fade-in-up`}
      style={{ 
        animationDelay,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Timeline connector dot with pulse effect */}
      <div className={`absolute top-6 w-4 h-4 z-10 ${
        side === 'left' ? '-right-2' : '-left-2'
      }`}>
        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${typeColors[type]} transition-all duration-300 ${
          isHovered ? 'scale-125 shadow-lg' : 'scale-100'
        }`} />
        <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br ${typeColors[type]} animate-ping opacity-20`} />
      </div>
      
      {/* Card content with enhanced animations */}
      <div className={`group relative overflow-hidden rounded-2xl border border-border/20 bg-card/95 p-[1px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-border/40 ${
        side === 'left' ? 'mr-6' : 'ml-6'
      } ${isHovered ? 'transform-gpu' : ''}`}>
        {/* Enhanced gradient border with animation */}
        <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${typeColors[type]} opacity-0 transition-all duration-500 group-hover:opacity-100 animate-gradient-shift`} />
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Glass card with enhanced backdrop blur */}
        <div className="flex flex-col rounded-2xl bg-card p-6 backdrop-blur-sm transition-all duration-500 group-hover:backdrop-blur-md">
          {/* Header with enhanced icon animation */}
          <div className="mb-4 flex items-start gap-3">
            <div className={`rounded-lg bg-gradient-to-br ${typeColors[type]} p-2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
              <IconComponent className="h-5 w-5 transition-transform duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground transition-colors duration-300">
                {subtitle} • <span className="text-primary font-semibold">{dateOrPeriod}</span>
              </p>
            </div>
          </div>

          {/* Description with staggered reveal animation */}
          <div className="mb-4 flex-1 space-y-2">
            {Array.isArray(description) ? (
              description.map((item, i) => (
                <p 
                  key={i} 
                  className="text-sm text-foreground/90 transition-all duration-300 group-hover:text-foreground opacity-0 animate-fade-in-right"
                  style={{ 
                    animationDelay: `${0.1 + i * 0.05}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="mr-2 text-primary transition-all duration-300 group-hover:scale-125 inline-block">•</span> 
                  {item}
                </p>
              ))
            ) : (
              <p className="text-sm text-foreground/90 transition-colors duration-300 group-hover:text-foreground">
                {description}
              </p>
            )}
          </div>

          {/* Keywords with enhanced hover effects */}
          <div className="mb-4 flex flex-wrap gap-2">
            {keywords.map((keyword, i) => (
              <Badge 
                key={keyword} 
                variant="outline"
                className="border-border/50 bg-background/50 text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-default opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${0.2 + i * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {keyword}
              </Badge>
            ))}
          </div>

          {/* Enhanced link button */}
          {link && (
            <Button 
              asChild
              size="sm"
              className="w-fit gap-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {type === 'publication' ? 'View Publication' : 'View Project'}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
} 