import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { heroTitle, heroSubtitle, staggerContainer, staggerItem } from '../../utils/animations';

const PageHero = ({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage,
  overlay = 'gradient', // 'gradient', 'dark', 'light', 'pattern'
  height = 'default', // 'small', 'default', 'large'
  children
}) => {
  const heights = {
    small: 'min-h-[40vh] py-32',
    default: 'min-h-[50vh] py-40',
    large: 'min-h-[60vh] py-48'
  };

  const overlays = {
    gradient: 'bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-oryx-blue/85',
    dark: 'bg-navy-950/90',
    light: 'bg-navy-950/70',
    pattern: 'bg-navy-950/80'
  };

  return (
    <section className={`relative ${heights[height]} flex items-center overflow-hidden`}>
      {/* Background Image or Default Gradient */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img 
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-950 via-navy-900 to-oryx-blue" />
        )}
        <div className={`absolute inset-0 ${overlays[overlay]}`} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-oryx-orange blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-white blur-3xl"
        />
        
        {/* Diagonal Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,120 L1200,0 L1200,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              variants={staggerItem}
              className="flex items-center gap-2 mb-6 text-sm"
            >
              <Link 
                to="/" 
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                  {crumb.path ? (
                    <Link 
                      to={crumb.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-oryx-orange">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {/* Title */}
          <motion.h1
            variants={heroTitle}
            className="heading-xl text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={heroSubtitle}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional Children (CTA buttons, etc.) */}
          {children && (
            <motion.div
              variants={staggerItem}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Wave/Angle */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 0C1440 0 1140 40 720 40C300 40 0 0 0 0L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
