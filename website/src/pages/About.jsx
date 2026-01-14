import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Heart, Shield, Award, Users, Clock, 
  CheckCircle, Zap, TrendingUp, Building, Leaf, ArrowRight
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { Section, SectionHeader, StatCard, Card, Button } from '../components/ui';
import { useSEO } from '../utils/seo';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animations';
import { companyInfo, team, stats } from '../data/siteData';
import { SiFsecure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";

// Values data
const values = [
  {
    icon: SiFsecure,
    title: 'Quality First',
    description: 'We never compromise on quality. Every product meets stringent standards before leaving our facility.'
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your success is our success. We build lasting relationships through exceptional service and support.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously invest in new technologies and methods to deliver better solutions.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to environmentally responsible practices in all our operations.'
  }
];

// Timeline data
const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Oryx Steel Industries was established in Harare with a vision to provide quality roofing materials.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2017',
    title: 'Expanded Product Line',
    description: 'Added steel door frames and window frames to our product offerings.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2019',
    title: 'Laser Cutting Services',
    description: 'Invested in state-of-the-art laser cutting technology for decorative metalwork.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2021',
    title: 'Nationwide Delivery',
    description: 'Expanded our delivery network to cover all major cities across Zimbabwe.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2023',
    title: '2000+ Projects',
    description: 'Reached a milestone of completing over 2000 successful projects.',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=400&q=80'
  },
  {
    year: '2024',
    title: 'Continued Growth',
    description: 'Expanded team to 50+ members and introduced new product lines.',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=400&q=80'
  }
];

// Team images
const teamImages = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
];

// Story Section
const StorySection = () => {
  return (
    <Section background="white" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-oryx-orange/10 text-oryx-orange text-sm font-medium mb-4">
                Our Story
              </span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-navy-900 mb-6">
              Building Zimbabwe's Future,{' '}
              <span className="text-oryx-orange">One Roof at a Time</span>
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in 2015, Oryx Steel Industries began with a simple mission: to provide 
                Zimbabweans with access to quality roofing materials and steel products that 
                stand the test of time.
              </p>
              <p>
                What started as a small operation has grown into one of the country's most 
                trusted suppliers of chromadek roofing, steel door frames, and decorative 
                metalwork. Our success is built on an unwavering commitment to quality, 
                fair pricing, and exceptional customer service.
              </p>
              <p>
                Today, we serve thousands of customers including homeowners, contractors, 
                developers, and industrial clients. Our team of over 50 dedicated professionals 
                works tirelessly to ensure every project receives the attention it deserves.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-8">
              <Button to="/contact" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Work With Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large image */}
              <div className="col-span-2 aspect-video rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Our Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">Our Manufacturing Facility</p>
                  <p className="text-white/70 text-sm">Harare, Zimbabwe</p>
                </div>
              </div>
              
              {/* Smaller images */}
              <div className="aspect-square rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-medium text-sm">Expert Team</p>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80"
                  alt="Quality Products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-medium text-sm">Quality Materials</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-100 hidden sm:block"
            >
              <p className="text-3xl sm:text-4xl font-display font-bold text-navy-900">10+</p>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// Mission & Vision Section
const MissionVisionSection = () => {
  return (
    <Section background="light" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Mission */}
          <motion.div variants={staggerItem}>
            <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-14 h-14 rounded-xl bg-oryx-orange flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To be Zimbabwe's leading supplier of premium roofing materials and steel products, 
                  delivering exceptional quality and service that empowers our customers to build 
                  with confidence. We strive to make quality construction materials accessible 
                  to all, from individual homeowners to large-scale developers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={staggerItem}>
            <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To transform Zimbabwe's construction landscape by setting new standards in 
                  product quality, innovation, and customer service. We envision a future where 
                  every building in Zimbabwe stands as a testament to quality craftsmanship, 
                  protected by materials that endure for generations.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

// Values Section
const ValuesSection = () => {
  return (
    <Section background="navy" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          tag="Our Values"
          title="What Drives"
          titleHighlight="Our Success"
          description="These core values guide everything we do, from product selection to customer interactions."
          centered
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:bg-white/15 hover:border-oryx-orange/30 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-oryx-orange/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-oryx-orange/30 transition-colors">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-oryx-orange" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

// Timeline Section
const TimelineSection = () => {
  return (
    <Section background="white" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Our Journey"
          title="A Decade of"
          titleHighlight="Growth"
          description="From humble beginnings to industry leadership, see how we've evolved over the years."
          centered
        />

        <div className="relative mt-10 sm:mt-16">
          {/* Timeline line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-oryx-orange via-navy-200 to-oryx-orange hidden lg:block" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${idx % 2 === 0 ? 'lg:ml-auto' : ''} max-w-md`}>
                    {/* Image */}
                    <div className="h-40 sm:h-48 relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-oryx-orange text-white text-sm font-bold">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 w-5 h-5 rounded-full bg-oryx-orange border-4 border-white shadow-lg hidden lg:block flex-shrink-0" />

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

// Team Section
const TeamSection = () => {
  return (
    <Section background="light" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Our Team"
          title="Meet The"
          titleHighlight="Leaders"
          description="Our experienced team brings together decades of industry knowledge and a passion for excellence."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12"
        >
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={teamImages[idx % teamImages.length]}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs sm:text-sm line-clamp-3">{member.bio}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="font-display font-semibold text-navy-900 text-sm sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="text-oryx-orange text-xs sm:text-sm mt-1">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

// Stats Section with Background
const StatsSection = () => {
  const iconMap = {
    CheckCircle,
    Users,
    Award,
    Headphones: Clock
  };

  return (
    <Section background="gradient" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oryx-orange/95 to-oryx-orange-dark/95" />
      </div>

      <div className="container-custom relative z-10">
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

// CTA Section
const CTASection = () => {
  return (
    <Section background="white" className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 sm:mb-6">
              Ready to Build With the Best?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Oryx Steel Industries 
              for their construction needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/products" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View Products
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// Main About Page
const About = () => {
  useSEO({
    title: 'About Us | Oryx Steel Industries - Zimbabwe\'s Trusted Steel Supplier',
    description: 'Learn about Oryx Steel Industries - our story, mission, values, and the team behind Zimbabwe\'s premier roofing materials and steel products supplier.',
    keywords: 'about Oryx Steel, Zimbabwe steel supplier, roofing company Zimbabwe, steel door frames manufacturer'
  });

  return (
    <>
      <PageHero
        title="About Oryx Steel Industries"
        subtitle="Building Zimbabwe's future with quality steel and roofing solutions since 2015."
        breadcrumbs={[{ label: 'About Us' }]}
        height="default"
      />
      
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </>
  );
};

export default About;