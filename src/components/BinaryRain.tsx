import { useEffect, useState } from "react";

interface BinaryColumn {
  id: number;
  x: number;
  delay: number;
}

export const BinaryRain = () => {
  const [columns, setColumns] = useState<BinaryColumn[]>([]);

  useEffect(() => {
    const cols = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i * 100) / 30,
      delay: Math.random() * 5,
    }));

    setColumns(cols);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 font-mono text-xs text-primary"
          style={{
            left: `${col.x}%`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="animate-slide-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "3s",
                animationIterationCount: "infinite",
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
