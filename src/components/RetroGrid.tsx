import { useEffect, useRef } from "react";

export const RetroGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 50;
    let offsetY = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set perspective
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height * 0.6);
      
      // Draw horizontal lines (perspective grid)
      ctx.strokeStyle = "hsla(185, 100%, 60%, 0.15)";
      ctx.lineWidth = 2;
      
      for (let i = -10; i < 20; i++) {
        const y = i * gridSize + offsetY;
        const scale = 1 - (y / canvas.height) * 0.5;
        
        if (scale > 0) {
          ctx.beginPath();
          ctx.moveTo(-canvas.width * scale, y);
          ctx.lineTo(canvas.width * scale, y);
          ctx.stroke();
        }
      }
      
      // Draw vertical lines
      for (let i = -10; i <= 10; i++) {
        const x = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, -canvas.height);
        ctx.lineTo(x * 2, canvas.height);
        ctx.stroke();
      }
      
      ctx.restore();
      
      // Animate
      offsetY += 1;
      if (offsetY > gridSize) offsetY = 0;
      
      requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
};
