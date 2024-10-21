'use client';
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode; // Changed from any to React.ReactNode
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown; // If you still want to allow arbitrary props
}) => {
  const noise = createNoise3D();
  
  let w: number;
  let h: number;
  let nt: number = 0; // Initialize nt here
  let i: number;
  let x: number;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current; // Declare canvas here
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        
        window.onresize = function () {
          w = ctx.canvas.width = window.innerWidth;
          h = ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        };
        
        render(ctx); // Pass the context to render
      }
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number, ctx: CanvasRenderingContext2D) => { // Accept ctx as a parameter
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, (0.3 * i), nt) * 100; // Use const instead of var
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number | null = null; // Initialize animationId

  const render = (ctx: CanvasRenderingContext2D) => { // Accept ctx as a parameter
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5, ctx); // Pass the context to drawWave
    animationId = requestAnimationFrame(() => render(ctx)); // Pass context here as well
  };

  
   useEffect(() => {
     init();
     return () => {
       if (animationId) {
         cancelAnimationFrame(animationId); // Cancel only if animationId is set
       }
     };
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [animationId]); // Include animationId in the dependency array

   const [isSafari, setIsSafari] = useState(false);
   useEffect(() => {
     setIsSafari(
       typeof window !== "undefined" &&
         navigator.userAgent.includes("Safari") &&
         !navigator.userAgent.includes("Chrome")
     );
   }, []);

   return (
     <div
       className={cn(
         "h-screen flex flex-col items-center justify-center",
         containerClassName
       )}
     >
       <canvas
         className="absolute inset-0 z-0"
         ref={canvasRef}
         id="canvas"
         style={{
           ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
         }}
       ></canvas>
       <div className={cn("relative z-10", className)} {...props}>
         {children}
       </div>
     </div>
   );
};