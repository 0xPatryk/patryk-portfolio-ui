
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects, categories } from '@/data/projects';
import PortfolioItem from './PortfolioItem';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div ref={containerRef}>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.value
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
            >
              <PortfolioItem project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-20 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found in this category.
        </motion.div>
      )}
    </div>
  );
}
