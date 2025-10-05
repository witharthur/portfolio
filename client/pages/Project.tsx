import { useParams, Link as RLink } from "react-router-dom";

export default function Project() {
  const { slug } = useParams();
  const title = (slug ?? "project").split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");

  return (
    <div className="container mx-auto py-16">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
        <RLink to="/" className="text-sm text-primary underline-offset-4 hover:underline">← Back to home</RLink>
      </div>
      <p className="text-muted-foreground max-w-2xl">
        This is a demo placeholder for the project. Replace with a live embed or detailed case study.
      </p>
      <div className="mt-8 rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">Project content goes here.</p>
      </div>
    </div>
  );
}
