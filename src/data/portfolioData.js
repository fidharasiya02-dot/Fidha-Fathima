/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Everything on this website is driven by this single data file!
 * To personalize this portfolio:
 * 1. Change your name, college, email, and social links in "personal" and "socials"
 * 2. Replace the portrait image URL in "personal.portraitImage"
 * 3. Update or add projects in the "projects" array
 * 4. Adjust education/timeline in "timeline"
 * =========================================================================
 */

export const portfolioData = {
  // --- Personal Information ---
  personal: {
    name: "Fidha",
    fullName: "Fidha Fathima",
    college: "Thejus Engineering College",
    degree: "B.Tech in Computer Science & Engineering",
    batch: "Class of 2026",
    location: "Thrissur, Kerala, India",
    email: "fidhafathima@gmail.com",
    phone: "+91 98765 43210",
    statusBadge: "Available for Internships & Projects",
    
    // Quick roles for animated headlines
    roles: ["Creative Developer", "Engineering Student", "Editorial Designer", "UI/UX Craftsman"],
    
    // Short bio for Hero & quick intros
    bioShort:
      "Engineering student at Thejus Engineering College crafting high-impact digital experiences at the intersection of bold editorial design, interactive code, and modern software engineering.",
    
    // Detailed bio for About Section
    bioLong:
      "I am an engineering student at Thejus Engineering College with an obsessive passion for typography, editorial aesthetics, and high-performance creative web development. I believe engineering is the bridge that transforms daring graphic artistry into living, responsive digital realities. My work balances razor-sharp code with bold editorial sensibility.",

    // Portrait image path (place your photo in public/portrait.png or pass an external URL)
    // We provide a high quality editorial portrait placeholder matching the reference design!
    portraitImage: "/portrait-fidha.png",
    
    resumeUrl: "#contact", // or link to a PDF in /public/resume.pdf
  },

  // --- Monogram & Brand Elements ---
  brand: {
    monogramLetter: "F",
    monogramSubtext: "FIDHA",
    badgeText: "NEW", // The vibrant badge in the top-left from the reference design
    badgeYear: "VOL. 2025",
    heroBigHeadline: "FIDHA", // Giant letters behind the portrait
    heroScriptWord: "Developer", // Curved script font overlapping the portrait
    marqueeText: "FIDHA • THEJUS ENGINEERING COLLEGE • CREATIVE DEVELOPER • EDITORIAL UI/UX • BOLD TYPOGRAPHY • FULLSTACK ENGINEERING • ",
  },

  // --- Social Links ---
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/fidhafathima",
      handle: "fidhafathima",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fidhafathima",
      handle: "in/fidhafathima",
      icon: "Linkedin",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fidhafathima",
      handle: "@fidhafathima",
      icon: "Instagram",
    },
    {
      name: "Behance",
      url: "https://behance.net/fidhafathima",
      handle: "fidhafathima",
      icon: "Palette",
    },
  ],

  // --- Key Statistics ---
  stats: [
    { label: "Completed Projects", value: 16, suffix: "+" },
    { label: "Code Commits", value: 420, suffix: "+" },
    { label: "Engineering CGPA", value: 8.9, suffix: "/10" },
    { label: "Design Iterations", value: 95, suffix: "%" },
  ],

  // --- Skills & Technologies ---
  skills: {
    engineering: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Object Oriented Programming (Java/C++)", level: 88 },
      { name: "Database Management (SQL & NoSQL)", level: 85 },
      { name: "Web Application Architecture", level: 92 },
      { name: "RESTful API Integration", level: 90 },
    ],
    creativeTech: [
      { name: "React.js / Next.js", level: 94 },
      { name: "Tailwind CSS & Modern CSS", level: 96 },
      { name: "Framer Motion & Micro-interactions", level: 92 },
      { name: "GSAP & ScrollTrigger Animations", level: 86 },
      { name: "Interactive Canvas & UI Physics", level: 80 },
    ],
    designEditorial: [
      { name: "Editorial Layout & Swiss Design", level: 95 },
      { name: "Figma UI/UX & Prototyping", level: 94 },
      { name: "Typography & Hierarchies", level: 96 },
      { name: "Brand Identity & Monogram Craft", level: 88 },
      { name: "Adobe Photoshop & Illustrator", level: 82 },
    ],
    technologiesList: [
      "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS",
      "Node.js", "GSAP", "Framer Motion", "Lenis Scroll", "Figma", "Git",
      "Python", "Java", "C++", "PostgreSQL", "MongoDB", "Vite"
    ]
  },

  // --- Featured Projects ---
  projects: [
    {
      id: "thejus-connect",
      title: "Thejus Connect — Smart Campus Portal",
      subtitle: "Full-Stack Web App & Campus Experience System",
      category: "Engineering & Web Dev",
      year: "2025",
      client: "Thejus Engineering College Project",
      coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      description:
        "A centralized portal designed specifically for Thejus Engineering College students and faculty to track academic schedules, laboratory allotments, event registrations, and departmental notices with instant notifications.",
      tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion"],
      liveUrl: "https://example.com/thejus-connect",
      githubUrl: "https://github.com/fidhafathima/thejus-connect",
      highlights: [
        "Real-time event notification engine with low latency",
        "Role-based access control for students, staff, and club coordinators",
        "Accessible, high-contrast editorial UI matching campus brand identity",
      ],
      role: "Lead Frontend Engineer & UI Architect",
    },
    {
      id: "vogue-typography",
      title: "Atelier Noir — Editorial Typographic Engine",
      subtitle: "Interactive Graphic Design Gallery",
      category: "Creative Development",
      year: "2024",
      client: "Editorial Exhibition",
      coverImage: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=1200&q=80",
      description:
        "An experimental web showcase exploring massive condensed headline typography, kinetic text warping, and magazine-style multi-column editorial layouts inspired by Swiss modernist graphic design.",
      tags: ["GSAP", "ScrollTrigger", "Lenis", "Tailwind CSS", "Creative Coding"],
      liveUrl: "https://example.com/atelier-noir",
      githubUrl: "https://github.com/fidhafathima/atelier-noir",
      highlights: [
        "Sub-millisecond smooth scroll synchronization via Lenis",
        "Staggered split-text animations with GPU acceleration",
        "Dynamic sound synthesis on text hover interactions",
      ],
      role: "Designer & Creative Developer",
    },
    {
      id: "pulse-health-ai",
      title: "PulseGuard — Biomedical Signal Monitor",
      subtitle: "IoT & Data Visualization Dashboard",
      category: "Engineering & IoT",
      year: "2024",
      client: "College Engineering Capstone",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      description:
        "A biomedical signal visualizer and alert system built with IoT sensor inputs to monitor vital signs in real-time, predicting cardiac anomalies with a lightweight machine learning model.",
      tags: ["Python", "React", "Chart.js", "Tailwind CSS", "IoT Sensors"],
      liveUrl: "https://example.com/pulseguard",
      githubUrl: "https://github.com/fidhafathima/pulseguard",
      highlights: [
        "Live telemetry streaming at 60fps waveform rendering",
        "Automated emergency alert routing to medical authorities",
        "Ultra-lightweight responsive dashboard optimized for low-bandwidth setups",
      ],
      role: "Hardware-Software Interface & Frontend Lead",
    },
    {
      id: "zenith-brand-system",
      title: "Zenith — Architectural Brand Identity",
      subtitle: "Identity, Monogram Design & Design System",
      category: "Graphic Design & Branding",
      year: "2024",
      client: "Zenith Design Collective",
      coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Complete brand overhaul including custom serif and condensed monograms, print collateral, packaging templates, and an interactive Figma component library with dark/light design tokens.",
      tags: ["Figma", "Illustrator", "Brand Identity", "Editorial", "Typography"],
      liveUrl: "https://example.com/zenith",
      githubUrl: "https://github.com/fidhafathima/zenith-brand",
      highlights: [
        "Hand-crafted custom ligature monogram system",
        "200+ modular component tokens ready for code export",
        "Print specifications formatted for risograph & screen printing",
      ],
      role: "Brand Strategist & Art Director",
    },
    {
      id: "lumen-finance",
      title: "Lumen — Micro-Investment Analytics",
      subtitle: "Fintech Dashboard with Kinetic Micro-interactions",
      category: "Fintech & Web App",
      year: "2023",
      client: "Fintech Hackathon Winner",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description:
        "An intuitive micro-investing platform tailored for college students to track personal spending, automate micro-savings, and simulate portfolio growth in real time.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/lumen-finance",
      githubUrl: "https://github.com/fidhafathima/lumen-finance",
      highlights: [
        "1st Place Winner at Inter-College Hackathon 2023",
        "Interactive compound interest calculator with dynamic drag sliders",
        "Zero-latency state management with optimistic UI updates",
      ],
      role: "Full-Stack Developer",
    },
  ],

  // --- Services / What I Do ---
  services: [
    {
      number: "01",
      title: "Creative Frontend Development",
      description:
        "Building blazing-fast web applications with React, Next.js, and Tailwind CSS. Specializing in silky GSAP & Framer Motion animations, 60fps interactions, and responsive layouts.",
      deliverables: ["Single Page Apps", "Interactive Portfolios", "Complex Animations", "Next.js / Vite Applications"],
    },
    {
      number: "02",
      title: "Editorial & UI/UX Design",
      description:
        "Infusing modern digital products with bold Swiss editorial aesthetics, typographic rigor, balanced white space, and obsessive attention to hierarchy and visual rhythm.",
      deliverables: ["Figma Design Systems", "High-fidelity Prototypes", "Editorial Web Layouts", "User Journey Maps"],
    },
    {
      number: "03",
      title: "Engineering & Web Architecture",
      description:
        "Writing clean, modular, and maintainable code adhering to software engineering principles. Robust database modeling, REST API integrations, and performance optimization.",
      deliverables: ["System Design", "API Integrations", "Database Architecture", "Performance & SEO Tuning"],
    },
    {
      number: "04",
      title: "Brand Identity & Monograms",
      description:
        "Crafting memorable visual identities, bespoke monogram emblems, print collateral, and coherent design guidelines that stand out from mundane corporate templates.",
      deliverables: ["Monograms & Badges", "Typography Pairings", "Brand Guidelines", "Design Tokens"],
    },
  ],

  // --- Education & Experience Timeline ---
  timeline: [
    {
      year: "2022 — Present",
      role: "B.Tech in Computer Science & Engineering",
      institution: "Thejus Engineering College",
      location: "Vellarakkad, Thrissur, Kerala",
      type: "education",
      description:
        "Pursuing undergraduate degree in engineering. Active member of technical clubs, IEEE student branch, and coordinator for college design & tech symposiums. Focus on web engineering, algorithm analysis, and software systems.",
      tags: ["Data Structures", "Web Technologies", "DBMS", "Software Eng."],
    },
    {
      year: "2024",
      role: "Frontend & UI Engineering Intern",
      institution: "Digital Craft Studio",
      location: "Remote / Kochi",
      type: "experience",
      description:
        "Engineered responsive UI modules using React and Tailwind CSS. Collaborated with senior product designers to translate Figma design systems into reusable accessible web components.",
      tags: ["React", "Tailwind CSS", "Figma-to-Code", "Git Workflow"],
    },
    {
      year: "2023 — 2024",
      role: "Lead Designer & Web Coordinator",
      institution: "Thejus Tech Fest / Coding Club",
      location: "Thejus Engineering College",
      type: "leadership",
      description:
        "Spearheaded the visual identity, website, promotional posters, and social campaign assets for the annual inter-college engineering symposium, engaging 1,200+ attendees.",
      tags: ["Event Website", "Poster Design", "Team Leadership"],
    },
    {
      year: "2020 — 2022",
      role: "Higher Secondary Education (Computer Science)",
      institution: "Higher Secondary Board",
      location: "Kerala, India",
      type: "education",
      description:
        "Graduated with distinction with foundational coursework in Physics, Mathematics, and Computer Science programming in C++ and Python.",
      tags: ["Academic Distinction", "C++ Programming"],
    },
  ],

  // --- Articles / Blog Posts ---
  articles: [
    {
      id: "editorial-web-design-2025",
      title: "Why Editorial Design is Taking Over Modern Web Development",
      date: "February 2025",
      readTime: "4 min read",
      category: "Design Theory",
      excerpt:
        "Moving beyond generic SaaS glassmorphism toward bold Swiss typographic grids, high contrast, and tactile magazine aesthetics in modern digital interfaces.",
      link: "#",
    },
    {
      id: "smooth-scrolling-lenis-gsap",
      title: "Crafting Butter-Smooth Scroll Experiences with Lenis & GSAP",
      date: "January 2025",
      readTime: "6 min read",
      category: "Engineering & Animation",
      excerpt:
        "A practical engineering guide to integrating Lenis virtual scroll with GSAP ScrollTrigger without degrading mobile responsiveness or accessibility.",
      link: "#",
    },
    {
      id: "engineering-student-design-edge",
      title: "The Unfair Advantage of Being a Designer Who Codes",
      date: "November 2024",
      readTime: "5 min read",
      category: "Career & Engineering",
      excerpt:
        "Reflections from my engineering journey at Thejus: how understanding algorithms makes you a sharper designer, and how design intuition makes you a better engineer.",
      link: "#",
    },
  ],

  // --- Contact Information ---
  contact: {
    headline: "LET'S BUILD SOMETHING EXTRAORDINARY",
    subheadline:
      "Whether you have a thrilling internship opportunity, a freelance project, or just want to chat about engineering and typography — my inbox is always open.",
    directEmail: "fidhafathima@gmail.com",
    address: "Thejus Engineering College, Vellarakkad, Thrissur, Kerala - 680584",
    officeHours: "Monday — Saturday: 9:00 AM - 6:00 PM IST",
    responseTime: "Typically responds within 24 hours",
  },
};

