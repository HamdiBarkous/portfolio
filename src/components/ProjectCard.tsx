"use client"

import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
  const typeColors = {
    experience: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    publication: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    competition: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/70 p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 hover:bg-background/90">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative z-10 flex h-full flex-col">
        {/* Type badge */}
        <Badge className={`mb-4 w-fit ${typeColors[type]}`}>
          {type.toUpperCase()}
        </Badge>

        {/* Title & Subtitle */}
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {subtitle} • {dateOrPeriod}
          </p>

          {/* Description */}
          <div className="mt-4 space-y-2">
            {Array.isArray(description) ? (
              description.map((item, i) => (
                <p key={i} className="text-sm text-foreground/80">
                  • {item}
                </p>
              ))
            ) : (
              <p className="text-sm text-foreground/80">{description}</p>
            )}
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <Badge 
              key={keyword} 
              variant="secondary"
              className="text-xs font-medium"
            >
              {keyword}
            </Badge>
          ))}
        </div>

        {/* Link button */}
        {link && (
          <Button 
            asChild
            variant="ghost"
            size="sm"
            className="mt-4 w-fit gap-1 text-primary hover:text-primary/80"
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