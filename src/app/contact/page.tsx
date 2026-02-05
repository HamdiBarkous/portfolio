'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        form.reset();
      } else {
        const result = await res.json();
        setError(result.error || 'Failed to send message.');
      }
    } catch {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hamdi.barkous@ept.ucar.tn',
      href: 'mailto:hamdi.barkous@ept.ucar.tn',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'HamdiBarkous',
      href: 'https://www.linkedin.com/in/HamdiBarkous',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'HamdiBarkous',
      href: 'https://github.com/HamdiBarkous',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-[size:40px_40px] opacity-30" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Contact Info - Left Side */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                  <h2 className="text-xl font-bold mb-6 text-foreground">Contact Information</h2>
                  
                  <div className="space-y-5">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          target={item.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noreferrer"
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group"
                        >
                          <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>Tunisia / Remote</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Usually responds within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form - Right Side */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-xl font-bold mb-6 text-foreground">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project or idea..." required rows={6} className="bg-background resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} size="lg" className="w-full group">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm border border-green-200 dark:border-green-500/20"
                    >
                      {success}
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm border border-red-200 dark:border-red-500/20"
                    >
                      {error}
                    </motion.div>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
