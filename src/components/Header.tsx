'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return isActive
      ? 'nav-link-active relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full'
      : 'nav-link-inactive';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform">
            HB
          </div>
          <span className="font-bold hidden sm:inline-block">Hamdi Barkous</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`${getLinkClassName(link.href)} py-1`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex text-xs">
            <a href="/resume.pdf" download="Hamdi_Barkous_Resume.pdf">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </a>
          </Button>
          <ThemeToggle />
          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${getLinkClassName(link.href)} py-2 px-3 rounded-lg hover:bg-muted transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Hamdi_Barkous_Resume.pdf"
              className="py-2 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
