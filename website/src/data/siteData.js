// Company Information
export const companyInfo = {
  name: "Oryx Steel Industries",
  tagline: "Crafting The Future",
  description: "Zimbabwe's premier supplier of high-quality chromadek roofing materials and precision-crafted steel door frames. We deliver excellence in every sheet, durability in every frame.",
  founded: 2015,
  employees: "50+",
  projectsCompleted: "2000+",
  location: {
    address: "133 Willowvale Road",
    city: "Harare",
    country: "Zimbabwe",
    coordinates: { lat: -17.8292, lng: 31.0522 }
  },
  contact: {
    phones: ["+263 787 319 564", "+263 710 581 772", "+263 785 791 778"],
    email: "sales@oryxsteel.co.zw",
    website: "oryxsteel.co.zw"
  },
  social: {
    tiktok: "https://tiktok.com/@%40oryxroofandsteel",
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  },
  workingHours: {
    weekdays: "7:00 AM - 5:00 PM",
    saturday: "8:00 AM - 1:00 PM",
    sunday: "Closed"
  }
};

// Products Data
export const products = [
  {
    id: "q-tiles",
    name: "Q-Tiles",
    category: "Roofing",
    description: "Premium quality Q-Tiles offering exceptional durability and aesthetic appeal. Perfect for residential and commercial roofing projects.",
    priceFrom: "$4.00/m",
    features: ["Weather Resistant", "Long-lasting Finish", "Multiple Colors", "Easy Installation"],
    image: "/p1.jpeg",
    popular: true
  },
  {
    id: "ibr-sheets",
    name: "IBR Sheets",
    category: "Roofing",
    description: "Industrial Box Rib (IBR) sheets designed for superior water drainage and structural integrity. Ideal for industrial and agricultural applications.",
    priceFrom: "$3.50/m",
    features: ["High Tensile Strength", "Corrosion Resistant", "Low Maintenance", "Cost Effective"],
    image: "/p2.jpg",
    popular: true
  },
  {
    id: "chromadek-sheets",
    name: "Chromadek Sheets",
    category: "Roofing",
    description: "Color-coated steel sheets with excellent corrosion resistance and vibrant colors that last for decades.",
    priceFrom: "$5.00/m",
    features: ["UV Resistant", "20+ Color Options", "Scratch Resistant", "Warranty Included"],
    image: "/p3.png",
    popular: true
  },
  {
    id: "steel-door-frames",
    name: "Steel Door Frames",
    category: "Door Frames",
    description: "Precision-engineered steel door frames built to exact specifications. Available in various sizes and finishes.",
    priceFrom: "$45.00",
    features: ["Custom Sizes", "Powder Coated", "High Security", "Professional Finish"],
    image: "/p4.webp",
    popular: true
  },
  {
    id: "window-frames",
    name: "Steel Window Frames",
    category: "Door Frames",
    description: "Durable steel window frames designed for longevity and security. Perfect for residential and commercial buildings.",
    priceFrom: "$35.00",
    features: ["Burglar Proof Options", "Various Styles", "Weather Sealed", "Durable Finish"],
    image: "/p5.webp",
    popular: false
  },
  {
    id: "laser-designs",
    name: "Laser Cut Designs",
    category: "Decorative",
    description: "Custom laser-cut decorative steel panels and gates. Transform your property with unique, artistic metalwork.",
    priceFrom: "Custom Quote",
    features: ["Custom Patterns", "Precision Cut", "Powder Coated", "Artistic Finish"],
    image: "/p6.jpg",
    popular: true
  },
  {
    id: "timber",
    name: "Quality Timber",
    category: "Building Materials",
    description: "Premium grade timber for construction and roofing applications. Sourced from sustainable forestry operations.",
    priceFrom: "Contact for Quote",
    features: ["Treated Wood", "Various Grades", "Bulk Available", "Delivery Options"],
    image: "/p7.jpg",
    popular: false
  },
  {
    id: "ridge-caps",
    name: "Ridge Caps",
    category: "Roofing Accessories",
    description: "Essential roofing accessories for a professional, weatherproof finish. Available to match all our roofing products.",
    priceFrom: "$2.50/m",
    features: ["Color Matched", "Easy Fit", "Leak Proof", "Durable"],
    image: "/p7.jpeg",
    popular: false
  }
];

