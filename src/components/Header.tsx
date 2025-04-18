import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle'; // Import ThemeToggle

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Adjust container to justify space between nav and toggle */}
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Placeholder for Logo or Name */}
            <span className="font-bold">Hamdi Barkous</span>
          </Link>
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle /> {/* Add the ThemeToggle component */}
        </div>
      </div>
    </header>
  );
}