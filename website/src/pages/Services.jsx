import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Truck, 
  Ruler, 
  PenTool, 
  Shield, 
  Package, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Phone,
  Star,
  ChevronDown,
  Zap,
  Target,
  HeartHandshake,
  Award
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { Section, SectionHeader, Card } from '../components/ui';
import Button from '../components/ui/Button';
import { useSEO } from '../utils/seo';
import { staggerContainer, staggerItem, fadeInUp, scaleIn } from '../utils/animations';
import { companyInfo } from '../data/siteData';
import { SiFsecure } from "react-icons/si";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useSEO({
    title: 'Our Services | Oryx Steel Industries',
    description: 'Professional roofing installation, steel door frames, laser cutting, and bulk supply services in Zimbabwe. Quality craftsmanship with nationwide delivery.',
    keywords: 'roofing services Zimbabwe, steel fabrication, laser cutting, door frame installation, bulk roofing supply'
  });

  const detailedServices = [
    {
      icon: Home,
      title: 'Roofing Solutions',
      shortDesc: 'Complete roofing supply and consultation',
      fullDesc: 'From Q-Tiles to IBR sheets, we provide comprehensive roofing solutions tailored to your specific needs. Our expert team guides you through material selection, quantity calculations, and installation best practices.',
      features: [
        'Wide range of roofing profiles',
        'Custom length cutting',
        'Color matching service',
        'Technical specifications',
        'Installation guidelines'
      ],
      stats: { projects: '500+', satisfaction: '98%' },
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: PenTool,
      title: 'Steel Door & Window Frames',
      shortDesc: 'Custom fabricated steel frames',
      fullDesc: 'Precision-engineered steel door and window frames manufactured to exact specifications. Our frames are known for durability, perfect alignment, and seamless integration with any construction project.',
      features: [
        'Standard & custom sizes',
        'Multiple finish options',
        'Galvanized protection',
        'Pre-drilled for easy installation',
        'Matching accessories'
      ],
      stats: { projects: '1000+', satisfaction: '99%' },
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Zap,
      title: 'Laser Cutting & Design',
      shortDesc: 'Precision laser cut decorative elements',
      fullDesc: 'State-of-the-art laser cutting technology for intricate designs, security gates, decorative panels, and custom metalwork. Transform your vision into precision-cut reality.',
      features: [
        'Intricate pattern cutting',
        'Custom design service',
        'Security gate designs',
        'Decorative wall panels',
        'Signage and lettering'
      ],
      stats: { projects: '300+', satisfaction: '100%' },
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Ruler,
      title: 'Consultation & Planning',
      shortDesc: 'Expert project guidance',
      fullDesc: 'Our experienced team provides comprehensive project consultation, from material selection to cost estimation. We help you plan efficiently and avoid costly mistakes.',
      features: [
        'Site assessment',
        'Material recommendations',
        'Cost estimation',
        'Project timeline planning',
        'Technical support'
      ],
      stats: { projects: '800+', satisfaction: '97%' },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Package,
      title: 'Bulk Supply',
      shortDesc: 'Large-scale project supply',
      fullDesc: 'Competitive pricing for contractors and large projects. We handle orders of any size with consistent quality and reliable supply chain management.',
      features: [
        'Volume discounts',
        'Consistent stock',
        'Priority scheduling',
        'Dedicated account manager',
        'Flexible payment terms'
      ],
      stats: { projects: '200+', satisfaction: '98%' },
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Truck,
      title: 'Delivery Services',
      shortDesc: 'Nationwide delivery coverage',
      fullDesc: 'Reliable delivery across Zimbabwe. Our fleet ensures your materials arrive safely and on schedule, with careful handling and professional service.',
      features: [
        'Nationwide coverage',
        'GPS tracking',
        'Careful handling',
        'Scheduled deliveries',
        'Express options available'
      ],
      stats: { projects: '2000+', satisfaction: '96%' },
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss your project requirements with our expert team',
      icon: HeartHandshake
    },
    {
      step: '02',
      title: 'Quotation',
      description: 'Receive a detailed, transparent quotation within 24 hours',
      icon: Target
    },
    {
      step: '03',
      title: 'Production',
      description: 'We manufacture your order with precision and care',
      icon: Zap
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Safe delivery to your site, anywhere in Zimbabwe',
      icon: Truck
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'We have no strict minimum order. Whether you need materials for a single room or an entire housing development, we\'re here to help. However, bulk orders do qualify for special pricing.'
    },
    {
      question: 'Do you provide installation services?',
      answer: 'We primarily supply materials and can recommend trusted installation partners. We also provide comprehensive installation guides and technical support for DIY projects and contractors.'
    },
    {
      question: 'What areas do you deliver to?',
      answer: 'We deliver nationwide across Zimbabwe. Harare and surrounding areas typically receive next-day delivery, while other regions are serviced within 2-5 business days depending on location.'
    },
    {
      question: 'Can you match specific colors?',
      answer: 'Yes! We offer a wide range of Chromadek colors and can source specific shades to match your project requirements. Custom colors may require additional lead time.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, bank transfers, EcoCash, and offer credit terms for established business accounts. For large projects, we can arrange milestone-based payment plans.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={<>Expert <span className="text-oryx-orange">Services</span> for Every Project</>}
        subtitle="From concept to completion, we deliver excellence in roofing materials and steel fabrication"
        breadcrumbs={[{ label: 'Services' }]}
        height="default"
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Button to="/contact" variant="primary" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
            Get a Quote
          </Button>
          <Button to="/products" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
            View Products
          </Button>
        </div>
      </PageHero>

      {/* Interactive Services Section */}
      <Section background="white" className="py-16 sm:py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            tag="What We Offer"
            title="Comprehensive"
            titleHighlight="Solutions"
            description="Explore our full range of services designed to meet every construction need"
            centered
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mt-10 lg:mt-16">
            {/* Service Navigation */}
            <motion.div 
              className="lg:col-span-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-2 sm:space-y-3 lg:sticky lg:top-32">
                {detailedServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.button
                      key={index}
                      variants={staggerItem}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 flex items-center gap-3 sm:gap-4 group ${
                        activeService === index
                          ? 'bg-navy-900 text-white shadow-xl'
                          : 'bg-gray-50 hover:bg-gray-100 text-navy-900'
                      }`}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                        activeService === index
                          ? 'bg-oryx-orange'
                          : 'bg-white group-hover:bg-oryx-orange/10'
                      }`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          activeService === index ? 'text-white' : 'text-oryx-orange'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base truncate">{service.title}</h3>
                        <p className={`text-xs sm:text-sm truncate ${
                          activeService === index ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {service.shortDesc}
                        </p>
                      </div>
                      <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${
                        activeService === index ? 'translate-x-1' : ''
                      }`} />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Service Details */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
                >
                  {(() => {
                    const service = detailedServices[activeService];
                    const Icon = service.icon;
                    return (
                      <>
                        {/* Service Image */}
                        <div className="h-48 sm:h-56 lg:h-64 relative overflow-hidden">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent" />
                          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-oryx-orange flex items-center justify-center">
                              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white">
                                {service.title}
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 sm:p-6 lg:p-8">
                          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                            {service.fullDesc}
                          </p>

                          {/* Features Grid */}
                          <div className="grid sm:grid-cols-2 gap-3 mb-6">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-navy-800 text-sm sm:text-base">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 sm:gap-6 p-4 sm:p-6 bg-navy-900 rounded-xl">
                            <div className="flex items-center gap-3">
                              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-oryx-orange" />
                              <div>
                                <div className="text-xl sm:text-2xl font-bold text-white">{service.stats.projects}</div>
                                <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-oryx-orange" />
                              <div>
                                <div className="text-xl sm:text-2xl font-bold text-white">{service.stats.satisfaction}</div>
                                <div className="text-xs sm:text-sm text-gray-400">Satisfaction Rate</div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button to="/contact" variant="primary" leftIcon={<Phone className="w-5 h-5" />}>
                              Request This Service
                            </Button>
                            <Button to="/products" variant="outline">
                              View Related Products
                            </Button>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Process Section with Background */}
      <Section background="navy" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/90" />
        </div>

        <div className="container-custom relative z-10">
          <SectionHeader
            tag="How It Works"
            title="Our Simple"
            titleHighlight="Process"
            description="From your first call to delivery, we make it easy"
            centered
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10 lg:mt-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line - Desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-oryx-orange to-transparent" />
                  )}
                  
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10 hover:border-oryx-orange/50 transition-all group">
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-oryx-orange text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full">
                      Step {step.step}
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-navy-900/50 flex items-center justify-center group-hover:bg-oryx-orange transition-colors">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-oryx-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Us with Images */}
      <Section background="light" className="py-16 sm:py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-2 bg-oryx-orange/10 text-oryx-orange rounded-full text-sm font-semibold mb-6">
                Why Oryx Steel
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-navy-900 mb-6">
                Trusted by <span className="text-oryx-orange">Thousands</span> Across Zimbabwe
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                For over a decade, we've been the go-to supplier for quality roofing materials and steel products. 
                Our commitment to excellence, competitive pricing, and exceptional service has made us a household name 
                in Zimbabwe's construction industry.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: SiFsecure, text: 'Quality guaranteed on all products' },
                  { icon: Clock, text: 'Fast turnaround and reliable delivery' },
                  { icon: Target, text: 'Competitive pricing for all budgets' },
                  { icon: HeartHandshake, text: 'Expert support from start to finish' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-oryx-orange/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-oryx-orange" />
                    </div>
                    <span className="text-navy-800 font-medium text-sm sm:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <Button to="/about" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Learn About Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Main Large Image */}
                <div className="col-span-2 aspect-video rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                    alt="Steel Manufacturing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">10+ Years</p>
                          <p className="text-white/70 text-sm">Industry Experience</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-oryx-orange flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stat Cards with Images */}
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=400&q=80"
                    alt="Projects"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-900/70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-oryx-orange">5000+</p>
                    <p className="text-white/80 text-xs sm:text-sm">Happy Customers</p>
                  </div>
                </div>

                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=400&q=80"
                    alt="Quality"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-oryx-orange/80" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">100%</p>
                    <p className="text-white/90 text-xs sm:text-sm">Quality Assured</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-48 sm:w-64 h-48 sm:h-64 bg-oryx-orange/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" className="py-16 sm:py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            tag="FAQ"
            title="Frequently Asked"
            titleHighlight="Questions"
            description="Get answers to common questions about our services"
            centered
          />

          <motion.div 
            className="max-w-3xl mx-auto mt-8 sm:mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="mb-3 sm:mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all flex items-center justify-between ${
                    openFaq === index
                      ? 'bg-navy-900 text-white'
                      : 'bg-gray-50 hover:bg-gray-100 text-navy-900'
                  }`}
                >
                  <span className="font-semibold pr-4 sm:pr-8 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-6 bg-gray-50 rounded-b-xl border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section with Background */}
      <Section background="gradient" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1920&q=80"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-oryx-orange/95 to-oryx-orange-dark/95" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your <span className="text-white/90">Project</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10">
              Contact us today for a free consultation and quote. Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button to="/contact" variant="white" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                Get Your Free Quote
              </Button>
              <Button 
                href={`tel:${companyInfo.contact.phones[0].replace(/\s/g, '')}`} 
                variant="outline" 
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Services;