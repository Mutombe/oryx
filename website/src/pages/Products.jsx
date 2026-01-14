import React from 'react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid3X3, List, ChevronDown, Check,
  Home, DoorOpen, Sparkles, Package, X, ArrowRight, Star
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { Section, SectionHeader, ProductCard, Button, Card } from '../components/ui';
import { useSEO, generateProductSchema } from '../utils/seo';
import { staggerContainer, staggerItem } from '../utils/animations';
import { products, colorOptions } from '../data/siteData';
import { GiLaserPrecision } from "react-icons/gi";

// Get unique categories
const categories = ['All', ...new Set(products.map(p => p.category))];

// Category icons
const categoryIcons = {
  'All': Package,
  'Roofing': Home,
  'Door Frames': DoorOpen,
  'Decorative': Sparkles,
  'Building Materials': Package,
  'Roofing Accessories': Package
};

// Filter Section Component
const FilterSection = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  viewMode,
  setViewMode 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-oryx-orange/20 focus:border-oryx-orange transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
            >
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{selectedCategory}</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20"
                >
                  {categories.map((category) => {
                    const Icon = categoryIcons[category] || Package;
                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                          selectedCategory === category ? 'text-oryx-orange bg-oryx-orange/5' : 'text-gray-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{category}</span>
                        {selectedCategory === category && (
                          <Check className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-white shadow text-oryx-orange' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-white shadow text-oryx-orange' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills - Mobile */}
      <div className="flex flex-wrap gap-2 mt-4 lg:hidden">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-oryx-orange text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// 8 unique color themes for list view items (matching ProductCard themes)
const listItemThemes = [
  { accent: 'border-l-teal-500', badge: 'bg-teal-500', text: 'text-teal-600' },
  { accent: 'border-l-amber-500', badge: 'bg-amber-500', text: 'text-amber-600' },
  { accent: 'border-l-slate-500', badge: 'bg-slate-500', text: 'text-slate-600' },
  { accent: 'border-l-emerald-500', badge: 'bg-emerald-500', text: 'text-emerald-600' },
  { accent: 'border-l-rose-500', badge: 'bg-rose-500', text: 'text-rose-600' },
  { accent: 'border-l-indigo-500', badge: 'bg-indigo-500', text: 'text-indigo-600' },
  { accent: 'border-l-orange-500', badge: 'bg-orange-500', text: 'text-orange-600' },
  { accent: 'border-l-violet-500', badge: 'bg-violet-500', text: 'text-violet-600' },
];

// Product List Item (for list view) - Updated with color themes
const ProductListItem = ({ product, index = 0 }) => {
  const theme = listItemThemes[index % listItemThemes.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ x: 4 }}
      className={`bg-white rounded-xl border border-gray-100 border-l-4 ${theme.accent} hover:shadow-lg transition-all duration-300 overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-48 h-40 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <Package className="w-12 h-12 text-gray-400 absolute" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.popular && (
                  <span className="px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-600 text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500" />
                    Popular
                  </span>
                )}
                <span className={`px-2 py-0.5 rounded-full ${theme.badge} text-white text-xs font-medium`}>
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <span 
                    key={idx}
                    className={`inline-flex items-center gap-1 text-sm ${theme.text}`}
                  >
                    <Check className="w-4 h-4" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Starting from</p>
              <p className={`text-2xl font-display font-bold ${theme.text} mb-4`}>
                {product.priceFrom}
              </p>
              <Button to="/contact" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Product Grid - Updated to pass index
const ProductGrid = ({ products, viewMode }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={viewMode === 'grid' 
        ? 'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        : 'space-y-4'
      }
    >
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          viewMode === 'grid' ? (
            <motion.div key={product.id} variants={staggerItem} layout>
              {/* Pass index for unique color themes */}
              <ProductCard product={product} index={index} />
            </motion.div>
          ) : (
            <ProductListItem key={product.id} product={product} index={index} />
          )
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

// Color Palette Section
const ColorPaletteSection = () => {
  return (
    <Section background="navy" className="py-24">
      <div className="container-custom">
        <SectionHeader
          tag="Color Options"
          title="Choose Your"
          titleHighlight="Perfect Color"
          description="Our chromadek sheets are available in over 20 stunning colors to match any architectural style."
          centered
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {colorOptions.map((color, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group cursor-pointer"
            >
              <div 
                className="w-16 h-16 rounded-2xl shadow-lg border-2 border-white/20 group-hover:border-white/50 transition-all"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-center text-white/80 text-sm mt-2 group-hover:text-white transition-colors">
                {color.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/60 mt-8"
        >
          Custom colors available for bulk orders. Contact us for details.
        </motion.p>
      </div>
    </Section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <Section background="light" className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-oryx-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <h2 className="heading-lg text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our technical team is ready to help you select the perfect products 
              for your project. Get expert advice and a personalized quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Request Consultation
              </Button>
              <Button to="/services" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                View Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// Main Products Page
const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // SEO
  useSEO({
    title: 'Products | Premium Roofing Materials & Steel Products - Oryx Steel Industries',
    description: 'Browse our comprehensive range of Q-Tiles, IBR sheets, Chromadek, steel door frames, window frames, and laser-cut decorative metalwork.',
    keywords: 'Q-Tiles Zimbabwe, IBR sheets, Chromadek sheets, steel door frames, window frames, roofing materials Harare'
  });

  return (
    <>
      {/* Schema.org structured data for products */}
      {products.map(product => (
        <script key={product.id} type="application/ld+json">
          {JSON.stringify(generateProductSchema(product))}
        </script>
      ))}

      <PageHero
        title="Our Products"
        subtitle="Premium roofing materials and steel products built to last. Quality you can trust for every project."
        breadcrumbs={[{ label: 'Products' }]}
        height="small"
      />

      <Section background="white" className="py-12">
        <div className="container-custom">
          <FilterSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-navy-900">{filteredProducts.length}</span> products
              {selectedCategory !== 'All' && (
                <span> in <span className="text-oryx-orange">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          <ProductGrid products={filteredProducts} viewMode={viewMode} />
        </div>
      </Section>

      <ColorPaletteSection />
      <CTASection />
    </>
  );
};

export default Products;