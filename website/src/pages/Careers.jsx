import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Heart,
  TrendingUp,
  Coffee,
  Calendar,
  Shield,
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  Upload,
  Send,
  Building2,
  Star,
  Award,
  Zap
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { Section, SectionHeader, Card } from '../components/ui/Cards';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { Input, Textarea, Select, Checkbox } from '../components/ui/FormElements';
import { useSEO, generateJobPostingSchema } from '../utils/seo';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animations';
import { siteData } from '../data/siteData';
import { SiFsecure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null,
    agreement: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: 'Careers | Join Oryx Steel Industries',
    description: 'Join Zimbabwe\'s leading roofing and steel company. Explore exciting career opportunities and grow with us.',
    keywords: 'jobs Zimbabwe, steel industry careers, roofing company jobs, Harare employment'
  });

  const jobs = [
    {
      id: 1,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Harare',
      type: 'Full-time',
      salary: 'Competitive + Commission',
      posted: '2 days ago',
      description: 'We are looking for a dynamic Sales Executive to join our growing team. You will be responsible for identifying new business opportunities, building client relationships, and meeting sales targets.',
      responsibilities: [
        'Identify and pursue new sales opportunities',
        'Build and maintain strong customer relationships',
        'Achieve monthly and quarterly sales targets',
        'Prepare quotations and follow up with clients',
        'Attend trade shows and networking events',
        'Report on sales activities and market insights'
      ],
      requirements: [
        'Diploma or Degree in Sales, Marketing, or related field',
        '2+ years experience in B2B sales',
        'Excellent communication and negotiation skills',
        'Valid driver\'s license',
        'Knowledge of construction industry is a plus'
      ],
      benefits: ['Competitive base salary', 'Uncapped commission', 'Medical aid', 'Company vehicle'],
      featured: true
    },
    {
      id: 2,
      title: 'Production Supervisor',
      department: 'Operations',
      location: 'Harare',
      type: 'Full-time',
      salary: 'Negotiable',
      posted: '1 week ago',
      description: 'Oversee daily production operations and ensure quality standards are met. Lead a team of production workers and optimize manufacturing processes.',
      responsibilities: [
        'Supervise daily production activities',
        'Ensure quality control standards are maintained',
        'Manage and train production team members',
        'Optimize production schedules and efficiency',
        'Maintain equipment and report maintenance needs',
        'Ensure safety compliance in the production area'
      ],
      requirements: [
        'National Diploma in Manufacturing or Engineering',
        '5+ years experience in manufacturing/production',
        'Strong leadership and team management skills',
        'Knowledge of lean manufacturing principles',
        'Computer literacy'
      ],
      benefits: ['Competitive salary', 'Medical aid', 'Performance bonus', 'Training opportunities'],
      featured: true
    },
    {
      id: 3,
      title: 'Delivery Driver',
      department: 'Logistics',
      location: 'Harare',
      type: 'Full-time',
      salary: '$350 - $450',
      posted: '3 days ago',
      description: 'Join our logistics team as a Delivery Driver. You will be responsible for safe and timely delivery of roofing materials to customers across Zimbabwe.',
      responsibilities: [
        'Deliver products to customers safely and on time',
        'Load and secure materials properly',
        'Maintain delivery vehicle in good condition',
        'Collect payments and documentation',
        'Communicate delivery status with dispatch',
        'Provide excellent customer service'
      ],
      requirements: [
        'Valid Class 2 driver\'s license',
        '3+ years driving experience',
        'Clean driving record',
        'Physical fitness for loading/unloading',
        'Good communication skills',
        'Knowledge of Harare and surrounding areas'
      ],
      benefits: ['Competitive salary', 'Fuel allowance', 'Medical aid'],
      featured: false
    },
    {
      id: 4,
      title: 'Accounts Clerk',
      department: 'Finance',
      location: 'Harare',
      type: 'Full-time',
      salary: 'Negotiable',
      posted: '5 days ago',
      description: 'Support the finance team with day-to-day accounting tasks including invoicing, payments, and record keeping.',
      responsibilities: [
        'Process customer invoices and payments',
        'Reconcile accounts and bank statements',
        'Maintain accurate financial records',
        'Assist with month-end reporting',
        'Handle petty cash management',
        'Support audit preparations'
      ],
      requirements: [
        'Degree or Diploma in Accounting',
        '2+ years experience in accounts role',
        'Proficiency in accounting software (Sage/QuickBooks)',
        'Strong attention to detail',
        'Excel proficiency'
      ],
      benefits: ['Competitive salary', 'Medical aid', 'Study support'],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages with regular reviews'
    },
    {
      icon: Heart,
      title: 'Medical Aid',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear progression paths and promotion opportunities'
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Continuous learning and skills development programs'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with passionate, supportive colleagues'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible arrangements and reasonable working hours'
    }
  ];

  const values = [
    {
      icon: SiFsecure,
      title: 'Integrity',
      description: 'We do what we say and say what we do'
    },
    {
      icon: LiaAwardSolid,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Together we achieve more than alone'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new ideas and better ways'
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.experience) newErrors.experience = 'Please select experience level';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.agreement) newErrors.agreement = 'You must agree to the terms';
    
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
    
    toast.success('Application submitted successfully! We\'ll be in touch soon.');
    setIsApplying(false);
    setSelectedJob(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null,
      agreement: false
    });
    setIsSubmitting(false);
  };

  const JobCard = ({ job }) => (
    <motion.div
      variants={staggerItem}
      className={`bg-white rounded-2xl p-6 border ${
        job.featured ? 'border-oryx-orange shadow-lg' : 'border-gray-100'
      } hover:shadow-xl transition-all cursor-pointer group`}
      onClick={() => setSelectedJob(job)}
    >
      {job.featured && (
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-4 h-4 text-oryx-orange fill-oryx-orange" />
          <span className="text-sm font-semibold text-oryx-orange">Featured Position</span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-display font-bold text-navy-900 group-hover:text-oryx-orange transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-500">{job.department}</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-oryx-orange" />
        </div>
      </div>

      <p className="text-gray-600 line-clamp-2 mb-4">{job.description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          {job.location}
        </span>
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          {job.type}
        </span>
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <DollarSign className="w-4 h-4" />
          {job.salary}
        </span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-400">Posted {job.posted}</span>
        <span className="flex items-center gap-1 text-oryx-orange font-medium group-hover:gap-2 transition-all">
          View Details
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={<>Build Your <span className="text-oryx-orange">Career</span> With Us</>}
        subtitle="Join Zimbabwe's leading roofing and steel company. We're always looking for talented individuals to join our growing team."
        breadcrumbs={[{ label: 'Careers' }]}
        height="default"
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Button 
            onClick={() => {
              const jobsSection = document.getElementById('open-positions');
              jobsSection?.scrollIntoView({ behavior: 'smooth' });
            }} 
            variant="primary" 
            size="lg" 
            icon={Briefcase}
          >
            View Open Positions
          </Button>
        </div>
      </PageHero>

      {/* Why Join Us */}
      <Section background="white" className="py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            tag="Why Oryx Steel"
            title={<>Why Work <span className="text-oryx-orange">With Us</span></>}
            description="We believe our people are our greatest asset. Here's what makes Oryx Steel a great place to work."
            centered
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-oryx-orange/10 flex items-center justify-center group-hover:bg-oryx-orange transition-colors">
                    <Icon className="w-8 h-8 text-oryx-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="navy" className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-oryx-orange/20 text-oryx-orange rounded-full text-sm font-semibold mb-6">
                Our Culture
              </span>
              <h2 className="heading-lg text-white mb-6">
                Values That <span className="text-oryx-orange">Guide Us</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                At Oryx Steel, our values aren't just words on a wall - they're the principles 
                we live by every day. They shape how we work, how we treat each other, and how 
                we serve our customers.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-oryx-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{value.title}</h3>
                        <p className="text-sm text-gray-400">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-navy-800 rounded-2xl p-8 lg:p-12">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-oryx-orange rounded-2xl opacity-50" />
                <div className="relative">
                  <div className="text-6xl font-bold text-oryx-orange mb-4">50+</div>
                  <div className="text-2xl font-semibold text-white mb-4">Team Members Strong</div>
                  <p className="text-gray-400 leading-relaxed">
                    Our growing team of professionals brings diverse skills and experiences to deliver 
                    exceptional results for our customers every day.
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-10 h-10 rounded-full bg-navy-700 border-2 border-navy-800 flex items-center justify-center"
                        >
                          <Users className="w-4 h-4 text-gray-500" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">Join our team today!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section id="open-positions" background="light" className="py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            tag="Join Us"
            title={<>Open <span className="text-oryx-orange">Positions</span></>}
            description="Explore our current job openings and find your next career opportunity"
            centered
          />

          <motion.div
            className="grid md:grid-cols-2 gap-6 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </motion.div>

          {/* No Jobs Placeholder */}
          {jobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">No openings at the moment</h3>
              <p className="text-gray-500 mb-6">Check back soon or send us your CV for future opportunities</p>
              <Button onClick={() => setIsApplying(true)} variant="primary">
                Submit Your CV
              </Button>
            </div>
          )}
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
              Don't See a <span className="text-oryx-orange">Perfect Fit</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              We're always interested in meeting talented people. Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              onClick={() => setIsApplying(true)} 
              variant="primary" 
              size="xl" 
              icon={Send}
            >
              Submit General Application
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Job Detail Modal */}
      <Modal
        isOpen={!!selectedJob && !isApplying}
        onClose={() => setSelectedJob(null)}
        size="xl"
      >
        {selectedJob && (
          <div className="p-2">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-2">
                  {selectedJob.title}
                </h2>
                <p className="text-gray-500">{selectedJob.department}</p>
              </div>
              <div className="w-16 h-16 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-oryx-orange" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                {selectedJob.location}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                <Clock className="w-4 h-4 text-gray-500" />
                {selectedJob.type}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                <DollarSign className="w-4 h-4 text-gray-500" />
                {selectedJob.salary}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">About the Role</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-oryx-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-oryx-orange/10 text-oryx-orange px-4 py-2 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 mt-6 border-t border-gray-100">
              <Button 
                onClick={() => {
                  setFormData(prev => ({ ...prev, position: selectedJob.title }));
                  setIsApplying(true);
                }} 
                variant="primary" 
                icon={Send}
              >
                Apply Now
              </Button>
              <Button onClick={() => setSelectedJob(null)} variant="outline">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Application Form Modal */}
      <Modal
        isOpen={isApplying}
        onClose={() => {
          setIsApplying(false);
          if (!selectedJob) {
            setFormData(prev => ({ ...prev, position: '' }));
          }
        }}
        size="xl"
      >
        <div className="p-2">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-2">
            {selectedJob ? `Apply for ${selectedJob.title}` : 'General Application'}
          </h2>
          <p className="text-gray-500 mb-8">
            Fill out the form below and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                error={errors.fullName}
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
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                error={errors.position}
                required
                options={[
                  { value: '', label: 'Select position' },
                  ...jobs.map(job => ({ value: job.title, label: job.title })),
                  { value: 'General Application', label: 'General Application' }
                ]}
              />
            </div>

            <Select
              label="Years of Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              error={errors.experience}
              required
              options={[
                { value: '', label: 'Select experience level' },
                { value: '0-1', label: '0-1 years' },
                { value: '2-3', label: '2-3 years' },
                { value: '4-5', label: '4-5 years' },
                { value: '5+', label: '5+ years' }
              ]}
            />

            <Textarea
              label="Cover Letter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us about yourself and why you're interested in this role..."
              rows={5}
              error={errors.coverLetter}
              required
            />

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">
                Resume/CV (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-oryx-orange hover:bg-oryx-orange/5 transition-colors"
                >
                  <Upload className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-600">
                    {formData.resume ? formData.resume.name : 'Click to upload PDF, DOC, or DOCX'}
                  </span>
                </label>
              </div>
            </div>

            <Checkbox
              label="I agree to the processing of my personal data for recruitment purposes"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              error={errors.agreement}
            />

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                icon={Send}
                loading={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
              <Button 
                type="button"
                onClick={() => {
                  setIsApplying(false);
                  if (!selectedJob) {
                    setFormData(prev => ({ ...prev, position: '' }));
                  }
                }} 
                variant="outline" 
                size="lg"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Careers;
