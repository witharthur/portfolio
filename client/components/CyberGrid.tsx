export default function CyberGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.accent.DEFAULT)/12%,transparent_60%),radial-gradient(ellipse_at_bottom,theme(colors.primary.DEFAULT)/14%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,theme(colors.border)/80%,transparent_50%),linear-gradient(to_bottom,transparent,theme(colors.border)/50%,transparent_50%)] bg-[length:40px_40px] opacity-40" />
      <div className="absolute -inset-x-10 -top-32 h-64 animate-[scan_4s_linear_infinite] bg-gradient-to-b from-transparent via-primary/30 to-transparent [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      <style>{`@keyframes scan{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </div>
  );
}
