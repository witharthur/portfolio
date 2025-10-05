interface PhotoFrameProps {
  src: string;
  alt?: string;
}

export default function PhotoFrame({
  src,
  alt = "Portrait photo",
}: PhotoFrameProps) {
  return (
    <div className="relative mx-auto max-w-xs sm:max-w-sm">
      <div
        className="absolute -inset-2 -z-10 rounded-full bg-[radial-gradient(closest-side,theme(colors.accent.DEFAULT)/18%,transparent)]"
        aria-hidden
      />
      <div className="relative rounded-full border-2 border-accent/50 bg-background p-1 shadow-md">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-square object-cover rounded-full"
        />
      </div>
    </div>
  );
}
