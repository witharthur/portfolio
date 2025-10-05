export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Arthur. All rights reserved.</p>
        <p className="opacity-80">Built with React + TailwindCSS.</p>
      </div>
    </footer>
  );
}
