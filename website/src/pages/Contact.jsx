import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Facebook,
  Instagram,
  Globe,
  ChevronRight,
  Building2,
  Users,
  Headphones
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { Section, SectionHeader } from '../components/ui/Cards';
import Button from '../components/ui/Button';
import { Input, Textarea, Select } from '../components/ui/FormElements';
import { useSEO, generateLocalBusinessSchema } from '../utils/seo';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animations';
import { siteData } from '../data/siteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useSEO({
    title: 'Contact Us | Oryx Steel Industries',
    description: 'Get in touch with Oryx Steel Industries for roofing materials, steel door frames, and fabrication services. Visit us at 133 Willowvale Road, Harare.',
    keywords: 'contact Oryx Steel, roofing supplier Harare, steel company Zimbabwe, get quote roofing'
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: siteData.company.phone,
      action: (phone) => `tel:${phone}`,
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [siteData.company.email],
      action: (email) => `mailto:${email}`,
      color: 'bg-oryx-orange'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [siteData.company.address],
      action: () => 'https://maps.google.com/?q=133+Willowvale+Road+Harare+Zimbabwe',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 8:00 AM - 1:00 PM', 'Sun: Closed'],
      color: 'bg-purple-500'
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: 'Request a Quote',
      description: 'Get a free, no-obligation quote for your project',
      cta: 'Get Quote',
      highlight: true
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Need help with product specifications or installation?',
      cta: 'Get Help'
    },
    {
      icon: Users,
      title: 'Bulk Orders',
      description: 'Special pricing for contractors and large projects',
      cta: 'Learn More'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      projectType: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={<>Get In <span className="text-oryx-orange">Touch</span></>}
        subtitle="We're here to help with your roofing and steel fabrication needs. Reach out today for a free consultation."
        breadcrumbs={[{ label: 'Contact' }]}
        height="small"
      />

      {/* Quick Actions */}
      <Section background="white" className="py-12 -mt-8 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                    action.highlight 
                      ? 'bg-navy-900 border-navy-800 hover:bg-navy-800' 
                      : 'bg-white border-gray-100 hover:border-oryx-orange hover:shadow-lg'
                  }`}
                  onClick={() => {
                    const formSection = document.getElementById('contact-form');
                    formSection?.scrollIntoView({ behavior: 'smooth' });
                    setFormData(prev => ({ ...prev, subject: action.title }));
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    action.highlight ? 'bg-oryx-orange' : 'bg-oryx-orange/10 group-hover:bg-oryx-orange'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      action.highlight ? 'text-white' : 'text-oryx-orange group-hover:text-white'
                    }`} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${
                    action.highlight ? 'text-white' : 'text-navy-900'
                  }`}>
                    {action.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    action.highlight ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {action.description}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                    action.highlight ? 'text-oryx-orange' : 'text-oryx-orange'
                  }`}>
                    {action.cta}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Main Contact Section */}
      <Section id="contact-form" background="light" className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-oryx-orange/10 text-oryx-orange rounded-full text-sm font-semibold mb-6">
                Contact Information
              </span>
              <h2 className="heading-lg text-navy-900 mb-6">
                Let's Start a <span className="text-oryx-orange">Conversation</span>
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Whether you need a quick quote, technical advice, or want to discuss a large project, 
                our team is ready to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          item.action ? (
                            <a
                              key={idx}
                              href={item.action(detail)}
                              target={item.title === 'Address' ? '_blank' : undefined}
                              rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                              className="block text-gray-600 hover:text-oryx-orange transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          )
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="font-semibold text-navy-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: siteData.company.social.facebook, label: 'Facebook' },
                    { icon: Instagram, href: siteData.company.social.instagram, label: 'Instagram' },
                    { icon: Globe, href: siteData.company.social.tiktok, label: 'TikTok' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-navy-900 hover:border-navy-900 hover:text-white transition-all group"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={resetForm} variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-navy-900 mb-6">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          error={errors.name}
                          required
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          error={errors.email}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+263 7X XXX XXXX"
                          error={errors.phone}
                          required
                        />
                        <Select
                          label="Project Type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          options={[
                            { value: '', label: 'Select project type' },
                            { value: 'Residential', label: 'Residential' },
                            { value: 'Commercial', label: 'Commercial' },
                            { value: 'Industrial', label: 'Industrial' },
                            { value: 'Institutional', label: 'Institutional' },
                            { value: 'Other', label: 'Other' }
                          ]}
                        />
                      </div>

                      <Input
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        error={errors.subject}
                        required
                      />

                      <Textarea
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, quantities needed, or any questions you have..."
                        rows={5}
                        error={errors.message}
                        required
                      />

                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        icon={Send}
                        loading={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="white" className="py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            tag="Our Location"
            title={<>Visit Our <span className="text-oryx-orange">Showroom</span></>}
            description="Come see our products in person at our Harare location"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-navy-900 h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-oryx-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">133 Willowvale Road</h3>
                  <p className="text-gray-400 mb-6">Harare, Zimbabwe</p>
                  <Button 
                    href="https://maps.google.com/?q=133+Willowvale+Road+Harare+Zimbabwe" 
                    target="_blank"
                    variant="primary"
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            {/* Location Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Building2 className="w-8 h-8 text-oryx-orange mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">Showroom</h4>
                <p className="text-sm text-gray-600">View our full product range</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-oryx-orange mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">Expert Team</h4>
                <p className="text-sm text-gray-600">Get personalized advice</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-oryx-orange mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">Open 6 Days</h4>
                <p className="text-sm text-gray-600">Mon-Fri 8-5, Sat 8-1</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-6">
              Ready to Get <span className="text-oryx-orange">Started</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Call us now for immediate assistance or browse our products online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href={`tel:${siteData.company.phone[0]}`} 
                variant="primary" 
                size="xl" 
                icon={Phone}
              >
                Call Now: {siteData.company.phone[0]}
              </Button>
              <Button to="/products" variant="white" size="xl">
                Browse Products
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
