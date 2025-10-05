import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {text}
      {glitching && (
        <>
          <span
            className="absolute top-0 left-0 text-primary opacity-70"
            style={{
              transform: "translate(-2px, -2px)",
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-accent opacity-70"
            style={{
              transform: "translate(2px, 2px)",
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};
