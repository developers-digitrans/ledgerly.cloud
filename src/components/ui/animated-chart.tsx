import React from "react";
import { motion } from "framer-motion";

export const AnimatedChart = () => {
  // Generate random candlestick data
  const candlesticks = Array(10)
    .fill(null)
    .map((_, i) => ({
      x: i * 80 + 50,
      open: Math.random() * 100 + 100,
      close: Math.random() * 100 + 100,
      high: Math.random() * 50 + 150,
      low: Math.random() * 50 + 50,
    }));

  // Generate random numbers for floating effect
  const numbers = Array(15)
    .fill(null)
    .map((_, i) => ({
      id: i,
      value: (Math.random() * 1000).toFixed(2),
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
    }));

  // Generate random wave points
  const wavePoints = Array(5)
    .fill(null)
    .map((_, i) => ({
      id: i,
      x: i * 200,
      y: Math.random() * 100 + 100,
    }));

  return (
    <div className="absolute inset-0 z-0 opacity-20">
      {/* Floating Numbers */}
      {numbers.map((num) => (
        <motion.div
          key={num.id}
          className="absolute text-white font-mono text-sm"
          style={{ left: `${num.x}%`, top: `${num.y}%` }}
          animate={{
            y: ["-50%", "50%"],
            x: ["-20px", "20px"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: num.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ${num.value}
        </motion.div>
      ))}

      {/* Charts SVG */}
      <motion.svg viewBox="0 0 1000 300" className="w-full h-full">
        {/* Animated Wave Lines */}
        <motion.path
          d={`M0,150 ${wavePoints
            .map((p) => `L${p.x},${p.y}`)
            .join(" ")} L1000,150`}
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Secondary Wave */}
        <motion.path
          d="M0,200 C250,150 500,250 750,200 L1000,200"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        {/* Candlesticks */}
        {candlesticks.map((candle, i) => (
          <g key={i}>
            {/* Wick */}
            <motion.line
              x1={candle.x}
              y1={candle.low}
              x2={candle.x}
              y2={candle.high}
              stroke="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            />
            {/* Body */}
            <motion.rect
              x={candle.x - 10}
              y={Math.min(candle.open, candle.close)}
              width="20"
              height={Math.abs(candle.close - candle.open)}
              fill={candle.close > candle.open ? "#4CAF50" : "#FF5252"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          </g>
        ))}

        {/* Moving Dots */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="white"
            initial={{ cx: 0, cy: 150 }}
            animate={{
              cx: [0, 1000],
              cy: [150, 150 + Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Vertical Grid Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={i}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="300"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </motion.svg>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="border-[0.5px] border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};
