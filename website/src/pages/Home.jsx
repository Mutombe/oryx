import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  ChevronRight,
  Check,
  Star,
  Quote,
  Shield,
  Award,
  Clock,
  Truck,
  Phone,
  Mail,
  MapPin,
  Home as HomeIcon,
  DoorOpen,
  Sparkles,
  MessageSquare,
  Users,
  CheckCircle,
  Headphones,
  PhoneCall,
  ArrowUpRight,
  Building2,
  Hammer,
  HardHat,
  Factory,
  ChevronLeft,
  Palette,
  Ruler,
  Settings,
  Wrench,
} from "lucide-react";
import {
  Button,
  Section,
  SectionHeader,
  StatCard,
  ProductCard,
  FeatureCard,
} from "../components/ui";
import {
  useSEO,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "../utils/seo";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  heroTitle,
  heroSubtitle,
  cardHover,
} from "../utils/animations";
import {
  companyInfo,
  products,
  services,
  stats,
  testimonials,
} from "../data/siteData";
import { GiBeveledStar } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";
import { IoLogoWhatsapp } from "react-icons/io";

// Icon mapping for dynamic rendering
const iconMap = {
  Home: HomeIcon,
  DoorOpen,
  Sparkles,
  MessageSquare,
  Truck,
  MapPin,
  CheckCircle,
  Users,
  Award,
  Headphones,
};

// Hero background images for carousel
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80",
    alt: "Steel Construction Work",
  },
  {
    url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&q=80",
    alt: "Metal Roofing Installation",
  },
  {
    url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=80",
    alt: "Industrial Steel Manufacturing",
  },
  {
    url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=2000&q=80",
    alt: "Construction Site",
  },
];

