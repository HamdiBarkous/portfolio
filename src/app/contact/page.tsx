'use client'; // Needed for form handling later, even if basic for now

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail } from 'lucide-react';

// Note: Metadata export might need adjustment if 'use client' is strictly required at the top level.
// For now, we keep it, but might need a separate layout or server component for metadata if form interaction becomes complex.
// export const metadata: Metadata = {
//   title: "Contact | Hamdi Barkous",
//   description: "Get in touch with Hamdi Barkous via email, LinkedIn, or the contact form.",
// };


export default function ContactPage() {

  // Basic handler to prevent default form submission for now
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement actual form submission logic (e.g., API call)
    alert("Form submission not implemented yet.");
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12 md:mb-16">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-muted-foreground">
            Feel free to reach out via email or connect on social media.
          </p>
          <div className="space-y-4">
            <Link href="mailto:hamdi.barkous@ept.ucar.tn" className="flex items-center space-x-3 group">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-primary transition-colors">hamdi.barkous@ept.ucar.tn</span>
            </Link>
            <Link href="https://www.linkedin.com/in/HamdiBarkous" target="_blank" rel="noreferrer" className="flex items-center space-x-3 group">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
            </Link>
            <Link href="https://github.com/HamdiBarkous" target="_blank" rel="noreferrer" className="flex items-center space-x-3 group">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
           <h2 className="text-2xl font-semibold">Send a Message</h2>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label htmlFor="name">Name</Label>
                 <Input id="name" placeholder="Your Name" required />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="email">Email</Label>
                 <Input id="email" type="email" placeholder="your.email@example.com" required />
               </div>
             </div>
             <div className="space-y-2">
               <Label htmlFor="subject">Subject</Label>
               <Input id="subject" placeholder="Subject of your message" required />
             </div>
             <div className="space-y-2">
               <Label htmlFor="message">Message</Label>
               <Textarea id="message" placeholder="Your message..." required rows={5} />
             </div>
             <Button type="submit">Send Message</Button>
           </form>
        </div>
      </div>
    </div>
  );
}