import React from 'react';
import { useEffect } from 'react';

const defaultSEO = {
  siteName: 'Oryx Steel Industries',
  defaultTitle: 'Oryx Steel Industries | Premium Roofing Materials & Steel Door Frames Zimbabwe',
  defaultDescription: 'Zimbabwe\'s leading supplier of high-quality chromadek roofing materials, Q-Tiles, IBR sheets, and precision-crafted steel door frames. Quality you can trust, durability you can count on.',
  defaultKeywords: 'roofing materials Zimbabwe, chromadek sheets Harare, steel door frames, Q-Tiles Zimbabwe, IBR sheets, roofing supplier Zimbabwe, Oryx Steel Industries, construction materials Harare',
  siteUrl: 'https://oryxsteel.co.zw',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@OryxSteel',
  locale: 'en_ZW'
};

export const useSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noIndex = false
}) => {
  useEffect(() => {
    // Update title
    const fullTitle = title 
      ? `${title} | ${defaultSEO.siteName}`
      : defaultSEO.defaultTitle;
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', description || defaultSEO.defaultDescription);
    updateMeta('keywords', keywords || defaultSEO.defaultKeywords);
    
    if (noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
    }

    // Open Graph tags
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description || defaultSEO.defaultDescription, true);
    updateMeta('og:type', type, true);
    updateMeta('og:url', url || defaultSEO.siteUrl, true);
    updateMeta('og:image', image || defaultSEO.defaultImage, true);
    updateMeta('og:site_name', defaultSEO.siteName, true);
    updateMeta('og:locale', defaultSEO.locale, true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:site', defaultSEO.twitterHandle);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description || defaultSEO.defaultDescription);
    updateMeta('twitter:image', image || defaultSEO.defaultImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url || window.location.href);

    // Cleanup function
    return () => {
      // Reset to defaults when component unmounts if needed
    };
  }, [title, description, keywords, image, url, type, noIndex]);
};

// JSON-LD Schema generators
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oryx Steel Industries',
  url: 'https://oryxsteel.co.zw',
  logo: 'https://oryxsteel.co.zw/logo.png',
  description: 'Zimbabwe\'s premier supplier of chromadek roofing materials and steel door frames.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '133 Willowvale Road',
    addressLocality: 'Harare',
    addressCountry: 'ZW'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+263-787-319-564',
    contactType: 'sales',
    email: 'sales@oryxsteel.co.zw',
    availableLanguage: ['English', 'Shona']
  },
  sameAs: [
    'https://tiktok.com/@%40oryxroofandsteel'
  ]
});

export const generateProductSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    '@type': 'Brand',
    name: 'Oryx Steel Industries'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: product.priceFrom?.replace(/[^0-9.]/g, '') || '0',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Oryx Steel Industries'
    }
  }
});

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://oryxsteel.co.zw',
  name: 'Oryx Steel Industries',
  image: 'https://oryxsteel.co.zw/logo.png',
  description: 'Premium chromadek roofing materials and steel door frames supplier in Zimbabwe.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '133 Willowvale Road',
    addressLocality: 'Harare',
    addressCountry: 'ZW'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -17.8292,
    longitude: 31.0522
  },
  telephone: '+263-787-319-564',
  email: 'sales@oryxsteel.co.zw',
  url: 'https://oryxsteel.co.zw',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00'
    }
  ],
  priceRange: '$$'
});

export const generateBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateJobPostingSchema = (job) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title,
  description: job.description,
  employmentType: job.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Oryx Steel Industries',
    sameAs: 'https://oryxsteel.co.zw'
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: job.location,
      addressCountry: 'ZW'
    }
  }
});

// Schema Script Component
export const SchemaScript = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default useSEO;
