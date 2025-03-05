
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Cpu, Sparkles } from 'lucide-react';
import InteractiveElement from './InteractiveElement';

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const skills = [
    {
      icon: <Code size={24} className="text-brand-blue" />,
      title: "Web Development",
      description: "Creating responsive, accessible, and performant web applications using React, TypeScript, and modern frameworks.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Next.js"]
    },
    {
      icon: <Database size={24} className="text-brand-purple" />,
      title: "Data & Automation",
      description: "Building data extraction tools and automation systems to gather insights and streamline workflows.",
      technologies: ["Python", "BeautifulSoup", "Puppeteer", "Selenium"]
    },
    {
      icon: <Cpu size={24} className="text-green-500" />,
      title: "Performance Engineering",
      description: "Optimizing applications for speed and efficiency with low-level programming and system architecture.",
      technologies: ["Rust", "WebAssembly", "C++", "Performance Profiling"]
    },
    {
      icon: <Sparkles size={24} className="text-amber-500" />,
      title: "Web3 Development",
      description: "Developing blockchain applications, smart contracts, and decentralized systems for the future web.",
      technologies: ["Solidity", "Ethers.js", "Web3.js", "IPFS"]
    }
  ];
  
  return (
    <section ref={containerRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">
              Combining cutting-edge technologies to build robust, scalable, and efficient solutions
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <InteractiveElement className="h-full p-6 bg-card border border-border/40 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-primary/5">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
