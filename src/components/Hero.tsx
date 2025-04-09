import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveElement from './InteractiveElement';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-background to-secondary/10 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="max-w-3xl">
            <div className="overflow-hidden mb-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                There's <span className="text-brand-blue">Nothing</span> I Can't Build for Your Business
              </motion.h1>
            </div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I'm Patryk. I transform business challenges into elegant software solutions that deliver real value.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              If it makes business sense, I can build it for you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
            </motion.div>
          </div>

          <motion.div
            className="w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
            </motion.div>
          </motion.div>
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
            <motion.div
              key={i}
              className="bg-card shadow-sm hover:shadow-lg rounded-xl p-8 border border-border/40 flex flex-col items-center text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