// Services Data
export const services = [
  {
    id: "roofing-supply",
    title: "Roofing Materials Supply",
    description: "Complete range of premium roofing materials including Q-Tiles, IBR sheets, and Chromadek. We supply materials for projects of any scale.",
    icon: "Home",
    features: [
      "Premium Quality Materials",
      "Competitive Pricing",
      "Bulk Order Discounts",
      "Fast Delivery",
      "Technical Support"
    ]
  },
  {
    id: "door-frames",
    title: "Steel Door & Window Frames",
    description: "Custom-manufactured steel door and window frames built to your exact specifications with precision engineering.",
    icon: "DoorOpen",
    features: [
      "Custom Measurements",
      "Multiple Finish Options",
      "Security Features",
      "Professional Installation Support",
      "Warranty Included"
    ]
  },
  {
    id: "laser-cutting",
    title: "Laser Cutting Services",
    description: "State-of-the-art laser cutting for decorative panels, gates, signage, and custom metalwork projects.",
    icon: "Sparkles",
    features: [
      "Precision Cutting",
      "Custom Designs",
      "Multiple Materials",
      "Quick Turnaround",
      "Design Assistance"
    ]
  },
  {
    id: "consultation",
    title: "Technical Consultation",
    description: "Expert advice on material selection, quantity estimation, and project planning for construction professionals and homeowners.",
    icon: "MessageSquare",
    features: [
      "Free Site Visits",
      "Material Recommendations",
      "Cost Estimation",
      "Project Planning",
      "After-Sales Support"
    ]
  },
  {
    id: "bulk-supply",
    title: "Bulk & Trade Supply",
    description: "Specialized supply solutions for contractors, builders, and trade customers with preferential pricing and dedicated support.",
    icon: "Truck",
    features: [
      "Trade Accounts",
      "Volume Discounts",
      "Priority Delivery",
      "Credit Facilities",
      "Dedicated Account Manager"
    ]
  },
  {
    id: "delivery",
    title: "Nationwide Delivery",
    description: "Reliable delivery services across Zimbabwe. We ensure your materials arrive safely and on time, every time.",
    icon: "MapPin",
    features: [
      "National Coverage",
      "Tracked Deliveries",
      "Safe Handling",
      "Flexible Scheduling",
      "Installation Coordination"
    ]
  }
];

// Stats Data
export const stats = [
  { value: "2000+", label: "Projects Completed", icon: "CheckCircle" },
  { value: "50+", label: "Team Members", icon: "Users" },
  { value: "10+", label: "Years Experience", icon: "Award" },
  { value: "24/7", label: "Customer Support", icon: "Headphones" }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Tendai Moyo",
    role: "Property Developer",
    company: "Moyo Developments",
    content: "Oryx Steel Industries has been our go-to supplier for all roofing materials. Their Q-Tiles are exceptional quality and the pricing is very competitive. Highly recommended!",
    rating: 5,
    image: "/images/testimonials/client1.jpg"
  },
  {
    id: 2,
    name: "Sarah Mutasa",
    role: "Architect",
    company: "SM Architecture",
    content: "The laser-cut decorative panels from Oryx transformed our latest project. The precision and quality of their work is outstanding. A truly professional team.",
    rating: 5,
    image: "/images/testimonials/client2.jpg"
  },
  {
    id: 3,
    name: "Robert Chikwanha",
    role: "Construction Manager",
    company: "BuildRight Contractors",
    content: "We've worked with many suppliers, but Oryx stands out for their reliability and product quality. Their steel door frames are built to last.",
    rating: 5,
    image: "/images/testimonials/client3.jpg"
  },
  {
    id: 4,
    name: "Grace Makoni",
    role: "Homeowner",
    company: "",
    content: "Building my dream home was stressful, but Oryx made the roofing part easy. Great products, fair prices, and excellent customer service.",
    rating: 5,
    image: "/images/testimonials/client4.jpg"
  }
];

