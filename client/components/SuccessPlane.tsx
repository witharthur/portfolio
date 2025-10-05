type Props = { title?: string; subtitle?: string };

export default function SuccessPlane({
  title = "Message sent!",
  subtitle = "Thanks — I’ll get back to you soon.",
}: Props) {
  const path = "M10 100 C 80 40, 180 40, 290 90";
  return (
    <div className="relative py-8 text-center">
      <style>{`
        @keyframes trail-draw { to { stroke-dashoffset: 0; } }
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes move-plane { to { offset-distance: 100%; transform: rotate(12deg); } }
        @keyframes pop { 0%{transform:scale(.8);opacity:0} 60%{opacity:1} 100%{transform:scale(1);opacity:1} }
      `}</style>
      <div className="relative mx-auto max-w-xl">
        <svg viewBox="0 0 300 140" className="w-full h-28">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path
            d={path}
            stroke="url(#g)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: 460,
              strokeDashoffset: 460,
              animation: "trail-draw 1200ms ease-out forwards",
            }}
          />
        </svg>
        <span
          aria-hidden
          className="absolute left-0 top-0 h-3 w-3 rounded-full bg-primary/70 blur-[1px]"
          style={{
            animation: "move-plane 1400ms 80ms ease-in-out forwards",
            // @ts-expect-error CSS offset path
            offsetPath: `path('${path}')`,
            offsetDistance: "0%",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: "move-plane 1400ms 80ms ease-in-out forwards",
            // @ts-expect-error CSS offset path
            offsetPath: `path('${path}')`,
            offsetDistance: "0%",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 drop-shadow"
            fill="currentColor"
          >
            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </span>
        <div className="absolute inset-0 -z-10 mx-auto grid max-w-sm place-items-center">
          <div className="h-28 w-28 rounded-full bg-primary/10 animate-[pulse_1600ms_ease-in-out_infinite]" />
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold animate-[pop_300ms_ease-out]">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground animate-[pop_300ms_80ms_ease-out]">
        {subtitle}
      </p>
    </div>
  );
}
