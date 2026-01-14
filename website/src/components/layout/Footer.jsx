import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, Send,
  Facebook, Instagram, Linkedin, Youtube
} from 'lucide-react';
import { toast } from 'sonner';
import { companyInfo, navLinks, products } from '../../data/siteData';
import { useInView } from '../../hooks/useCustomHooks';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const Footer = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState('');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const productLinks = products.slice(0, 6).map(p => ({
    name: p.name,
    path: `/products#${p.id}`
  }));

  return (
    <>
      <footer 
        ref={ref}
        className="relative bg-navy-950 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 steel-pattern" />
        </div>
        
        {/* Orange Accent Line */}
        <div className="h-1 bg-gradient-to-r from-oryx-orange via-oryx-orange-light to-oryx-orange" />

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative py-16 border-b border-white/10"
        >
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <motion.div variants={fadeInUp} className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-heading mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-400">
                  Get the latest updates on products, promotions, and industry news.
                </p>
              </motion.div>
              
              <motion.form 
                variants={fadeInUp}
                onSubmit={handleNewsletterSubmit}
                className="flex w-full lg:w-auto max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-oryx-orange transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-oryx-orange hover:bg-oryx-orange-light text-white rounded-r-xl transition-colors duration-300 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={staggerItem}>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-oryx-orange to-oryx-orange-dark rounded-xl flex items-center justify-center">
                  <span className="text-white font-heading text-2xl">O</span>
                </div>
                <div>
                  <span className="block text-white font-heading text-xl leading-none tracking-wider">
                    ORYX STEEL
                  </span>
                  <span className="text-oryx-orange text-xs tracking-widest">
                    INDUSTRIES
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Zimbabwe's premier supplier of high-quality chromadek roofing materials and precision-crafted steel door frames.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href={companyInfo.social.facebook}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-oryx-orange transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={companyInfo.social.instagram}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-oryx-orange transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={companyInfo.social.linkedin}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-oryx-orange transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={companyInfo.social.tiktok}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-oryx-orange transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-oryx-orange" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-oryx-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-oryx-orange" />
                Our Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-oryx-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-oryx-orange" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`tel:${companyInfo.contact.phones[0]}`}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-oryx-orange flex-shrink-0 mt-1" />
                    <div>
                      {companyInfo.contact.phones.map((phone, idx) => (
                        <span key={idx} className="block">{phone}</span>
                      ))}
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${companyInfo.contact.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-oryx-orange flex-shrink-0" />
                    {companyInfo.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-oryx-orange flex-shrink-0 mt-1" />
                  <span>{companyInfo.location.address}, {companyInfo.location.city}, {companyInfo.location.country}</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-oryx-orange flex-shrink-0 mt-1" />
                  <div>
                    <span className="block">Mon-Fri: {companyInfo.workingHours.weekdays}</span>
                    <span className="block">Sat: {companyInfo.workingHours.saturday}</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Oryx Steel Industries. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-gray-500 hover:text-oryx-orange transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowTermsModal(true)}
                  className="text-gray-500 hover:text-oryx-orange transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
        size="lg"
      >
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            <strong>Last Updated:</strong> January 2024
          </p>
          
          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">1. Information We Collect</h4>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you request a quote, 
            contact us, or subscribe to our newsletter. This may include your name, email address, 
            phone number, and project details.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">2. How We Use Your Information</h4>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide and improve our services, process your 
            requests, communicate with you about products and promotions, and comply with legal obligations.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">3. Information Sharing</h4>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share your information with service 
            providers who assist us in operating our business, or when required by law.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">4. Data Security</h4>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">5. Your Rights</h4>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or delete your personal information. Contact us 
            at {companyInfo.contact.email} to exercise these rights.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">6. Contact Us</h4>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href={`mailto:${companyInfo.contact.email}`} className="text-oryx-orange hover:underline">
              {companyInfo.contact.email}
            </a>
          </p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms of Service"
        size="lg"
      >
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            <strong>Last Updated:</strong> January 2024
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">1. Acceptance of Terms</h4>
          <p className="text-gray-600 mb-4">
            By accessing and using the Oryx Steel Industries website, you accept and agree to be 
            bound by these Terms of Service.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">2. Products and Services</h4>
          <p className="text-gray-600 mb-4">
            All products and services are subject to availability. Prices are subject to change 
            without notice. Images are for illustration purposes only and actual products may vary.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">3. Orders and Payment</h4>
          <p className="text-gray-600 mb-4">
            Orders are subject to acceptance and confirmation. Payment terms will be specified at 
            the time of order. We reserve the right to refuse any order.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">4. Delivery</h4>
          <p className="text-gray-600 mb-4">
            Delivery times are estimates only. We are not liable for delays caused by circumstances 
            beyond our control. Risk of loss passes to the buyer upon delivery.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">5. Returns and Warranty</h4>
          <p className="text-gray-600 mb-4">
            Products may be returned in accordance with our return policy. Warranty terms vary by 
            product. Claims must be submitted within the warranty period.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">6. Limitation of Liability</h4>
          <p className="text-gray-600 mb-4">
            Oryx Steel Industries shall not be liable for any indirect, incidental, special, or 
            consequential damages arising from the use of our products or services.
          </p>

          <h4 className="text-lg font-semibold text-oryx-blue mt-6 mb-3">7. Contact</h4>
          <p className="text-gray-600">
            For questions about these terms, contact us at{' '}
            <a href={`mailto:${companyInfo.contact.email}`} className="text-oryx-orange hover:underline">
              {companyInfo.contact.email}
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
