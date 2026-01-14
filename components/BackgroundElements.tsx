
import React, { useMemo } from 'react';

interface BackgroundProps {
  mousePosition: { x: number; y: number };
}

const BackgroundElements: React.FC<BackgroundProps> = ({ mousePosition }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5
    }));
  }, []);

  const abstractShapes = useMemo(() => {
    return [
      { color: 'bg-blue-300', size: 'w-[700px] h-[700px]', initialPos: { x: -10, y: -10 }, speed: 0.04 },
      { color: 'bg-pink-300', size: 'w-[600px] h-[600px]', initialPos: { x: 80, y: 30 }, speed: -0.05 },
      { color: 'bg-yellow-200', size: 'w-[500px] h-[500px]', initialPos: { x: 40, y: 70 }, speed: 0.03 },
    ];
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Gradient - More happening base colors */}
      <div className="absolute inset-0 animate-gradient opacity-95"></div>

      {/* Grid Shimmer - More visible */}
      <div className="absolute inset-0 grid-lines grid-shimmer opacity-80"></div>

      {/* Parallax Abstract Shapes - Slightly higher opacity and larger */}
      {abstractShapes.map((shape, i) => (
        <div 
          key={i}
          className={`absolute rounded-full blur-[140px] opacity-25 ${shape.color} ${shape.size} transition-transform duration-[5000ms] ease-out`}
          style={{
            left: `${shape.initialPos.x}%`,
            top: `${shape.initialPos.y}%`,
            transform: `translate(${mousePosition.x * shape.speed}px, ${mousePosition.y * shape.speed}px)`
          }}
        ></div>
      ))}

      {/* Floating Particles - Slightly more present */}
      {particles.map((p, i) => (
        <div 
          key={i}
          className="absolute bg-black/10 rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `drift ${p.duration}s infinite linear`,
            animationDelay: `${p.delay}s`
          }}
        ></div>
      ))}

      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translate(150px, -150px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundElements;
