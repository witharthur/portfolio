import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { User, FolderGit2, Cpu, BriefcaseBusiness, Mail } from "lucide-react";

const nav = [
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const targetY = window.innerHeight * 0.35; // near top but stable
      let closest: { id: string; dist: number } | null = null;
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        const dist = Math.abs(rect.top - targetY);
        if (!closest || dist < closest.dist) closest = { id: `#${s.id}`, dist };
      }
      if (closest && closest.id !== active) setActive(closest.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);

  const showBrand = active !== "#about";

  return (
    <>
      {/*  Mobile top bar */}
<div className="md:hidden fixed top-0 left-0 right-0 z-40 border-b bg-background/80 backdrop-blur-sm">
  <div className="mx-auto flex h-14 items-center justify-between px-4">
    <div
      className={cn(
        "flex items-center gap-2 transition-all duration-300",
        showBrand ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative p-[2px] rounded-full border-2 border-accent/60 bg-background">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2Fa7874efb72f94ed5bd6c5805a2110fe4?format=webp&width=200"
          alt="Avatar"
          className="h-7 w-7 rounded-full object-cover"
        />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-accent/30"></span>
      </div>
      <span className="font-bold">Arthur</span>
    </div>
    <button
      aria-label="Open navigation"
      onClick={() => setOpen(true)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent/20 transition"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  </div>
</div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:sticky md:top-0 md:h-screen md:w-64 md:flex-col md:border-r md:bg-background">
        <div className="relative">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        <div
          className={cn(
            "flex items-center gap-3 px-6 border-b border-border transition-all",
            showBrand
              ? "py-6 opacity-100"
              : "h-0 opacity-0 overflow-hidden py-0",
          )}
        >
          <div className="relative p-[2px] rounded-full border-2 border-accent/60 bg-background">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2Fa7874efb72f94ed5bd6c5805a2110fe4?format=webp&width=200"
              alt="Avatar"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-accent/30"></span>
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight">Arthur</p>
            <p className="text-xs text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors",
                active === item.href
                  ? "bg-accent/30 text-foreground ring-1 ring-accent/40"
                  : "hover:bg-accent/20 hover:text-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="px-4 pb-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/arthur-dadalian/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V24h-4v-7.3c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8.5z" />
              </svg>
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/witharthur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:text-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1 .11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.85.12 3.15.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a
              aria-label="Telegram"
              href="https://t.me/Easy11236"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:text-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M9.04 15.44 8.86 19c.4 0 .58-.17.78-.38l1.88-1.8 3.9 2.86c.72.4 1.24.19 1.43-.66l2.6-12.23c.26-1.2-.46-1.67-1.15-1.38L3.5 9.22c-1.17.46-1.15 1.12-.2 1.42l4.53 1.41 10.52-6.64c.5-.31.96-.14.58.17L9.04 15.44Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="px-4 pb-6">
          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
          >
            <Button className="w-full">Get in touch</Button>
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 bg-background border-r shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between pb-2 border-b">
              <div className="flex items-center gap-2">
                <div className="relative p-[2px] rounded-full border-2 border-accent/60 bg-background">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2Fa7874efb72f94ed5bd6c5805a2110fe4?format=webp&width=200"
                    alt="Avatar"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-accent/30"></span>
                </div>
                <span className="font-bold">Arthur</span>
              </div>
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 space-y-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pb-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/arthur-dadalian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V24h-4v-7.3c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8.5z" />
                  </svg>
                </a>
                <a
                  aria-label="GitHub"
                  href="https://github.com/witharthur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1 .11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.85.12 3.15.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>
                <a
                  aria-label="Telegram"
                  href="https://t.me/Easy11236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M9.04 15.44 8.86 19c.4 0 .58-.17.78-.38l1.88-1.8 3.9 2.86c.72.4 1.24.19 1.43-.66l2.6-12.23c.26-1.2-.46-1.67-1.15-1.38L3.5 9.22c-1.17.46-1.15 1.12-.2 1.42l4.53 1.41 10.52-6.64c.5-.31.96-.14.58.17L9.04 15.44Z" />
                  </svg>
                </a>
              </div>
            </div>
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Get in touch</Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
