
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  splitBy?: 'word' | 'letter';
  delay?: number;
  staggerDelay?: number;
  as?: React.ElementType;
}

export default function AnimatedText({
  text,
  className,
  once = true,
  splitBy = 'word',
  delay = 0,
  staggerDelay = 0.05,
  as: Component = 'span'
}: AnimatedTextProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const units = splitBy === 'word' ? text.split(' ') : text.split('');
  const separator = splitBy === 'word' ? ' ' : '';

  return (
    <div 
      ref={containerRef} 
      className={cn("inline-block overflow-hidden", className)}
      aria-label={text}
    >
      {units.map((unit, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
        >
          <span
            className={cn(
              "inline-block translate-y-[100%] opacity-0 transition-transform duration-500 ease-out",
              inView && "translate-y-0 opacity-100"
            )}
            style={{
              transitionDelay: `${delay + index * staggerDelay}s`
            }}
          >
            {unit}{index < units.length - 1 ? separator : ''}
          </span>
        </span>
      ))}
    </div>
  );
}
