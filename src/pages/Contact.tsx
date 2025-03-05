
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Alex.dev</title>
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
                Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-card rounded-xl shadow-sm p-6 border border-border/40">
                  <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4">
                        <Mail size={18} className="text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Email</h3>
                        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                          hello@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4">
                        <MapPin size={18} className="text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Location</h3>
                        <p className="text-muted-foreground">San Francisco, California</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4">
                        <Phone size={18} className="text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-medium mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl shadow-sm p-6 border border-border/40">
                  <h2 className="text-xl font-bold mb-2">Working Hours</h2>
                  <p className="text-muted-foreground mb-4">
                    I'm available during these hours for calls and meetings.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Monday - Friday</span>
                      <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Saturday</span>
                      <span className="text-sm font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sunday</span>
                      <span className="text-sm font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="bg-card rounded-xl shadow-sm p-6 border border-border/40">
                  <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-1">
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-input"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="text-sm font-medium block mb-1">
                          Your Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-input"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium block mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-input"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-input resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Sending...</span>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
