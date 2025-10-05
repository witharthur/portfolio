import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("splashSeen");
    if (!seen) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("splashSeen", "1");
      }, 2300);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-background">
      <div className="text-center px-6">
        <p className="text-sm text-muted-foreground">Welcome</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          <Typewriter phrases={["Arthur — Software Engineer"]} speed={40} hold={800} />
        </h1>
        <div className="relative mx-auto mt-6 h-20 w-56 overflow-hidden rounded-lg border">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,theme(colors.accent.DEFAULT)/35%,transparent)] animate-[loaderScroll_1.2s_linear_infinite]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,theme(colors.border),transparent_60%)] bg-[length:100%_14px] opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
        <p className="mt-3 text-muted-foreground">Loading portfolio…</p>
      </div>
      <style>{`@keyframes loaderScroll{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`}</style>
    </div>
  );
}
