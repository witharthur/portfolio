import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter";
import CyberGrid from "@/components/CyberGrid";
import { useState } from "react";
import {
  Code,
  Server,
  Palette,
  Database,
  FlaskConical,
  Wrench,
  FileCode,
  Braces,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import { Link } from "react-router-dom";

export default function Index() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <CyberGrid />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.primary.DEFAULT)/22%,transparent)]" />
        </div>
        <div className="container mx-auto grid gap-10 py-24 md:py-32 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7" as="div">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />{" "}
              Open to opportunities
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Arthur —{" "}
              <Typewriter
                phrases={[
                  "Software Engineer",
                  "Cyber‑minded",
                  "Type‑safe Builder",
                  "Hacking the UX",
                ]}
              />
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design, build, and scale modern web apps. My work blends strong
              engineering with polished UX, focusing on reliability,
              performance, and delightful details.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event("open-contact"))}
              >
                <Button className="shadow-sm">Contact me</Button>
              </button>
              <a href="#projects">
                <Button variant="secondary">View projects</Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "Express",
                "PostgreSQL",
                "TailwindCSS",
              ].map((s) => (
                <Badge key={s} variant="secondary" className="px-3 py-1">
                  {s}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" as="div" delay={120}>
            <PhotoFrame src="https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2Fa7874efb72f94ed5bd6c5805a2110fe4?format=webp&width=800" />
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="container mx-auto py-20 md:py-28 scroll-mt-24"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" as="div">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              About me
            </h2>
            <p className="mt-4 text-muted-foreground">
              I’m a software engineer specializing in front-end platforms and
              product engineering. I love shipping features end‑to‑end: from API
              design to elegant, accessible UI.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Product‑minded</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear UX thinking, pragmatic trade‑offs, and measurable impact.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Quality focused</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Type‑safe code, testing where it counts, and strong performance.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Collaborative</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Great communication and ownership across teams and stakeholders.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Crafted UI</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Polished, accessible interfaces with thoughtful interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-muted/30 py-20 md:py-28 scroll-mt-24"
      >
        <div className="container mx-auto">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Selected projects
              </h2>
              <p className="mt-2 text-muted-foreground">
                A few things I’ve built recently.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal
                key={p.title}
                as="article"
                className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition"
                delay={i * 80}
              >
                {p.imageUrl ? (
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/15 to-accent/15" />
                )}
                <div className="space-y-3 p-6">
                  <h3 className="font-semibold group-hover:text-foreground/90 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2 flex gap-2">
                    {p.demoUrl ? (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="secondary">
                          Demo
                        </Button>
                      </a>
                    ) : (
                      <Link to={`/project/${p.slug}`}>
                        <Button size="sm" variant="secondary">
                          Demo
                        </Button>
                      </Link>
                    )}
                    {p.adminUrl ? (
                      <a
                        href={p.adminUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline">
                          Admin
                        </Button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="container mx-auto py-20 md:py-28 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Skills
            </h2>
            <p className="mt-2 text-muted-foreground">
              Tools and technologies I use most.
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={() => setShowAllSkills((v) => !v)}
            aria-expanded={showAllSkills}
          >
            {showAllSkills ? "Show less" : "Read more"}
          </Button>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group flex items-center justify-between rounded-xl border bg-card p-4 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div>
                <p className="font-medium flex items-center gap-2">
                  <s.icon className="h-4 w-4 text-primary" /> {s.name}
                </p>
                <p className="text-sm text-muted-foreground">{s.info}</p>
              </div>
              <div className="grid place-items-center h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-primary to-accent text-white opacity-90 shadow-sm">
                <s.icon className="h-5 w-5 drop-shadow-sm" strokeWidth={2} aria-hidden />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`transition-all ${showAllSkills ? "mt-6 opacity-100" : "mt-0 max-h-0 overflow-hidden opacity-0"}`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-4">
              <p className="font-medium flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" /> Languages & Frameworks
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                JavaScript, React.js, Node.js, Python, HTML, CSS, REST APIs
              </p>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <p className="font-medium flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" /> Backend & Databases
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Flask (basic), MongoDB (NoSQL), API Integration
              </p>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <p className="font-medium flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" /> Soft Skills
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Team Collaboration, Problem Solving, Communication, Fast
                Learning
              </p>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <p className="font-medium flex items-center gap-2">
                <FileCode className="h-4 w-4 text-primary" /> Languages
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Armenian (Native), Russian (Advanced), English (Intermediate)
              </p>
            </div>
          </div>
        </div>
      </section>

         <section
        id="experience"
        className="bg-muted/30 py-20 md:py-28 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {experience.map((e, i) => (
              <Reveal
                key={e.role}
                as="div"
                className="rounded-xl border bg-card p-6 shadow-sm"
                delay={i * 100}
              >
                <div className="flex items-start sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{e.role}</h3>
                    {(() => {
                      const [start, end] = (e.period || "").split(/—|-/).map((s) => s.trim());
                      return (
                        <p className="sm:hidden mt-0.5 text-xs text-muted-foreground leading-snug">
                          {start} — {end}
                  
                        </p>
                      );
                    })()}
                  </div>
                  <span className="hidden sm:inline text-xs text-muted-foreground whitespace-nowrap">
                    {e.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {e.company}
                </p>
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="container mx-auto py-20 md:py-28 scroll-mt-24"
      >
        <div className="rounded-2xl border bg-card p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let’s work together
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or an opportunity you’d like to discuss? I’m
            always happy to chat.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
            >
              <Button>Send an email</Button>
            </button>
            <a href="#projects">
              <Button variant="secondary">See my work</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "TOMATO | Full Stack Food Delivery Website",
    slug: "tomato-food-delivery",
    description:
      "A full-stack food delivery platform where users can browse menus, order meals, and track deliveries in real-time, built with React, Node.js, Express, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Rest API"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2F75286f782a8e4130977db9a5e59f69e3?format=webp&width=800",
    demoUrl: "https://food-del-frontend-qaqz.onrender.com/",
    adminUrl: "https://food-del-admin-7bek.onrender.com/",
  },
  {
    title: "FURNIRO | Beautiful Forms, Modern Interiors",
    slug: "furniro-frontend",
    description: "An interactive and responsive form system for furniture-related applications, designed for usability, speed, and clean UI",
    tech: ["React", "TailwindCSS"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2F2ecbc4b80cc94b6ab586aee57fa90379?format=webp&width=800",
  },
  {
    title: "MOVIES | Movie Website using HTML, CSS, and JS",
    slug: "movies-hd",
    description: "A front-end movie discovery website built with HTML, CSS, and JavaScript, offering users a clean interface to explore and browse films",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6fa3bdf9e8e426da2f7d929c3f50f27%2F9edc474aa7ae40f5ad2970b28b524567?format=webp&width=800",
  },
];

const moreSkillTags = [] as const;

const skills = [
  {
    name: "Frontend",
    info: "React, TypeScript, Vite, React Router",
    icon: Code,
  },
  { name: "Backend", info: "Node.js, Express, REST APIs", icon: Server },
  {
    name: "UI/UX",
    info: "TailwindCSS, Accessibility, Animations",
    icon: Palette,
  },
  { name: "Data", info: "PostgreSQL, Prisma, SQL", icon: Database },
  { name: "Testing", info: "Vitest, Playwright (setup)", icon: FlaskConical },
  { name: "Tooling", info: "Git, CI/CD, Monorepos", icon: Wrench },
  { name: "Markup", info: "HTML & CSS", icon: FileCode },
  { name: "APIs", info: "REST & JSON", icon: Braces },
];

const experience = [
  {
    role: "Software Engineer (Freelance)",
    company: "Independent",
    period: "2022 — Present",
    highlights: [
      "Delivered full‑stack features end‑to‑end for startups",
      "Improved performance and accessibility across apps",
      "Partnered with design to ship polished UX",
    ],
  },
  {
    role: "Software Engineer (Full-Time)",
    company: "Daniam LLC",
    period: "2022 — 2024",
    highlights: [
      "Built modular, type‑safe React components",
      "Led migrations to modern tooling and patterns",
      "Mentored teammates and improved DX",
    ],
  },
];
