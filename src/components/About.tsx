
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { Zap, Code2, Github, Server } from 'lucide-react';
import { skills } from '@/data/projects';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  return (
    <section ref={containerRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-sm uppercase tracking-wider text-brand-blue mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <AnimatedText
                  text="Software developer with passion for performance"
                  splitBy="word"
                  delay={0.4}
                />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a software developer specializing in high-performance applications, web3 technologies, and automation systems. With expertise in Rust, Python, and TypeScript, I build solutions that prioritize speed, reliability, and user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My background spans from developing blockchain applications to creating scraping tools and optimizing system performance for enterprise clients. I'm passionate about clean code, performance engineering, and creating solutions that solve real business challenges.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '3', label: 'Programming Languages' }
              ].map((stat, i) => (
                <div key={i} className="bg-background rounded-lg p-4 text-center shadow-sm border border-border/50">
                  <p className="text-2xl font-bold text-brand-blue mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg shadow-sm border border-border/50"
            >
              <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
              
              <div className="space-y-6">
                {skills.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.5 + (i * 0.05) }}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/5 border border-primary/10"
                        >
                          {getSkillIcon(skill)}
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(skill: string) {
  // Return appropriate icon based on skill name
  if (skill.includes('React') || skill.includes('JavaScript') || skill.includes('TypeScript')) {
    return <Code2 size={12} className="mr-1" />;
  } else if (skill.includes('Git') || skill.includes('GitHub')) {
    return <Github size={12} className="mr-1" />;
  } else if (skill.includes('API') || skill.includes('AWS') || skill.includes('Docker')) {
    return <Server size={12} className="mr-1" />;
  } else {
    return <Zap size={12} className="mr-1" />;
  }
}