// Hero Section with Image Carousel
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentImage(index);
  }, []);

  // Floating cards data
  const floatingCards = [
    {
      icon: HomeIcon,
      title: "Premium Roofing",
      subtitle: "Q-Tiles & IBR",
      position: "top-[15%] right-[5%] xl:right-[8%]",
      delay: 0.8,
    },
    {
      icon: DoorOpen,
      title: "Steel Frames",
      subtitle: "Doors & Windows",
      position: "top-[32%] right-[18%] xl:right-[22%]",
      delay: 1.0,
    },
    {
      icon: Sparkles,
      title: "Laser Cutting",
      subtitle: "Custom Designs",
      position: "top-[50%] right-[3%] xl:right-[6%]",
      delay: 1.2,
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      subtitle: "Nationwide",
      position: "top-[68%] right-[15%] xl:right-[20%]",
      delay: 1.4,
    },
    {
      icon: SiFsecure,
      title: "Quality Assured",
      subtitle: "10+ Year Warranty",
      position: "top-[42%] right-[32%] xl:right-[38%]",
      delay: 1.1,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage].url}
              alt={heroImages[currentImage].alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        {/* Mobile: Strong dark overlay for readability */}
        <div className="absolute inset-0 bg-navy-950/85 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50 lg:hidden" />

        {/* Desktop: Dark left, lighter right */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 via-45% to-navy-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-l from-oryx-orange/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "w-8 bg-oryx-orange"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Navigation Arrows - Desktop only */}
      <button
        onClick={goToPrev}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Decorative Elements - Desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-[20%] left-0 w-[40%] h-[1px] bg-gradient-to-r from-oryx-orange/60 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-[25%] left-0 w-[25%] h-[1px] bg-gradient-to-r from-oryx-orange/30 to-transparent origin-left"
        />
      </div>

      {/* Main Content */}
      <div className="w-full relative z-10 pt-24 pb-32 lg:pt-32 lg:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full"
            >
              {/* Badge */}
              <motion.div
                variants={staggerItem}
                className="flex justify-center lg:justify-start mb-4 sm:mb-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <GiBeveledStar
                        key={i}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-oryx-orange text-oryx-orange"
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-white/90">
                    Trusted by 2000+ Clients
                  </span>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                variants={staggerItem}
                className="text-oryx-orange font-semibold text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 text-center lg:text-left"
              >
                Zimbabwe's Premier Steel Supplier
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                variants={staggerItem}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-white leading-[1] tracking-tight mb-4 sm:mb-6 text-center lg:text-left"
              >
                CRAFTING THE <span className="text-oryx-orange">FUTURE</span> IN
                STEEL
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={staggerItem}
                className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left"
              >
                Premium chromadek roofing materials, precision-engineered steel
                door frames, and expert craftsmanship. Building Zimbabwe's
                tomorrow with quality that lasts generations.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center lg:justify-start"
              >
                <Button
                  to="/products"
                  size="lg"
                  className="bg-oryx-orange hover:bg-oryx-orange-light text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base group justify-center"
                  rightIcon={
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  }
                >
                  Explore Products
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base justify-center"
                  leftIcon={<PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />}
                >
                  Get Free Quote
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={staggerItem}
                className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10"
              >
                {[
                  { value: "2000+", label: "Projects" },
                  { value: "10+", label: "Years" },
                  { value: "50+", label: "Team" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Glassmorphic Cards (Desktop) */}
            <div className="relative hidden lg:block h-[500px] xl:h-[550px]">
              {floatingCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: card.delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className={`absolute ${card.position} z-10`}
                >
                  <div className="group cursor-pointer">
                    <div className="relative px-4 py-3 xl:px-5 xl:py-4 rounded-xl xl:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 hover:border-oryx-orange/30 transition-all duration-300 min-w-[160px] xl:min-w-[180px]">
                      <div className="absolute inset-0 rounded-xl xl:rounded-2xl bg-oryx-orange/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                      <div className="relative flex items-center gap-3">
                        <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-lg xl:rounded-xl bg-oryx-orange/20 flex items-center justify-center group-hover:bg-oryx-orange/30 transition-colors">
                          <card.icon className="w-5 h-5 text-oryx-orange" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {card.title}
                          </p>
                          <p className="text-xs text-gray-400">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute top-[25%] right-[48%] xl:right-[52%] z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-oryx-orange rounded-xl xl:rounded-2xl blur-xl opacity-40" />
                  <div className="relative bg-gradient-to-br from-oryx-orange to-oryx-orange-dark rounded-xl xl:rounded-2xl p-4 xl:p-5 text-center shadow-2xl">
                    <p className="text-3xl xl:text-4xl font-heading text-white">
                      10+
                    </p>
                    <p className="text-[10px] xl:text-xs text-white/80 uppercase tracking-wider">
                      Years of
                      <br />
                      Excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Cards - Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:hidden mt-8"
          >
            <div className="grid grid-cols-2 gap-3">
              {floatingCards.slice(0, 4).map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <div className="px-3 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-oryx-orange/20 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-4 h-4 text-oryx-orange" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-xs truncate">
                          {card.title}
                        </p>
                        <p className="text-[10px] text-gray-400 truncate">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Call Button 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 lg:hidden"
          >
            <a 
              href={`tel:${companyInfo.contact.phones[0].replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 active:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-oryx-orange" />
              <span className="text-white font-semibold text-sm">{companyInfo.contact.phones[0]}</span>
            </a>
          </motion.div>*/}
        </div>
      </div>

      {/* Bottom Gradient Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-12 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll Indicator - Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-oryx-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// About Preview Section
const AboutPreviewSection = () => {
  return (
    <Section background="white" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden">
              <img
                src="/1.jpg"
                alt="Steel Manufacturing"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

              {/* Badge on image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-oryx-orange flex items-center justify-center flex-shrink-0">
                      <SiFsecure className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">
                        Since 2015
                      </p>
                      <p className="text-white/70 text-xs sm:text-sm">
                        Building Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card - Hidden on small mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 lg:-right-8 lg:-bottom-8 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-oryx-orange/10 flex items-center justify-center">
                  <LiaAwardSolid className="w-6 h-6 sm:w-7 sm:h-7 text-oryx-orange" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-navy-900">
                    10+
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Years Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-oryx-orange/10 text-oryx-orange text-xs sm:text-sm font-medium mb-4">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-navy-900 mb-4 sm:mb-6"
            >
              Zimbabwe's Trusted Name in{" "}
              <span className="text-oryx-orange">Quality Steel</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            >
              {companyInfo.description}
            </motion.p>

            {/* Features list */}
            <motion.div
              variants={staggerItem}
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left"
            >
              {[
                "Premium quality chromadek and roofing materials",
                "Custom-manufactured steel door and window frames",
                "State-of-the-art laser cutting services",
                "Nationwide delivery across Zimbabwe",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-oryx-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-oryx-orange" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex justify-center lg:justify-start"
            >
              <Button
                to="/about"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="text-sm sm:text-base"
              >
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// Products Section
const ProductsSection = () => {
  const popularProducts = products.filter((p) => p.popular).slice(0, 4);

  return (
    <Section background="light" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Our Products"
          title="Premium Steel & Roofing"
          titleHighlight="Solutions"
          description="Discover our comprehensive range of high-quality roofing materials, steel frames, and decorative metalwork."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12"
        >
          {popularProducts.map((product, idx) => (
            <motion.div key={product.id} variants={staggerItem}>
              {/* Pass index for unique color themes */}
              <ProductCard product={product} index={idx} />

              {/* Alternative card styles - uncomment to use:
              <ProductCardAlt product={product} index={idx} />
              <ProductCardListing product={product} index={idx} author="SteelMaster" />
              */}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <Button
            to="/products"
            variant="outline"
            rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            className="text-sm sm:text-base"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <Section background="navy" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Our Services"
          title="Comprehensive"
          titleHighlight="Services"
          description="From material supply to technical consultation, we provide end-to-end solutions for all your construction needs."
          centered
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12"
        >
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || HomeIcon;
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <FeatureCard
                  number={String(idx + 1).padStart(2, "0")}
                  icon={<Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                  title={service.title}
                  description={service.description}
                  dark
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <Button
            to="/services"
            variant="white"
            rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            className="text-sm sm:text-base"
          >
            Explore All Services
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

// Stats Section
const StatsSection = () => {
  return (
    <Section background="gradient" className="py-12 sm:py-16 lg:py-20">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || CheckCircle;
            return (
              <motion.div key={idx} variants={staggerItem}>
                <StatCard
                  icon={<Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                  value={stat.value}
                  label={stat.label}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <Section background="white" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Testimonials"
          title="What Our"
          titleHighlight="Clients Say"
          description="Hear from the professionals who trust Oryx Steel Industries for their construction projects."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12"
        >
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-oryx-orange/20 transition-all duration-300">
                {/* Quote icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-oryx-orange/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-oryx-orange/20 transition-colors">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-oryx-orange" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <GiBeveledStar
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-oryx-orange text-oryx-orange"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-semibold text-sm sm:text-base">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-navy-900 text-sm sm:text-base truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

// CTA Section
const CTASection = () => {


  return (
    <Section background="orange" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
            Get in touch with our team for a free consultation and quote. We're
            here to help bring your vision to life with quality materials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              to="/contact"
              variant="white"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="text-sm sm:text-base justify-center"
            >
              Get a Free Quote
            </Button>
            <Button
              href={`tel:${companyInfo.contact.phones[0].replace(/\s/g, "")}`}
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 text-sm sm:text-base justify-center"
              leftIcon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
            >
              Call Us Now
            </Button>
          </div>
        </motion.div>


      </div>
    </Section>
  );
};

// Main Home Page Component
const Home = () => {

  
  // SEO
  useSEO({
    title:
      "Oryx Steel Industries | Premium Roofing Materials & Steel Door Frames Zimbabwe",
    description: companyInfo.description,
    keywords:
      "roofing materials Zimbabwe, chromadek sheets, steel door frames, Q-Tiles Harare, IBR sheets, laser cutting Zimbabwe",
  });

    const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@oryx.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20Oryx%20Steel%20Industries%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";
    }
  };

  return (
    <>
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateLocalBusinessSchema())}
      </script>

              {/* Floating Action Elements */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <button
            className="group bg-gradient-to-r from-oryx-orange to-roof-blue-600 hover:bg-navy-900 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => handleAction("whatsapp")}
          >
            <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
          </button>
          <button
            className="group bg-gradient-to-r from-oryx-orange to-navy-900 hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => handleAction("call")}
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
          <button
            className="group bg-gradient-to-r from-oryx-orange to-navy-900 hover:bg-navy-900 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => handleAction("email")}
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

      <HeroSection />
      <AboutPreviewSection />
      <ProductsSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
