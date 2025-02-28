import React, { useEffect, useRef } from "react";

export function StockMarketAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stock market lines
    class StockLine {
      x: number;
      y: number;
      length: number;
      points: { x: number; y: number }[];
      color: string;
      speed: number;
      amplitude: number;
      frequency: number;
      phase: number;

      constructor(x: number, y: number, length: number) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.points = [];
        this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, 255, ${Math.random() * 0.5 + 0.2})`;
        this.speed = Math.random() * 0.5 + 0.1;
        this.amplitude = Math.random() * 20 + 5;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;

        // Initialize points
        for (let i = 0; i < length; i++) {
          this.points.push({
            x: this.x + i,
            y:
              this.y +
              Math.sin(i * this.frequency + this.phase) * this.amplitude,
          });
        }
      }

      update() {
        this.phase += this.speed * 0.01;

        // Update all points
        for (let i = 0; i < this.length; i++) {
          this.points[i].y =
            this.y + Math.sin(i * this.frequency + this.phase) * this.amplitude;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (let i = 1; i < this.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // Create multiple stock lines
    const stockLines: StockLine[] = [];
    const lineCount = 15;
    const lineSpacing = canvas.height / (lineCount + 1);

    for (let i = 0; i < lineCount; i++) {
      stockLines.push(new StockLine(0, (i + 1) * lineSpacing, canvas.width));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all lines
      stockLines.forEach((line) => {
        line.update();
        line.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 opacity-30"
      style={{ pointerEvents: "none" }}
    />
  );
}
