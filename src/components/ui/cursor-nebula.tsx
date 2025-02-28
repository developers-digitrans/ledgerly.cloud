import React, { useEffect, useRef } from "react";

interface CursorNebulaProps {
  color?: string;
}

export function CursorNebula({ color = "#FFD700" }: CursorNebulaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
    }> = [];

    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create particles on mouse movement
    const createParticles = () => {
      // Only create particles if mouse has moved
      if (
        Math.abs(mouseX - lastMouseX) > 3 ||
        Math.abs(mouseY - lastMouseY) > 3
      ) {
        // Create 2-5 particles at mouse position
        const count = Math.floor(Math.random() * 3) + 2;

        for (let i = 0; i < count; i++) {
          particles.push({
            x: mouseX,
            y: mouseY,
            size: Math.random() * 15 + 5,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 0,
            maxLife: Math.random() * 100 + 50,
          });
        }

        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update particle position
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        // Calculate opacity based on life
        const opacity = 1 - p.life / p.maxLife;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.fill();

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    // Animation loop
    const animate = () => {
      createParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
