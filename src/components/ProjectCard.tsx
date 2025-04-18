import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Trophy, Briefcase } from 'lucide-react'; // Icons for type and links

interface ProjectCardProps {
  type: 'experience' | 'publication' | 'competition';
  title: string;
  subtitle?: string; // e.g., Role, Conference, Competition Prize/Rank
  dateOrPeriod: string;
  description: string | string[]; // Can be a single string or list of points
  keywords?: string[];
  link?: string; // GitHub link, publication link, etc.
}

const TypeIcon = ({ type }: { type: ProjectCardProps['type'] }) => {
  switch (type) {
    case 'experience': return <Briefcase className="h-4 w-4 mr-2" />;
    case 'publication': return <BookOpen className="h-4 w-4 mr-2" />;
    case 'competition': return <Trophy className="h-4 w-4 mr-2" />;
    default: return null;
  }
};

export default function ProjectCard({
  type,
  title,
  subtitle,
  dateOrPeriod,
  description,
  keywords,
  link,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full"> {/* Ensure cards take full height in grid */}
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="outline" className="flex items-center whitespace-nowrap">
            <TypeIcon type={type} />
            {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize type */}
          </Badge>
        </div>
        {subtitle && <CardDescription className="text-sm">{subtitle}</CardDescription>}
        <CardDescription className="text-xs">{dateOrPeriod}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"> {/* Allow content to grow */}
        {Array.isArray(description) ? (
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {description.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2 pt-4"> {/* Footer content */}
        {keywords && keywords.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {keywords.map((keyword) => (
              <Badge key={keyword} variant="secondary" className="text-xs">{keyword}</Badge>
            ))}
          </div>
        )}
        {link && (
          <Button asChild variant="outline" size="sm" className="mt-auto">
            <Link href={link} target="_blank" rel="noreferrer">
              <ExternalLink className="h-3 w-3 mr-1.5" />
              View Details
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}