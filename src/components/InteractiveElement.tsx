
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveElementProps {
  className?: string;
  intensity?: number;
  perspective?: number;
  children: React.ReactNode;
}

export default function InteractiveElement({
  children,
  className,
  intensity = 10,
  perspective = 1000
}: InteractiveElementProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current || !isHovered) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateXValue = ((y - centerY) / centerY) * intensity;
      const rotateYValue = ((centerX - x) / centerX) * intensity;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };
    
    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, intensity]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const rotateStyle = isHovered ? {
    transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    transition: 'transform 0.2s ease'
  } : {
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    transition: 'transform 0.5s ease'
  };

  return (
    <div
      ref={elementRef}
      className={cn("relative overflow-hidden", className)}
      style={rotateStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none opacity-70 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-lg" />
      )}
    </div>
  );
}
