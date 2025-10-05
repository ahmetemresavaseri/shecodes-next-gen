import { useEffect, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export const PixelTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [trailId, setTrailId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        id: trailId,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };

      setTrails((prev) => [...prev, newTrail].slice(-20));
      setTrailId((prev) => prev + 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [trailId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((trail) => ({
            ...trail,
            opacity: trail.opacity - 0.05,
          }))
          .filter((trail) => trail.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute w-3 h-3 bg-primary rounded-sm pixel-border"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
            opacity: trail.opacity,
            transform: `scale(${trail.opacity})`,
          }}
        />
      ))}
    </div>
  );
};
