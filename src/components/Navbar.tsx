
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GitHub, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl font-semibold relative z-10 group"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">Alex</span>
          <span className="text-brand-blue inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-opacity-80">.dev</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <SocialLinks />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 focus:outline-none z-10"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center p-4 md:hidden z-0 animate-fade-in">
            <nav className="flex flex-col items-center space-y-8 mb-12">
              <NavLinks vertical />
            </nav>
            <div className="flex space-x-6">
              <SocialLinks />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLinks({ vertical = false }: { vertical?: boolean }) {
  const location = useLocation();
  const pathName = location.pathname;
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ];
  
  return (
    <>
      {links.map(link => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "relative py-2 text-sm font-medium transition-all duration-300 hover:text-foreground/80",
            pathName === link.href ? "text-foreground" : "text-foreground/70",
            vertical && "text-lg"
          )}
        >
          {link.label}
          {pathName === link.href && (
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-brand-blue rounded-full" />
          )}
        </Link>
      ))}
    </>
  );
}

function SocialLinks() {
  const links = [
    { href: 'https://github.com', Icon: GitHub, label: 'GitHub' },
    { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com', Icon: Twitter, label: 'Twitter' }
  ];
  
  return (
    <>
      {links.map(({ href, Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors duration-300"
          aria-label={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </>
  );
}
