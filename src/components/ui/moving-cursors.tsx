import React from "react";
import { motion } from "framer-motion";

interface Cursor {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export const MovingCursors = () => {
  const cursors: Cursor[] = Array(3)
    .fill(null)
    .map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 2,
    }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cursors.map((cursor) => (
        <motion.div
          key={cursor.id}
          className="absolute w-6 h-6 opacity-50"
          style={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z' fill='white' stroke='white'/%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 20,
            delay: cursor.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
