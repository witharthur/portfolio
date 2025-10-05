import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}

export default function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const Ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = Ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp: any = as;
  return (
    <Comp
      ref={Ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "will-change-transform opacity-0 translate-y-6",
        visible && "opacity-100 translate-y-0 transition duration-700 ease-out",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
