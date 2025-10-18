import { useState, useEffect, useRef } from 'react';

export default function HeroAnimationOverlay() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range based on viewport
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
    };

    // Add event listener to document for better compatibility
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Helper function to create parallax transform
  const getParallaxStyle = (intensity: number) => {
    return {
      transform: `translate(${mousePosition.x * intensity}px, ${mousePosition.y * intensity}px)`,
      transition: 'transform 0.2s ease-out',
      willChange: 'transform',
    };
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Floating Circles */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/40 rounded-full blur-2xl animate-float-slow"
        style={getParallaxStyle(80)}
      ></div>
      <div 
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-teal-400/40 rounded-full blur-2xl animate-float-medium"
        style={getParallaxStyle(-70)}
      ></div>
      <div 
        className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-400/35 rounded-full blur-2xl animate-float-fast"
        style={getParallaxStyle(60)}
      ></div>
      <div 
        className="absolute top-10 left-10 w-48 h-48 bg-purple-400/35 rounded-full blur-xl animate-float-medium"
        style={getParallaxStyle(90)}
      ></div>
      <div 
        className="absolute bottom-10 right-10 w-52 h-52 bg-pink-400/35 rounded-full blur-xl animate-float-slow"
        style={getParallaxStyle(-85)}
      ></div>
      
      {/* Vibrant Gradient Orbs */}
      <div 
        className="absolute top-20 right-1/3 w-40 h-40 bg-gradient-to-br from-pink-400/50 to-purple-400/50 rounded-full blur-xl animate-pulse-slow"
        style={getParallaxStyle(100)}
      ></div>
      <div 
        className="absolute bottom-32 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-400/50 to-pink-400/50 rounded-full blur-xl animate-pulse-medium"
        style={getParallaxStyle(-95)}
      ></div>
      <div 
        className="absolute top-1/3 left-1/2 w-44 h-44 bg-gradient-to-br from-cyan-400/45 to-blue-400/45 rounded-full blur-xl animate-pulse-slow"
        style={getParallaxStyle(75)}
      ></div>
      <div 
        className="absolute bottom-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-teal-400/45 to-cyan-400/45 rounded-full blur-lg animate-pulse-medium"
        style={getParallaxStyle(-65)}
      ></div>
      
      {/* Geometric Shapes */}
      <div 
        className="absolute top-1/3 right-1/2 w-24 h-24 border-4 border-cyan-400/60 rotate-45 animate-spin-slow"
        style={getParallaxStyle(110)}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/4 w-28 h-28 border-4 border-teal-400/60 rounded-lg animate-spin-reverse"
        style={getParallaxStyle(-105)}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-20 h-20 border-4 border-purple-400/50 rounded-full animate-spin-slow"
        style={getParallaxStyle(95)}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/3 w-32 h-32 border-4 border-pink-400/50 rotate-12 animate-spin-reverse"
        style={getParallaxStyle(-90)}
      ></div>
      
      {/* Additional Accent Elements */}
      <div 
        className="absolute top-16 left-1/2 w-16 h-16 bg-yellow-400/40 rounded-full blur-lg animate-pulse-slow"
        style={getParallaxStyle(120)}
      ></div>
      <div 
        className="absolute bottom-24 left-1/3 w-20 h-20 bg-orange-400/40 rounded-full blur-lg animate-pulse-medium"
        style={getParallaxStyle(-80)}
      ></div>
    </div>
  );
}
