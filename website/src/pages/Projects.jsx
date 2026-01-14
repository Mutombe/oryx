import React from 'react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Filter,
  Grid3X3,
  LayoutList,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Building2,
  Home as HomeIcon,
  Factory,
  Building,
  Phone,
  Ruler,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { Section, SectionHeader } from '../components/ui';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { useSEO } from '../utils/seo';
import { staggerContainer, staggerItem, fadeInUp, scaleIn } from '../utils/animations';
import { companyInfo } from '../data/siteData';
import { LiaAwardSolid } from "react-icons/lia";

const Projects = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useSEO({
    title: 'Our Projects | Oryx Steel Industries',
    description: 'View our portfolio of completed roofing and steel fabrication projects across Zimbabwe. From residential to commercial, see our quality craftsmanship.',
    keywords: 'roofing projects Zimbabwe, steel fabrication portfolio, construction projects Harare'
  });

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'residential',
      location: 'Borrowdale, Harare',
      date: 'December 2024',
      description: 'Complete roofing solution for a high-end residential complex featuring premium Q-Tiles in charcoal finish. The project included custom ridge caps and valley trays.',
      products: ['Q-Tiles', 'Ridge Caps', 'Valley Trays'],
      area: '2,500 m²',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Industrial Warehouse',
      category: 'industrial',
      location: 'Graniteside, Harare',
      date: 'November 2024',
      description: 'Large-scale IBR roofing installation for a modern warehouse facility. Included custom guttering and downpipes.',
      products: ['IBR Sheets', 'Guttering', 'Downpipes'],
      area: '8,000 m²',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Shopping Mall Extension',
      category: 'commercial',
      location: 'Westgate, Harare',
      date: 'October 2024',
      description: 'Chromadek roofing and steel door frames for a major shopping mall extension. Multiple color combinations to match brand requirements.',
      products: ['Chromadek', 'Steel Door Frames', 'Window Frames'],
      area: '3,200 m²',
      image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1567449303078-57ad995bd329?auto=format&fit=crop&w=800&q=80'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Modern Family Home',
      category: 'residential',
      location: 'Mt Pleasant, Harare',
      date: 'September 2024',
      description: 'Beautiful charcoal Q-Tile roof for a contemporary family home, complete with decorative laser-cut fascia boards.',
      products: ['Q-Tiles', 'Laser Cut Fascia', 'Guttering'],
      area: '450 m²',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Church Building Project',
      category: 'institutional',
      location: 'Chitungwiza',
      date: 'August 2024',
      description: 'Complete roofing solution for a new church building, featuring a distinctive blue Chromadek roof with white trim.',
      products: ['Chromadek Sheets', 'Ridge Caps', 'Door Frames'],
      area: '1,800 m²',
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Hotel Renovation',
      category: 'commercial',
      location: 'Victoria Falls',
      date: 'July 2024',
      description: 'Major roof replacement project for a tourist hotel, using premium materials to withstand the harsh climate.',
      products: ['IBR Sheets', 'Chromadek', 'Steel Frames'],
      area: '4,500 m²',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      ],
      featured: true
    },
    {
      id: 7,
      title: 'School Complex',
      category: 'institutional',
      location: 'Bulawayo',
      date: 'June 2024',
      description: 'Multiple classroom blocks with IBR roofing and custom steel window frames. Designed for durability and low maintenance.',
      products: ['IBR Sheets', 'Window Frames', 'Door Frames'],
      area: '6,000 m²',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
      ],
      featured: false
    },
    {
      id: 8,
      title: 'Agricultural Processing Plant',
      category: 'industrial',
      location: 'Mazowe',
      date: 'May 2024',
      description: 'Extensive roofing project for a new agricultural processing facility with specialized ventilation systems.',
      products: ['IBR Sheets', 'Ventilators', 'Guttering'],
      area: '12,000 m²',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
      ],
      featured: false
    },
    {
      id: 9,
      title: 'Luxury Estate Gates',
      category: 'residential',
      location: 'Highlands, Harare',
      date: 'April 2024',
      description: 'Custom laser-cut entrance gates and security fencing for an upscale residential estate.',
      products: ['Laser Cut Gates', 'Security Fencing'],
      area: 'Custom',
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80'
      ],
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Grid3X3 },
    { id: 'residential', label: 'Residential', icon: HomeIcon },
    { id: 'commercial', label: 'Commercial', icon: Building },
    { id: 'industrial', label: 'Industrial', icon: Factory },
    { id: 'institutional', label: 'Institutional', icon: Building2 }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.products.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group cursor-pointer ${viewMode === 'list' ? 'flex flex-col sm:flex-row gap-4 sm:gap-6 items-start' : ''}`}
      onClick={() => setSelectedProject(project)}
    >
      <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl ${
        viewMode === 'list' ? 'w-full sm:w-64 h-48 sm:h-44 flex-shrink-0' : 'aspect-[4/3]'
      } ${project.featured ? 'ring-2 ring-oryx-orange' : ''}`}>
        {/* Real Image */}
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-oryx-orange text-white text-xs font-bold px-2.5 py-1 sm:px-3 rounded-full">
            Featured
          </div>
        )}
        
        {/* Zoom Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-oryx-orange flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
            <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
        
        {/* Category Tag */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 sm:px-3 rounded-full capitalize">
            {project.category}
          </span>
        </div>
      </div>

      <div className={viewMode === 'list' ? 'flex-1 py-1 sm:py-2' : 'mt-3 sm:mt-4'}>
        <h3 className={`font-display font-bold text-navy-900 group-hover:text-oryx-orange transition-colors ${
          viewMode === 'list' ? 'text-lg sm:text-xl mb-1 sm:mb-2' : 'text-base sm:text-lg mb-1 sm:mb-2'
        }`}>
          {project.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {project.date}
          </span>
        </div>

        {viewMode === 'list' && (
          <p className="text-gray-600 line-clamp-2 mb-2 sm:mb-3 text-sm sm:text-base hidden sm:block">{project.description}</p>
        )}

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.products.slice(0, 3).map((product, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded">
              {product}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={<>Our <span className="text-oryx-orange">Portfolio</span></>}
        subtitle="Explore our completed projects across Zimbabwe, showcasing quality craftsmanship and attention to detail"
        breadcrumbs={[{ label: 'Projects' }]}
        height="default"
      />

      {/* Stats Bar with Background Image */}
      <Section background="navy" className="py-8 sm:py-12 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/90" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: '500+', label: 'Projects Completed', icon: CheckCircle },
              { value: '10+', label: 'Years Experience', icon: LiaAwardSolid },
              { value: '98%', label: 'Client Satisfaction', icon: Users },
              { value: '50,000+', label: 'Square Meters Roofed', icon: Ruler }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-xl bg-oryx-orange/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-oryx-orange" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects Showcase */}
      <Section background="light" className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <SectionHeader
            tag="Featured Work"
            title="Our Best"
            titleHighlight="Projects"
            description="Showcasing our finest roofing and steel fabrication work across Zimbabwe"
            centered
          />

          <div className="mt-8 sm:mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                      <span className="inline-block w-fit bg-oryx-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3 capitalize">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white mb-1 sm:mb-2 group-hover:text-oryx-orange transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {project.area}
                        </span>
                      </div>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Gallery */}
      <Section background="white" className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <SectionHeader
            tag="All Projects"
            title="Browse Our"
            titleHighlight="Portfolio"
            description="Filter and explore all our completed projects"
            centered
          />

          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mt-8 sm:mt-12 mb-6 sm:mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                      activeFilter === filter.id
                        ? 'bg-navy-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{filter.label}</span>
                    <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Search and View Toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 pr-4 py-2 w-full sm:w-48 md:w-64 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-oryx-orange/20 focus:border-oryx-orange"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  <LayoutList className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-500 text-sm sm:text-base">
              Showing <span className="font-semibold text-navy-900">{filteredProjects.length}</span> projects
              {activeFilter !== 'all' && (
                <span> in <span className="capitalize font-semibold text-oryx-orange">{activeFilter}</span></span>
              )}
            </p>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
                  : 'space-y-4 sm:space-y-6'
                }
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 sm:py-16"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">No projects found</h3>
                <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">Try adjusting your search or filter criteria</p>
                <Button onClick={() => { setActiveFilter('all'); setSearchQuery(''); }} variant="outline">
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Testimonial Section with Background */}
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full bg-oryx-orange/20 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-oryx-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed italic">
                "Oryx Steel Industries transformed our vision into reality. Their attention to detail, quality materials, 
                and professional service made our project a resounding success. We highly recommend them for any 
                roofing or steel fabrication needs."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">James Moyo</p>
                  <p className="text-gray-400 text-sm">Property Developer, Harare</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section with Background */}
      <Section background="gradient" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
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
              Let's discuss your roofing or steel fabrication needs. Our team is ready to help make your project a success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button to="/contact" variant="white" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                Get a Free Quote
              </Button>
              <Button to="/products" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                View Products
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        size="xl"
      >
        {selectedProject && (
          <div className="p-1 sm:p-2">
            {/* Project Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 sm:mb-6">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="bg-oryx-orange text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full capitalize">
                  {selectedProject.category}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Ruler className="w-4 h-4" />
                      <span className="text-sm">{selectedProject.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-2 sm:mb-4">
                  {selectedProject.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.date}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Products Used */}
              <div>
                <h3 className="font-semibold text-navy-900 mb-2 sm:mb-3 text-sm sm:text-base">Products Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.products.map((product, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                <Button to="/contact" variant="primary" leftIcon={<Phone className="w-5 h-5" />}>
                  Start Similar Project
                </Button>
                <Button to="/products" variant="outline">
                  View Products
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Projects;