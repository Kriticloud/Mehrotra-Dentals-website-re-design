import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-max flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-display text-brand-primary">
            Mehrotra <span className="font-bold text-brand-secondary">Dentals</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-primary/70 hover:text-brand-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            className="btn-primary flex items-center gap-2 group"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-2xl font-display text-brand-primary">
                Mehrotra <span className="font-bold text-brand-secondary">Dentals</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-brand-primary" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-brand-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919935959333"
                className="flex items-center gap-3 text-xl font-medium text-brand-secondary mt-4"
              >
                <Phone className="w-6 h-6" />
                +91 9935959333
              </a>
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-center mt-8"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
