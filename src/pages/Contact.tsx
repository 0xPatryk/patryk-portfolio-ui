import { Helmet } from 'react-helmet';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact | 0xPatryk.dev</title>
        <meta name="description" content="Get in touch with me for project inquiries, collaborations, or just to say hello." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind or want to discuss a collaboration? Here's how to reach me.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl shadow-sm p-8 border border-border/40 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Mail size={28} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Email</h2>
                <p className="text-muted-foreground mb-4">Feel free to email me anytime</p>
                <a 
                  href="mailto:patryk.stemporowski@gmail.com" 
                  className="text-lg font-medium text-primary hover:underline transition-all"
                >
                  patryk.stemporowski@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-xl shadow-sm p-8 border border-border/40 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Location</h2>
                <p className="text-muted-foreground mb-4">Based in</p>
                <p className="text-lg font-medium">Karlsruhe, Germany</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 bg-card rounded-xl shadow-sm p-8 border border-border/40"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Check out my social profiles to see my latest work and updates.
                </p>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/0xPatryk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Github size={24} />
                  </div>
                  <span className="mt-2 text-sm font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/patryk-stemporowski-05150722a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Linkedin size={24} />
                  </div>
                  <span className="mt-2 text-sm font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://x.com/stemper_dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Twitter size={24} />
                  </div>
                  <span className="mt-2 text-sm font-medium">X</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
