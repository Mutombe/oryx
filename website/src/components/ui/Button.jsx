import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gradient-to-r from-oryx-orange to-oryx-orange-light text-white shadow-lg hover:shadow-glow-orange',
  secondary: 'border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
  outline: 'border-2 border-oryx-orange text-oryx-orange hover:bg-oryx-orange hover:text-white',
  ghost: 'text-oryx-blue hover:bg-oryx-blue/5',
  dark: 'bg-oryx-blue text-white hover:bg-oryx-blue-light',
  white: 'bg-white text-oryx-blue hover:bg-gray-100'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  // Support both naming conventions - extract these so they don't spread to DOM
  leftIcon,
  rightIcon,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Build content - support both old API (icon + iconPosition) and new API (leftIcon/rightIcon)
  const content = (
    <>
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {/* Support old API: icon prop with iconPosition */}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {/* Support new API: leftIcon as JSX element */}
      {!loading && leftIcon && leftIcon}
      {children}
      {/* Support new API: rightIcon as JSX element */}
      {!loading && rightIcon && rightIcon}
      {/* Support old API: icon prop with iconPosition */}
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  // External link
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  // Internal link
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        <Link to={to} className={buttonStyles} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Button
  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonStyles}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;