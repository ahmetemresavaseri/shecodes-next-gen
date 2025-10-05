import { useEffect, useState } from "react";

const codeSnippets = [
  "const empowerWomen = () => {}",
  "function buildTheFuture() {}",
  "let diversity = true;",
  "export default HerCode;",
  "import { Innovation } from 'tech';",
  "class WomenInTech {}",
  "while(coding) { inspire(); }",
  "if (female) { lead(); }",
  "const team = [...women];",
  "async function changeTheWorld() {}",
];

interface CodeSnippet {
  id: number;
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

export const FloatingCode = () => {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);

  useEffect(() => {
    const initialSnippets = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 20 + 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    setSnippets(initialSnippets);

    const interval = setInterval(() => {
      setSnippets((prev) =>
        prev.map((snippet) => ({
          ...snippet,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute font-mono text-xs md:text-sm text-primary whitespace-nowrap"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            opacity: snippet.opacity,
            animation: `float ${snippet.speed}s ease-in-out infinite`,
          }}
        >
          {snippet.text}
        </div>
      ))}
    </div>
  );
};
