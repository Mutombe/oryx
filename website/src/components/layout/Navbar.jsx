import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  Facebook, Instagram, Linkedin
} from 'lucide-react';
import { useScrollPosition, useScrollLock } from '../../hooks/useCustomHooks';
import { navLinks, companyInfo } from '../../data/siteData';
import Button from '../ui/Button';
import { TiThMenuOutline } from "react-icons/ti";
import { GiBeveledStar } from "react-icons/gi";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollPosition > 50;

  useScrollLock(mobileMenuOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-navy-950 text-white py-2
          transition-all duration-300
          ${isScrolled ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100'}
        `}
      >
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-6">
              <a 
                href={`tel:${companyInfo.contact.phones[0]}`}
                className="flex items-center gap-2 hover:text-oryx-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{companyInfo.contact.phones[0]}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-oryx-orange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{companyInfo.contact.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="hidden md:inline">{companyInfo.location.address}, {companyInfo.location.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <a href={companyInfo.social.facebook} className="hover:text-oryx-orange transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={companyInfo.social.instagram} className="hover:text-oryx-orange transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={companyInfo.social.linkedin} className="hover:text-oryx-orange transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed left-0 right-0 z-40
          transition-all duration-500
          ${isScrolled 
            ? 'top-0 bg-oryx-blue/95 backdrop-blur-xl shadow-lg' 
            : 'top-10 bg-transparent'
          }
        `}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex items-center gap-3">
              <div className="w-20 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/logo1.png" 
                  alt="Oryx Logo" 
                  className="h-12 w-16"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    nav-link text-sm uppercase tracking-wider
                    ${location.pathname === link.path ? 'text-white after:w-full' : ''}
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button to="/contact" variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <TiThMenuOutline className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-950">
              <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
                {/* Nav Links */}
                <div className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`
                          block py-4 text-2xl font-heading tracking-wider
                          border-b border-white/10
                          ${location.pathname === link.path 
                            ? 'text-oryx-orange' 
                            : 'text-white hover:text-oryx-orange'
                          }
                          transition-colors duration-300
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 pt-8 border-t border-white/10"
                >
                  <a 
                    href={`tel:${companyInfo.contact.phones[0]}`}
                    className="flex items-center gap-3 text-white hover:text-oryx-orange transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {companyInfo.contact.phones[0]}
                  </a>
                  <a 
                    href={`mailto:${companyInfo.contact.email}`}
                    className="flex items-center gap-3 text-white hover:text-oryx-orange transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {companyInfo.contact.email}
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    {companyInfo.location.address}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6"
                >
                  <Button to="/contact" variant="primary" className="w-full">
                    Get a Quote
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
