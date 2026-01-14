import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';
import { CookieConsent } from '../ui';
import { pageTransition } from '../../utils/animations';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Page wrapper with animations
export const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.main>
  );
};

// Main Layout Component
const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Page Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#0f1c3f',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          className: 'font-body',
        }}
        richColors
      />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