// Projects/Portfolio
export const projects = [
  {
    id: 1,
    title: "Riverside Commercial Complex",
    category: "Commercial",
    description: "Complete roofing solution for a 5-story commercial building in Harare CBD.",
    image: "/images/projects/project1.jpg",
    products: ["Chromadek Sheets", "Ridge Caps"],
    year: 2024
  },
  {
    id: 2,
    title: "Greendale Residential Estate",
    category: "Residential",
    description: "Supply of Q-Tiles and door frames for a 50-unit residential development.",
    image: "/images/projects/project2.jpg",
    products: ["Q-Tiles", "Steel Door Frames"],
    year: 2024
  },
  {
    id: 3,
    title: "Chitungwiza Industrial Park",
    category: "Industrial",
    description: "Large-scale IBR roofing installation for warehouse facilities.",
    image: "/images/projects/project3.jpg",
    products: ["IBR Sheets", "Timber"],
    year: 2023
  },
  {
    id: 4,
    title: "Borrowdale Private Residence",
    category: "Residential",
    description: "Premium roofing and custom laser-cut gates for a luxury home.",
    image: "/images/projects/project4.jpg",
    products: ["Q-Tiles", "Laser Designs"],
    year: 2024
  },
  {
    id: 5,
    title: "Southerton Shopping Centre",
    category: "Commercial",
    description: "Complete building materials supply for retail complex renovation.",
    image: "/images/projects/project5.jpg",
    products: ["Chromadek Sheets", "Steel Window Frames"],
    year: 2023
  },
  {
    id: 6,
    title: "Norton Agricultural Facility",
    category: "Agricultural",
    description: "Durable roofing solution for large agricultural storage facility.",
    image: "/images/projects/project6.jpg",
    products: ["IBR Sheets", "Ridge Caps"],
    year: 2023
  }
];

// Team Members
export const team = [
  {
    id: 1,
    name: "Joseph Nyamande",
    role: "Managing Director",
    bio: "With over 15 years in the steel industry, Joseph leads Oryx with a vision for excellence and innovation.",
    image: "/images/team/member1.jpg"
  },
  {
    id: 2,
    name: "Chenai Dziva",
    role: "Operations Manager",
    bio: "Chenai ensures smooth operations and maintains our high standards of quality and delivery.",
    image: "/images/team/member2.jpg"
  },
  {
    id: 3,
    name: "Tatenda Mukwashi",
    role: "Sales Director",
    bio: "Leading our sales team, Tatenda builds lasting relationships with clients across Zimbabwe.",
    image: "/images/team/member3.jpg"
  },
  {
    id: 4,
    name: "Rumbidzai Choto",
    role: "Technical Specialist",
    bio: "Rumbi provides expert technical guidance to ensure optimal product selection for every project.",
    image: "/images/team/member4.jpg"
  }
];

// Career Positions
export const careers = [
  {
    id: 1,
    title: "Sales Representative",
    department: "Sales",
    type: "Full-time",
    location: "Harare",
    description: "We're looking for an energetic sales professional to join our growing team and help expand our customer base.",
    requirements: [
      "2+ years sales experience",
      "Valid driver's license",
      "Excellent communication skills",
      "Knowledge of construction industry preferred"
    ],
    responsibilities: [
      "Develop new customer relationships",
      "Manage existing client accounts",
      "Meet monthly sales targets",
      "Provide product information and quotes"
    ]
  },
  {
    id: 2,
    title: "Laser Cutting Operator",
    department: "Production",
    type: "Full-time",
    location: "Harare",
    description: "Experienced operator needed for our laser cutting department to produce high-quality decorative metalwork.",
    requirements: [
      "Technical certification or equivalent experience",
      "Experience with CNC/laser cutting machines",
      "Attention to detail",
      "Ability to read technical drawings"
    ],
    responsibilities: [
      "Operate laser cutting equipment",
      "Maintain quality standards",
      "Perform routine maintenance",
      "Collaborate with design team"
    ]
  },
  {
    id: 3,
    title: "Delivery Driver",
    department: "Logistics",
    type: "Full-time",
    location: "Harare",
    description: "Reliable driver needed to ensure safe and timely delivery of materials to customers across the region.",
    requirements: [
      "Valid Class 2 driver's license",
      "Clean driving record",
      "Knowledge of Harare and surrounding areas",
      "Physical fitness for loading/unloading"
    ],
    responsibilities: [
      "Deliver materials to customer sites",
      "Ensure safe handling of products",
      "Complete delivery documentation",
      "Maintain vehicle cleanliness"
    ]
  },
  {
    id: 4,
    title: "Customer Service Representative",
    department: "Customer Service",
    type: "Full-time",
    location: "Harare",
    description: "Join our customer service team to provide exceptional support and assistance to our valued customers.",
    requirements: [
      "Excellent communication skills",
      "Computer literacy",
      "Customer service experience",
      "Problem-solving abilities"
    ],
    responsibilities: [
      "Handle customer inquiries",
      "Process orders and quotes",
      "Resolve customer complaints",
      "Maintain customer records"
    ]
  }
];

