import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { careerHistory } from '@/data/career';
import { ArrowRight, Calendar, MapPin, Award, Briefcase, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    // Set first job as active on initial load
    if (careerHistory.length > 0 && !activeJobId) {
      setActiveJobId(careerHistory[0].id);
    }
  }, [activeJobId]);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>0xPatryk.dev | About Me - Software Developer & Problem Solver</title>
        <meta name="description" content="Learn about Patryk - a passionate software developer and problem solver with experience in building innovative solutions for businesses and startups." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent opacity-70 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Software developer, marathon runner, and problem solver
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={scrollToTimeline} 
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/70 transition-colors"
              aria-label="Scroll to career timeline"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </section>
        
        {/* Personal Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 relative">
                <div className="sticky top-24">
                  <motion.div 
                    className="rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl bg-gradient-to-b from-brand-blue/10 to-brand-purple/10 p-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img 
                      src="/images/running-marathon.jpg" 
                      alt="Patryk running at the Baden-Marathon Karlsruhe" 
                      className="rounded-xl w-full aspect-[3/4] object-cover object-[center_15%]"
                    />
                  </motion.div>
                  
                  <div className="mt-8 space-y-4">
                   
                    <div className="flex items-center gap-3">
                      <Calendar className="text-brand-blue" size={20} />
                      <span className="text-muted-foreground">5+ Years of Development Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-brand-blue" size={20} />
                      <span className="text-muted-foreground">Based in Germany</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-brand-blue" size={20} />
                      <span className="text-muted-foreground">Available for Remote Projects</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold mb-8 text-brand-blue">My Story</h2>
                
                <div className="space-y-8 text-lg">
                  <div className="bg-card/50 p-6 rounded-xl border border-border/30 shadow-sm">
                    <p className="leading-relaxed">
                      I'm Patryk, a software developer with a passion for solving complex business challenges through elegant code solutions. Just as I push my limits in marathon running, I bring the same discipline, perseverance, and strategic thinking to my development work.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-brand-blue">1</span>
                      Running Marathons, Building Software
                    </h3>
                    
                    <p className="mb-4 leading-relaxed pl-10">
                      Marathon running has taught me invaluable lessons that I apply to my work every day:
                    </p>
                    
                    <ul className="space-y-3 pl-10 mb-4">
                      <li className="flex items-start">
                        <span className="text-brand-blue mr-2 mt-1">•</span>
                        <span className="leading-relaxed"><strong>Discipline</strong> — Training consistently translates to how I approach coding: with regular effort, attention to detail, and clear goals.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-blue mr-2 mt-1">•</span>
                        <span className="leading-relaxed"><strong>Strategy</strong> — Just as a marathon requires pacing, software development demands thoughtful planning and execution.</span>
                      </li>
                    </ul>
                    
                    <p className="leading-relaxed pl-10">
                      When training for a marathon, I break down 42.195 kilometers into manageable segments. Similarly, with complex software projects, I excel at breaking them into logical components and creating systematic solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-brand-blue">2</span>
                      A Work Ethic Built on Endurance
                    </h3>
                    
                    <p className="leading-relaxed pl-10 mb-4">
                      Anyone who has completed a marathon understands the mental fortitude required to push through challenges. This same resilience serves me well when debugging complex issues, optimizing performance bottlenecks, or meeting tight deadlines.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-10 mb-4">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <h4 className="font-medium mb-2">Persistence</h4>
                        <p className="text-muted-foreground text-base">I don't give up when faced with challenging problems — I find a way through them.</p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <h4 className="font-medium mb-2">Adaptability</h4>
                        <p className="text-muted-foreground text-base">Like adjusting to changing race conditions, I readily adapt to shifting project requirements.</p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <h4 className="font-medium mb-2">Continuous Improvement</h4>
                        <p className="text-muted-foreground text-base">Always looking to beat my personal best, whether in running time or code efficiency.</p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <h4 className="font-medium mb-2">Long-term Thinking</h4>
                        <p className="text-muted-foreground text-base">I build solutions that can go the distance, not just quick fixes that break down later.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-brand-blue">3</span>
                      Building What Makes Business Sense
                    </h3>
                    
                    <div className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 p-6 rounded-xl border border-brand-blue/20 shadow-sm pl-10">
                      <p className="leading-relaxed mb-4">
                        My technical expertise spans front-end and back-end development, with a particular focus on creating solutions that deliver real business value. I don't just write code — I build products that solve problems, increase efficiency, and create opportunities for growth.
                      </p>
                      
                      <p className="leading-relaxed mb-6">
                        Whether you need a complex web application, a high-performance API, or a complete digital transformation of your business processes, I approach each project with the same methodical determination that gets me across the finish line in marathons.
                      </p>
                      
                      <div className="flex justify-start">
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          Let's Work Together
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Timeline Section */}
       
      </main>
      
      <Footer />
    </PageTransition>
  );
} 