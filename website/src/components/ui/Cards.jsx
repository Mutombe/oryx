import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useCustomHooks';
import { fadeInUp, staggerContainer, staggerItem, cardHoverLift } from '../../utils/animations';
import { GiBeveledStar } from "react-icons/gi";

// Card Component
export const Card = ({
  children,
  className = '',
  hover = true,
  glass = false,
  padding = 'md',
  ...props
}) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const baseStyles = glass
    ? 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl'
    : 'bg-white rounded-2xl shadow-xl';

  return (
    <motion.div
      variants={hover ? cardHoverLift : undefined}
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      className={`${baseStyles} ${paddingSizes[padding]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Section Component
export const Section = ({
  children,
  className = '',
  background = 'white',
  pattern = false,
  id,
  ...props
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-oryx-blue',
    navy: 'bg-navy-900',
    gradient: 'bg-gradient-to-br from-oryx-blue to-navy-950',
    orange: 'bg-gradient-to-br from-oryx-orange to-oryx-orange-dark'
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`
        section-padding relative overflow-hidden
        ${backgrounds[background]}
        ${pattern ? 'diagonal-lines' : ''}
        ${className}
      `}
      {...props}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {children}
      </motion.div>
    </section>
  );
};

// Section Header Component
export const SectionHeader = ({
  tag,
  title,
  titleHighlight,
  description,
  centered = true,
  light = false,
  className = ''
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`
        max-w-3xl ${centered ? 'mx-auto text-center' : ''}
        mb-12 md:mb-16 lg:mb-20
        ${className}
      `}
    >
      {tag && (
        <motion.span
          variants={staggerItem}
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6
            ${light 
              ? 'bg-white/10 text-white' 
              : 'bg-oryx-orange/10 text-oryx-orange'
            }
          `}
        >
          <span className={`w-2 h-2 rounded-full ${light ? 'bg-oryx-orange' : 'bg-oryx-orange'}`} />
          {tag}
        </motion.span>
      )}
      
      <motion.h2
        variants={staggerItem}
        className={`
          heading-lg mb-6
          ${light ? 'text-white' : 'text-oryx-blue'}
        `}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </motion.h2>
      
      {description && (
        <motion.p
          variants={staggerItem}
          className={`
            text-lg md:text-xl leading-relaxed
            ${light ? 'text-gray-300' : 'text-gray-600'}
          `}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

// Stats Counter Component
export const StatCard = ({ value, label, icon, light = false }) => {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  // Determine how to render the icon
  const renderIcon = () => {
    if (!icon) return null;
    
    // If icon is a JSX element (React element), render it directly
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: `w-7 h-7 ${light ? 'text-oryx-orange' : 'text-oryx-orange'}`
      });
    }
    
    // If icon is a component reference, instantiate it
    const Icon = icon;
    return <Icon className={`w-7 h-7 ${light ? 'text-oryx-orange' : 'text-oryx-orange'}`} />;
  };

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className={`
        text-center p-6 rounded-2xl
        ${light ? 'bg-white/5' : 'bg-gray-50'}
      `}
    >
      {icon && (
        <div className={`
          w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center
          ${light ? 'bg-oryx-orange/20' : 'bg-oryx-orange/10'}
        `}>
          {renderIcon()}
        </div>
      )}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`
          block text-4xl md:text-5xl font-heading mb-2
          ${light ? 'text-white' : 'text-oryx-blue'}
        `}
      >
        {value}
      </motion.span>
      <span className={`text-sm md:text-base ${light ? 'text-gray-400' : 'text-gray-600'}`}>
        {label}
      </span>
    </motion.div>
  );
};