// FAQ Data
export const faqs = [
  {
    question: "What types of roofing materials do you supply?",
    answer: "We supply a comprehensive range of roofing materials including Q-Tiles, IBR sheets, Chromadek color-coated sheets, ridge caps, and all necessary roofing accessories. Our products are suitable for residential, commercial, industrial, and agricultural applications."
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we provide reliable delivery services across Zimbabwe. Our fleet ensures your materials arrive safely and on time. Delivery costs vary based on location and order size. Contact us for a delivery quote."
  },
  {
    question: "Can I get custom-sized door frames?",
    answer: "Absolutely! We specialize in custom-manufactured steel door and window frames. Provide us with your exact measurements, and we'll fabricate frames to your specifications. We also offer various finish options including powder coating."
  },
  {
    question: "What is the warranty on your products?",
    answer: "Our products come with manufacturer warranties that vary by product type. Chromadek sheets typically carry a 10-year warranty against manufacturing defects. Contact us for specific warranty information on individual products."
  },
  {
    question: "Do you offer bulk discounts for contractors?",
    answer: "Yes, we offer competitive trade pricing and bulk discounts for contractors, builders, and large projects. We also provide credit facilities for qualified trade customers. Contact our sales team to set up a trade account."
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Getting a quote is easy! You can call us directly, send an email to sales@oryxsteel.co.zw, or fill out our online contact form with your requirements. For accurate quotes, please provide project details, quantities needed, and delivery location."
  },
  {
    question: "What colors are available for Chromadek sheets?",
    answer: "We stock over 20 colors in our Chromadek range, including popular choices like charcoal, emerald green, maroon, sky blue, and many more. Custom colors can be ordered for larger projects. Visit our showroom to see the full color range."
  },
  {
    question: "Do you provide installation services?",
    answer: "While we primarily focus on material supply, we can recommend trusted installation contractors in your area. Our technical team can also provide guidance and support throughout your installation project."
  }
];

// Navigation Links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" }
];

// Color options for products
export const colorOptions = [
  { name: "Charcoal", hex: "#36454F" },
  { name: "Emerald Green", hex: "#50C878" },
  { name: "Maroon", hex: "#800000" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Brick Red", hex: "#CB4154" },
  { name: "Forest Green", hex: "#228B22" },
  { name: "Navy Blue", hex: "#000080" },
  { name: "Cream", hex: "#FFFDD0" },
  { name: "Brown", hex: "#8B4513" },
  { name: "White", hex: "#FFFFFF" }
];

// Combined export for convenience
export const siteData = {
  company: {
    name: companyInfo.name,
    tagline: companyInfo.tagline,
    description: companyInfo.description,
    address: `${companyInfo.location.address}, ${companyInfo.location.city}, ${companyInfo.location.country}`,
    phone: companyInfo.contact.phones,
    email: companyInfo.contact.email,
    website: companyInfo.contact.website,
    social: companyInfo.social,
    workingHours: companyInfo.workingHours
  },
  products,
  services,
  stats,
  testimonials,
  projects,
  team,
  careers,
  faqs,
  navigation,
  colorOptions
};
