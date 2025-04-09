import { Clock, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveElement from './InteractiveElement';

export default function WhatSetsMeApart() {
  const differentiators = [
    {
      icon: <Clock className="text-brand-blue" />,
      title: "Commitment to Deadlines",
      description: "When deadlines are tight, I commit to delivering on time—putting in the necessary hours to ensure project success."
    },
    {
      icon: <CheckCircle className="text-brand-purple" />,
      title: "Complete Execution",
      description: "I don't deliver half-solutions. Every project is completed to the highest standard with all requirements fulfilled."
    },
    {
      icon: <Zap className="text-brand-blue" />,
      title: "Speed & Quality",
      description: "Exceptional quality delivered efficiently—I believe both are possible without compromising either."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Sets Me Apart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My approach to development is driven by these core principles that ensure your project succeeds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, i) => (
            <InteractiveElement
              key={i}
              className="bg-card shadow-md hover:shadow-lg rounded-xl p-8 border border-border/40 flex flex-col items-center text-center transition-all duration-300 opacity-0 translate-y-8 animate-slide-up"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-5"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </InteractiveElement>
          ))}
        </div>
      </div>
    </section>
  );
} 