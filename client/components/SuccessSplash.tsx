type Props = { title?: string; subtitle?: string };

export default function SuccessSplash({ title = "Thanks!", subtitle = "Your message has been sent." }: Props) {
  const confetti = Array.from({ length: 14 }).map((_, i) => ({
    i,
    rot: (i * 360) / 14,
    color: ["#22c55e", "#06b6d4", "#f59e0b", "#ef4444", "#a855f7"][i % 5],
  }));

  return (
    <div className="relative grid place-items-center py-10 text-center">
      <style>{`
        @keyframes splash-dash { to { stroke-dashoffset: 0; } }
        @keyframes confetti-pop {
          0% { transform: translate(-50%, -50%) rotate(var(--rot)) translateY(0) scale(0.9); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(var(--rot)) translateY(-80px) scale(1); opacity: 0; }
        }
      `}</style>
      <div className="relative grid place-items-center">
        <div className="absolute inset-0 grid place-items-center">
          {confetti.map((c) => {
            const style = {
              position: "absolute" as const,
              left: "50%",
              top: "50%",
              width: 8,
              height: 8,
              background: c.color,
              borderRadius: 2,
              transform: "translate(-50%, -50%)",
              animation: `confetti-pop 900ms ${150 + (c.i % 7) * 40}ms ease-out both`,
            } as React.CSSProperties & { [key: string]: string | number };
            style["--rot"] = `${c.rot}deg`;
            return <span key={c.i} style={style} />;
          })}
        </div>
        <div className="relative h-24 w-24 grid place-items-center rounded-full border border-green-500/40 bg-green-500/10">
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12.5l5 5L20 7"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="40"
              strokeDashoffset={40}
              style={{ animation: "splash-dash 700ms ease-out forwards" }}
            />
          </svg>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
