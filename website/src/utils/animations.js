// Fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Scale animations
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const scaleInBounce = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.68, -0.55, 0.265, 1.55]
    }
  }
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Stagger item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Slide animations
export const slideInFromLeft = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    x: '-100%', 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
};

export const slideInFromRight = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    x: '100%', 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
};

export const slideInFromTop = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    y: '-100%', 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
};

export const slideInFromBottom = {
  hidden: { y: '100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    y: '100%', 
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
};

// Page transitions
export const pageTransition = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

// Hero text animations
export const heroTitle = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.5
    }
  }
};

export const heroCTA = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.7
    }
  }
};

// Card hover effects
export const cardHover = {
  rest: { 
    scale: 1,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  },
  hover: { 
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export const cardHoverLift = {
  rest: { 
    y: 0,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  },
  hover: { 
    y: -10,
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Button animations
export const buttonTap = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 }
};

export const buttonPulse = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
};

// Image reveal
export const imageReveal = {
  hidden: { 
    clipPath: 'inset(0 100% 0 0)'
  },
  visible: { 
    clipPath: 'inset(0 0% 0 0)',
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const imageRevealFromBottom = {
  hidden: { 
    clipPath: 'inset(100% 0 0 0)'
  },
  visible: { 
    clipPath: 'inset(0% 0 0 0)',
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

// Counter animation (for numbers)
export const counterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
};

// Modal animations
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const modalContent = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    y: 20,
    transition: { 
      duration: 0.3 
    }
  }
};

// Navbar animations
export const navbarVariants = {
  top: {
    backgroundColor: 'rgba(15, 28, 63, 0)',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
  },
  scrolled: {
    backgroundColor: 'rgba(15, 28, 63, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
  }
};

// Mobile menu
export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    x: '100%'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

export const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

// Floating animation
export const floating = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Rotate animation
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Line draw animation
export const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
};

// Text character animation
export const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export const sentenceAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

// Parallax scroll
export const parallax = (yOffset = 100) => ({
  initial: { y: 0 },
  animate: { 
    y: yOffset,
    transition: { 
      ease: 'linear'
    }
  }
});

// 3D card tilt
export const tilt3D = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};
