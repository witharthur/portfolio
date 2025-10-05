import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent" />
          <span className="font-extrabold tracking-tight text-lg">Arthur</span>
          <span className="hidden md:inline text-muted-foreground">• Software Engineer</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact">
            <Button size="sm">Get in touch</Button>
          </a>
        </nav>

        <button
          className={cn("md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border", open && "bg-accent/40")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 space-y-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full" size="sm">Get in touch</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