// Feature Card Component
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index = 0,
  number,
  dark = false
}) => {
  const displayNumber = number || String(index + 1).padStart(2, '0');

  const renderIcon = () => {
    if (!icon) return null;
    
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: 'w-7 h-7 text-white'
      });
    }
    
    const Icon = icon;
    return <Icon className="w-7 h-7 text-white" />;
  };

  if (dark) {
    return (
      <motion.div
        variants={staggerItem}
        className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-oryx-orange/30 hover:bg-white/10 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-oryx-orange/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
        
        <span className="absolute top-4 right-4 text-6xl font-heading text-white/5 group-hover:text-oryx-orange/10 transition-colors duration-500">
          {displayNumber}
        </span>
        
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-oryx-orange to-oryx-orange-light rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-oryx-orange/20 group-hover:scale-110 transition-transform duration-300">
            {renderIcon()}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-oryx-orange transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-oryx-orange/20"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-oryx-orange/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
      
      <span className="absolute top-4 right-4 text-6xl font-heading text-gray-100 group-hover:text-oryx-orange/10 transition-colors duration-500">
        {displayNumber}
      </span>
      
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-oryx-orange to-oryx-orange-light rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-oryx-orange/20 group-hover:scale-110 transition-transform duration-300">
          {renderIcon()}
        </div>
        
        <h3 className="text-xl font-bold text-oryx-blue mb-3 group-hover:text-oryx-orange transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// ============================================
// 8 UNIQUE COLOR BLEND THEMES FOR PRODUCT CARDS
// ============================================
const cardThemes = [
  {
    // 1. Teal Ocean - Fresh, professional
    overlay: 'from-teal-900/95 via-teal-800/80 to-teal-700/40',
    badge: 'bg-teal-500',
    featureBg: 'bg-teal-500/20',
    featureText: 'text-teal-100',
    buttonBg: 'bg-teal-500 hover:bg-teal-400',
  },
  {
    // 2. Warm Amber - Earthy, warm
    overlay: 'from-amber-900/95 via-amber-800/80 to-amber-600/40',
    badge: 'bg-amber-500',
    featureBg: 'bg-amber-500/20',
    featureText: 'text-amber-100',
    buttonBg: 'bg-amber-500 hover:bg-amber-400',
  },
  {
    // 3. Slate Steel - Industrial, modern
    overlay: 'from-slate-900/95 via-slate-800/80 to-slate-600/40',
    badge: 'bg-slate-500',
    featureBg: 'bg-slate-500/20',
    featureText: 'text-slate-200',
    buttonBg: 'bg-slate-500 hover:bg-slate-400',
  },
  {
    // 4. Forest Emerald - Natural, trustworthy
    overlay: 'from-emerald-900/95 via-emerald-800/80 to-emerald-600/40',
    badge: 'bg-emerald-500',
    featureBg: 'bg-emerald-500/20',
    featureText: 'text-emerald-100',
    buttonBg: 'bg-emerald-500 hover:bg-emerald-400',
  },
  {
    // 5. Sunset Rose - Bold, premium
    overlay: 'from-rose-900/95 via-rose-800/80 to-rose-600/40',
    badge: 'bg-rose-500',
    featureBg: 'bg-rose-500/20',
    featureText: 'text-rose-100',
    buttonBg: 'bg-rose-500 hover:bg-rose-400',
  },
  {
    // 6. Deep Indigo - Tech, sophisticated
    overlay: 'from-indigo-900/95 via-indigo-800/80 to-indigo-600/40',
    badge: 'bg-indigo-500',
    featureBg: 'bg-indigo-500/20',
    featureText: 'text-indigo-100',
    buttonBg: 'bg-indigo-500 hover:bg-indigo-400',
  },
  {
    // 7. Copper Bronze - Rich, industrial
    overlay: 'from-orange-900/95 via-orange-800/80 to-orange-600/40',
    badge: 'bg-orange-500',
    featureBg: 'bg-orange-500/20',
    featureText: 'text-orange-100',
    buttonBg: 'bg-orange-500 hover:bg-orange-400',
  },
  {
    // 8. Royal Violet - Unique, creative
    overlay: 'from-violet-900/95 via-violet-800/80 to-violet-600/40',
    badge: 'bg-violet-500',
    featureBg: 'bg-violet-500/20',
    featureText: 'text-violet-100',
    buttonBg: 'bg-violet-500 hover:bg-violet-400',
  },
];

// Product Card Component with unique color overlays
export const ProductCard = ({ product, onQuote, index = 0 }) => {
  const theme = cardThemes[index % cardThemes.length];

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[420px] sm:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Product Image */}
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 -z-10 flex items-center justify-center">
          <span className="text-8xl font-heading text-white/5">{product.name[0]}</span>
        </div>
      </div>

      {/* Color Overlay Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${theme.overlay} transition-opacity duration-300`} />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        {/* Top Section - Badges */}
        <div className="flex justify-between items-start">
          {/* Popular Badge */}
          {product.popular ? (
            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <GiBeveledStar className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-semibold text-gray-800">Popular</span>
            </div>
          ) : (
            <div />
          )}

          {/* Category Badge */}
          <span className={`${theme.badge} text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg`}>
            {product.category}
          </span>
        </div>

        {/* Bottom Section - Product Info */}
        <div>
          {/* Price Display */}
          <div className="mb-3">
            <span className="text-white/60 text-xs uppercase tracking-wider">Starting From</span>
            <p className="text-white text-2xl sm:text-3xl font-bold">{product.priceFrom}</p>
          </div>

          {/* Product Name */}
          <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{product.name}</h3>

          {/* Description */}
          <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className={`${theme.featureBg} ${theme.featureText} backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs flex items-center gap-1`}
              >
                <Check className="w-3 h-3" />
                {feature}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuote?.(product);
            }}
            className={`w-full ${theme.buttonBg} text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg`}
          >
            Get Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Accent Border on Hover */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${theme.badge} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </motion.div>
  );
};

export default { Card, Section, SectionHeader, StatCard, FeatureCard, ProductCard };