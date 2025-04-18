"use client"

import Link from "next/link"
import { ArrowUpRight, Award, BookOpen, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const typeIcons = {
  experience: Briefcase,
  publication: BookOpen,
  competition: Award
}

export default function ProjectCard({
  type,
  title,
  subtitle,
  dateOrPeriod,
  description,
  keywords,
  link
}: {
  type: 'experience' | 'publication' | 'competition'
  title: string
  subtitle: string
  dateOrPeriod: string
  description: string | string[]
  keywords: string[]
  link?: string
}) {
  const IconComponent = typeIcons[type]
  const typeColors = {
    experience: "from-blue-500 to-blue-600",
    publication: "from-purple-500 to-purple-600", 
    competition: "from-green-500 to-green-600"
  }

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-background/80 to-background/50 p-[1px] shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Gradient border */}
      <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${typeColors[type]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      
      {/* Glass card */}
      <div className="flex h-full flex-col rounded-2xl bg-background/70 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-background/90">
        {/* Header with icon */}
        <div className="mb-4 flex items-start gap-3">
          <div className={`rounded-lg bg-gradient-to-br ${typeColors[type]} p-2 text-white`}>
            <IconComponent className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {subtitle} • <span className="text-primary">{dateOrPeriod}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4 flex-1 space-y-2">
          {Array.isArray(description) ? (
            description.map((item, i) => (
              <p key={i} className="text-sm text-foreground/90">
                <span className="mr-1 text-primary">•</span> {item}
              </p>
            ))
          ) : (
            <p className="text-sm text-foreground/90">{description}</p>
          )}
        </div>

        {/* Keywords */}
        <div className="mb-4 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <Badge 
              key={keyword} 
              variant="outline"
              className="border-border/50 bg-background/50 text-xs font-medium text-foreground/80 hover:text-foreground"
            >
              {keyword}
            </Badge>
          ))}
        </div>

        {/* Link button */}
        {link && (
          <Button 
            asChild
            size="sm"
            className="w-fit gap-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary/20 hover:to-secondary/20"
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {type === 'publication' ? 'View Publication' : 'View Project'}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}