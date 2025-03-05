
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import PortfolioItem from '@/components/PortfolioItem';
import { ArrowRight } from 'lucide-react';

export default function Index() {
  // Only show featured projects on the homepage
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <PageTransition>
      <Helmet>
        <title>Alex.dev | Software Developer</title>
        <meta name="description" content="Personal portfolio of a software developer specializing in performance engineering, web3, and automation." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <About />
        
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl">
                  A selection of my recent work across web3, automation, and performance engineering
                </p>
              </div>
              
              <Link 
                to="/portfolio"
                className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-all"
              >
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        
        <Skills />
        
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              Get in Touch
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
