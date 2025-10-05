import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  speed?: number; // ms per char
  hold?: number; // ms to hold completed word
}

export default function Typewriter({ phrases, speed = 50, hold = 1400 }: TypewriterProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const directionRef = useRef<"typing" | "deleting">("typing");

  useEffect(() => {
    const cursor = setInterval(() => setCursorOn((c) => !c), 500);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    let timer: number;
    const phrase = phrases[phraseIndex % phrases.length];

    if (directionRef.current === "typing") {
      if (text.length < phrase.length) {
        timer = window.setTimeout(() => setText(phrase.slice(0, text.length + 1)), speed);
      } else {
        timer = window.setTimeout(() => {
          directionRef.current = "deleting";
        }, hold);
      }
    } else {
      if (text.length > 0) {
        timer = window.setTimeout(() => setText(phrase.slice(0, text.length - 1)), Math.max(20, speed / 2));
      } else {
        directionRef.current = "typing";
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phraseIndex, phrases, speed, hold]);

  // Hacker-ish scrambling when typing new char
  const scramble = (target: string, current: string) => {
    if (current.length >= target.length) return current;
    const chars = "01ABCDEFGHJKMNPQRSTUVWXYZ#$_+-/<>";
    const remains = target.slice(current.length);
    const random = Array.from(remains)
      .map((_, i) => (i < 2 ? target[current.length + i] ?? "" : chars[Math.floor(Math.random() * chars.length)]))
      .join("");
    return current + random;
  };

  const display = scramble(phrases[phraseIndex % phrases.length], text).slice(0, Math.max(text.length, 1));

  return (
    <span className="font-mono tracking-tight">
      <span className="text-primary">{display}</span>
      <span className="ml-1 inline-block w-2 translate-y-px bg-primary" style={{ height: "1em", opacity: cursorOn ? 1 : 0 }} />
    </span>
  );
}
