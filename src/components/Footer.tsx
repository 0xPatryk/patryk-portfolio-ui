
import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-medium mb-4">0xPatryk.dev</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Crafting performant software solutions from web3 applications to high-speed automation systems.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Mail size={14} className="mr-1" />
              <a 
                href="mailto:patryk.stemporowski@gmail.com" 
                className="hover:text-foreground transition-colors"
              >
                patryk.stemporowski@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-sm font-medium uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-sm font-medium uppercase mb-4">Let's Connect</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-foreground transition-colors"
            >
              Get in touch
              <ArrowUp size={14} className="ml-1 transform rotate-45" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/20 text-sm text-muted-foreground flex flex-wrap justify-between items-center gap-4">
          <div className="flex space-x-4">
            <p>© {new Date().getFullYear()} 0xPatryk.dev. All rights reserved.</p>
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 group inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 text-foreground hover:bg-primary/10 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
