import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import InteractiveElement from './InteractiveElement';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-brand-blue/5 via-transparent to-transparent opacity-70"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15), transparent 60%)`,
        }}
      />
      
      {/* Floating elements */}
      <motion.div
        className="absolute hidden md:block w-24 h-24 text-brand-blue/10 top-1/3 left-10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code size="100%" />
      </motion.div>
      
      <motion.div
        className="absolute hidden md:block w-16 h-16 text-brand-purple/10 bottom-1/4 right-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Database size="100%" />
      </motion.div>
      
      <motion.div
        className="absolute hidden md:block w-20 h-20 text-brand-blue/10 top-1/4 right-1/4"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 10, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Cpu size="100%" />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <div className="overflow-hidden mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 translate-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                There's <span className="text-brand-blue">Nothing</span> I Can't Build for Your Business
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 translate-y-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <AnimatedText 
                text="Hi, I'm Patryk. I transform business challenges into elegant software solutions that deliver real value. If it makes business sense, I can build it for you."
                staggerDelay={0.01}
                delay={0.6}
                className="leading-relaxed"
              />
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 opacity-0 translate-y-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-auto"
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-medium shadow transition-all hover:bg-secondary/80 hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-auto"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/5 mb-8 md:mb-0 opacity-0 translate-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl bg-gradient-to-b from-brand-blue/10 to-brand-purple/10 p-1">
                <img 
                  src="/images/patyk.jpeg" 
                  alt="Patryk - Software Developer & Problem Solver" 
                  className="rounded-xl w-full aspect-square object-cover object-bottom"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-blue/10 w-full h-full rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Code className="text-brand-blue" />,
              title: "Web Development",
              description: "Modern, responsive interfaces built with React & TypeScript for exceptional user experiences."
            },
            {
              icon: <Database className="text-brand-purple" />,
              title: "Automation & Scraping",
              description: "Custom data extraction and process automation solutions for increased productivity."
            },
            {
              icon: <Cpu className="text-brand-blue" />,
              title: "Machine Learning",
              description: "Intelligent systems and predictive models using advanced algorithms and data science techniques."
            }
          ].map((service, i) => (
            <InteractiveElement 
              key={i}
              className="bg-card shadow-sm hover:shadow-md rounded-xl p-8 border border-border/40 flex flex-col items-center text-center opacity-0 translate-y-8 animate-slide-up transition-all duration-300"
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </InteractiveElement>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/60" />
        </div>
      </div>
    </div>
  );
}
