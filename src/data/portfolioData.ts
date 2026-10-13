import { Project, SkillCategory, Certificate, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Tanu Vishwakarma',
  shortName: 'Tanu Vishwakarma',
  initials: 'TKV',
  role: 'Junior Full-Stack Developer',
  location: 'India',
  email: 'tanu63867@gmail.com',
  secondaryEmail: 'vishwakarmatanu6@gmail.com',
  phone: '+91 97495 59370',
  whatsappUrl: 'https://wa.me/919749559370?text=Hi%20Tanu%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21',
  github: 'https://github.com/tnuislostq',
  githubUsername: 'tnuislostq',
  linkedin: 'https://www.linkedin.com/in/tanuvishwakarma',
  resumeUrl: 'https://tnuislostq.github.io/assets/resume/resume.pdf',
  liveSiteUrl: 'https://tnuislostq.github.io/',
  availableForHire: true,
  statusText: 'Full-Stack Developer · React, Next.js & Python',
  bio: 'I pair Next.js and React front ends with robust Python back ends (Django, FastAPI, Flask) and deploy them to real production URLs — not just git repositories. With 10+ self-driven projects live and working from database schema to cloud deploy, plus AWS Cloud Practitioner certification, I focus on shipping maintainable, user-centric software.',
  aboutDetailed: [
    'I am a Junior Full-Stack Developer passionate about architecting end-to-end web experiences that solve real-world problems.',
    'Unlike projects that live only on localhost, each of my builds is deployed live on platforms like Render, Netlify, and AWS, with real API integrations (WebSockets, WhatsApp Business API, Generative AI models, and PostgreSQL).',
    'Certified in AWS Cloud Practitioner and Full Stack Development, I constantly stay curious, practicing clean code architecture, database optimization, and intuitive frontend interactions.'
  ],
  photos: [
    'https://tnuislostq.github.io/assets/photos/slide-2.jpg',
    'https://tnuislostq.github.io/assets/photos/slide-3.jpg'
  ],
  stats: [
    { label: 'Live Projects', value: '10+', desc: 'Deployed & tested end-to-end' },
    { label: 'Certifications', value: '6', desc: 'AWS & GeeksforGeeks verified' },
    { label: 'Backend Frameworks', value: '3', desc: 'Django, FastAPI, Flask' },
    { label: 'Deployment Rate', value: '100%', desc: 'Zero localhost-only repos' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'cake-and-crumb',
    title: 'Cake & Crumb',
    subtitle: 'Artisan Bakery E-Commerce with WhatsApp Checkout',
    description: 'A vibrant React storefront featuring an interactive custom cake builder, live ingredient pricing, persistent local storage cart, and seamless checkout dispatch via WhatsApp Business API.',
    detailedDescription: 'Cake & Crumb delivers a delightful digital shopping experience for bespoke baked goods. Customers can customize layers, toppings, and personalized messages with immediate price recalculation, then send the exact formatted order directly to the bakery via WhatsApp.',
    category: 'ecommerce',
    tags: ['React', 'Tailwind CSS', 'WhatsApp Business API', 'Netlify', 'LocalStorage'],
    liveUrl: 'https://cake-and-crumb.netlify.app',
    githubUrl: 'https://github.com/tnuislostq/bakery-website',
    image: '/cake-and-crumb.webp',
    fallbackImage: '/cake-and-crumb.png',
    featured: true,
    metrics: 'Direct WhatsApp order dispatch & custom tier builder',
    architecture: [
      'Component-driven cake customizer with reactive pricing calculation',
      'Persistent cart state using HTML5 LocalStorage',
      'Dynamic WhatsApp URL generator with URI-encoded line items and totals',
      'Optimized asset loading hosted on Netlify CDN'
    ],
    highlights: [
      'Interactive visual cake flavor & topping selector',
      'One-tap checkout routing directly to bakery WhatsApp',
      'Persistent shopping cart across page refreshes',
      'Snappy, appetizing mobile UI with Tailwind CSS'
    ]
  },
  {
    id: 'kinetic-fitness',
    title: 'Kinetic Fitness Studio',
    subtitle: 'Modern Fitness & Member Intake Portal',
    description: 'A high-energy, dark-themed responsive web application for KINETIC Fitness Studio built with React and Tailwind CSS. Features dynamic class schedules, trainer rosters, tiered membership plans, and client intake registration.',
    detailedDescription: 'Crafted with bold athletic typography and high-contrast visuals, Kinetic Fitness provides a digital home for members to browse class timings, reserve training slots, and sign up for membership tiers.',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'Netlify'],
    liveUrl: 'https://kinetic-fitnesss.netlify.app',
    githubUrl: 'https://github.com/tnuislostq/kinetic-fitness',
    image: '/kinetic-fitness.webp',
    fallbackImage: '/kinetic-fitness.png',
    featured: true,
    metrics: 'Dynamic class scheduler & tiered intake registration',
    architecture: [
      'Modular React components for trainer profiles and schedules',
      'Mobile-first responsive navigation with modern Tailwind CSS styling',
      'Client-side form intake with validation',
      'Production deployment on Netlify'
    ],
    highlights: [
      'Dynamic weekly schedule matrix',
      'Trainer showcase with specialties and bios',
      'Tiered membership comparison matrix',
      'Modern dark athletic aesthetic'
    ]
  },
  {
    id: 'flow-track',
    title: 'FlowTrack',
    subtitle: 'Full-Stack Cycle Analytics & Health Insights',
    description: 'A full-stack reproductive health tracking platform with period cycle prediction, ovulation window calculation, symptom logging, and historical cycle analytics.',
    detailedDescription: 'FlowTrack provides an empathetic, privacy-focused health tracker. With smart mathematical prediction models, users log flow, moods, and symptoms while viewing calendar projections and health metrics.',
    category: 'fullstack',
    tags: ['Flask', 'Python', 'JavaScript', 'Render', 'HealthTech', 'Chart Analytics'],
    liveUrl: 'https://flow-track-w0md.onrender.com',
    githubUrl: 'https://github.com/tnuislostq/flow-track',
    image: '/flow-track.webp',
    fallbackImage: '/flow-track.png',
    featured: true,
    metrics: 'Algorithmic cycle prediction & multi-symptom logging',
    architecture: [
      'Flask backend modeling rolling average cycle periods',
      'Client-side calendar view with color-coded fertile windows',
      'Multi-variable symptom correlation engine',
      'Production deployment on Render'
    ],
    highlights: [
      'Cycle prediction with rolling historical data',
      'Interactive menstrual calendar with fertile window highlights',
      'Daily mood & physical symptom recording',
      'Clean, sensitive, and responsive UI'
    ]
  },
  {
    id: 'sitepulse',
    title: 'SitePulse',
    subtitle: 'Production-Ready Website & SEO Audit Engine',
    description: 'A high-performance asynchronous website audit and security API featuring SSRF protection, distributed scraping, caching, rate limiting, and CI/CD automation.',
    detailedDescription: 'Built for high reliability under real-world web traffic, SitePulse performs deep automated SEO, security header inspection, and load diagnostics with multi-layered SSRF filtering to safeguard internal cloud networks.',
    category: 'fullstack',
    tags: ['FastAPI', 'Python', 'Render', 'SSRF Protection', 'Web Scraping', 'REST API', 'CI/CD'],
    liveUrl: 'https://sitepulse-audit.onrender.com',
    githubUrl: 'https://github.com/tnuislostq/SitePulse',
    featured: true,
    metrics: 'Asynchronous scraping with SSRF protection & rate limiting',
    architecture: [
      'FastAPI asynchronous endpoints with concurrent request workers',
      'SSRF protection layer intercepting malicious internal IP targets',
      'In-memory caching and token-bucket rate limiting',
      'Automated GitHub Actions CI/CD deployment to Render'
    ],
    highlights: [
      'Comprehensive SEO & security header auditing',
      'Robust SSRF defense preventing internal network leakage',
      'Interactive Swagger / OpenAPI live documentation',
      'Containerized and deployed on Render'
    ]
  },
  {
    id: 'asalps',
    title: 'ASALPS',
    subtitle: 'Adaptive Skill Audit & Learning Path System',
    description: 'A comprehensive full-stack skill-assessment platform that evaluates user competencies and recommends customized, algorithmic learning paths for every learner.',
    detailedDescription: 'ASALPS solves fragmented self-study by providing dynamic diagnostic tests. As users answer questions, the adaptive backend evaluates skill tiers across various programming languages, generating personalized roadmap roadmaps and tracking completion milestones.',
    category: 'fullstack',
    tags: ['Django', 'Python', 'Bootstrap', 'PostgreSQL', 'Render', 'REST API'],
    liveUrl: 'https://asalps-app.onrender.com',
    githubUrl: 'https://github.com/tnuislostq/ASALPS.app',
    featured: true,
    metrics: 'Dynamic Diagnostic & Custom Learning Roadmaps',
    architecture: [
      'Django ORM with relational schema for questions, skills, and user submissions',
      'Dynamic scoring engine evaluating knowledge levels across domains',
      'Session-persisted diagnostics with granular progression analytics',
      'Continuous deployment pipeline on Render cloud'
    ],
    highlights: [
      'Adaptive diagnostic test engine',
      'Dynamic curriculum generator based on weak-spot analysis',
      'Full administrative grading & question pool management',
      'Mobile-responsive UI built with clean Bootstrap components'
    ]
  },
  {
    id: 'tuko',
    title: 'TUKO',
    subtitle: 'Real-Time Chat Application with AI Assistant',
    description: 'A high-speed real-time messaging application connecting a React frontend to a FastAPI backend over bi-directional WebSockets, with an intelligent AI copilot embedded directly into the chat stream.',
    detailedDescription: 'TUKO demonstrates real-time asynchronous communication under load. Built with FastAPI WebSockets and React, messages transmit with sub-50ms latency. The integrated AI assistant can be summoned inline with queries or prompts without breaking room discussions.',
    category: 'ai-realtime',
    tags: ['React', 'FastAPI', 'WebSockets', 'Python', 'Render', 'AI Integration'],
    liveUrl: 'https://tuko-chat.onrender.com',
    githubUrl: 'https://github.com/tnuislostq/TUKO-chat-application',
    featured: true,
    metrics: '<50ms WebSocket latency & live AI assistant',
    architecture: [
      'FastAPI WebSocket connection manager handling concurrent broadcast channels',
      'Event-driven JSON messaging protocol with heartbeat keep-alive',
      'AI assistant module answering contextual user inquiries directly in room',
      'Optimistic UI state in React with auto-reconnect fallback'
    ],
    highlights: [
      'Instant bi-directional messaging with zero polling',
      'In-thread AI copilot responding to commands',
      'Active user presence and connection state indicators',
      'Resilient reconnection logic for unstable networks'
    ]
  },
  {
    id: 'expense-splitter',
    title: 'Expense Splitter',
    subtitle: 'Group Tab Tracker with Debt Simplification Algorithm',
    description: 'A smart group tab calculation tool featuring greedy graph algorithms to minimize transaction counts, split bills across uneven groups, and generate clear settlement paths.',
    detailedDescription: 'Built to solve the headache of shared vacation and roommate expenses. The app uses a greedy debt minimization algorithm to collapse multi-party debts into the minimum possible transactions.',
    category: 'fullstack',
    tags: ['Flask', 'Python', 'Greedy Algorithms', 'Debt Simplification', 'Render'],
    liveUrl: 'https://expense-splitter-group-tab-tracker.onrender.com',
    githubUrl: 'https://github.com/tnuislostq/Expense-Splitter-Group-Tab-Tracker',
    featured: true,
    metrics: 'Minimizes N-party debt graph to minimal transactions',
    architecture: [
      'Greedy algorithm reducing cash transfers among group members',
      'Categorized expense breakdown with percentage splitting',
      'Exportable settlement breakdown view'
    ],
    highlights: [
      'Automated net balance computation',
      'Greedy debt reduction graph solver',
      'Simple, intuitive transaction ledger',
      'Live deployment on Render'
    ]
  },
  {
    id: 'ai-monk',
    title: 'AI Monk',
    subtitle: 'Philosophical Conversation & Mindful Dialogue Engine',
    description: 'An AI-powered conversational application designed to hold stateful, multi-turn philosophical discussions across asynchronous API calls with robust error resilience.',
    detailedDescription: 'AI Monk transforms mundane Q&A into deep, thought-provoking dialogue. Leveraging prompt engineering, streaming responses, and structured state preservation, it guides users through introspective reflections and Stoic/Eastern philosophical frameworks.',
    category: 'ai-realtime',
    tags: ['Python', 'Flask', 'AI APIs', 'Prompt Engineering', 'Render', 'Responsive UI'],
    liveUrl: 'https://ai-monk-interview-app.onrender.com/',
    githubUrl: 'https://github.com/tnuislostq/AI-Monk-interview-app',
    featured: true,
    metrics: 'Multi-turn context retention & graceful failure recovery',
    architecture: [
      'Flask backend acting as a secure gateway to Generative AI APIs',
      'Stateful session buffer preserving context across multiple rounds of dialogue',
      'Graceful rate-limit protection and fallback response mechanisms',
      'Zen-inspired minimalist interface optimized for readability'
    ],
    highlights: [
      'Context-aware multi-turn conversational memory',
      'Tailored persona prompting for mindful, philosophical synthesis',
      'Zero-leak API key architecture with backend proxying',
      'Mobile-first responsive design'
    ]
  },
  {
    id: 'portfolio-html-css-js',
    title: 'DevPortfolio 1.0',
    subtitle: 'Responsive Web Architecture & Validated Intake',
    description: 'A clean, responsive personal portfolio built with semantic HTML5, CSS3, and vanilla JavaScript. Features an accessible theme toggle saved to localStorage, scroll reveal animations, and a validated client inquiry system.',
    detailedDescription: 'Engineered without heavy frontend framework dependencies to demonstrate rock-solid fundamentals in DOM manipulation, asynchronous form handling, responsive CSS grid/flexbox layouts, and persistent theme states.',
    category: 'web',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages', 'LocalStorage', 'Responsive'],
    liveUrl: 'https://tnuislostq.github.io/portfolio-html-css-js/',
    githubUrl: 'https://github.com/tnuislostq/portfolio-html-css-js',
    featured: false,
    metrics: 'Zero-dependency 100/100 Lighthouse performance & persistent state',
    architecture: [
      'Vanilla JavaScript event listeners with modular architecture',
      'CSS custom properties for real-time theme swapping',
      'Client-side form field validation before dispatch'
    ],
    highlights: [
      'Pure vanilla JavaScript with zero bundle overhead',
      'Dark and light theme toggle saved to LocalStorage',
      'Fully responsive for all mobile and desktop viewports',
      'Live deployment on GitHub Pages'
    ]
  },
  {
    id: 'advance-pong',
    title: 'Advance Pong Arcade',
    subtitle: 'HTML5 Canvas Arcade Physics & AI Opponent Engine',
    description: 'An enhanced web-based edition of the classic arcade Pong game featuring advanced collision physics, dynamic paddle speed scaling, score tracking, and an adaptive bot AI opponent.',
    detailedDescription: 'Developed to master game loop lifecycles and collision geometry in the browser. Features requestAnimationFrame execution, vector calculations for ball reflections, and scalable canvas rendering.',
    category: 'web',
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Loop', 'Physics Engine', 'AI Bot'],
    liveUrl: 'https://github.com/tnuislostq/advance-pong-game',
    githubUrl: 'https://github.com/tnuislostq/advance-pong-game',
    featured: false,
    metrics: '60 FPS continuous canvas loop with custom vector collision',
    architecture: [
      'Continuous requestAnimationFrame game update cycle',
      '2D vector reflection physics for angled paddle deflections',
      'Heuristic AI tracking paddle simulating human reaction latency'
    ],
    highlights: [
      'Fluid 60 FPS gameplay on HTML5 Canvas',
      'Dynamic ball velocity acceleration during long rallies',
      'Single-player mode with smart AI paddle',
      'Keyboard and touch-friendly controls'
    ]
  },
  {
    id: 'js-algorithms',
    title: 'Algorithm & Data Structures Lab',
    subtitle: 'Interactive DSA & Problem Solving Collection',
    description: 'A comprehensive collection of algorithmic implementations, data structure libraries, and optimization problem solutions written in modern JavaScript ES6+.',
    detailedDescription: 'Practical implementations of fundamental computer science patterns: binary trees, graph searches, greedy algorithms, sorting techniques, and recursive problem solvers tested against edge cases.',
    category: 'fullstack',
    tags: ['JavaScript ES6+', 'Data Structures', 'Algorithms', 'DSA', 'Problem Solving'],
    liveUrl: 'https://github.com/tnuislostq/JAVASCRIPT',
    githubUrl: 'https://github.com/tnuislostq/JAVASCRIPT',
    featured: false,
    metrics: 'Optimized time-complexity solutions for algorithmic patterns',
    architecture: [
      'Clean modular ES6+ classes for custom data structures',
      'Comprehensive test assertions for boundary conditions',
      'Algorithmic complexity notes alongside each implementation'
    ],
    highlights: [
      'Hands-on implementations of essential data structures',
      'Greedy and dynamic programming solutions',
      'Clean, commented ES6+ code structure'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Building responsive, fast, and accessible user interfaces',
    skills: [
      { name: 'React', level: 'Advanced', icon: 'Atom', favorite: true },
      { name: 'Next.js', level: 'Proficient', icon: 'Layers', favorite: true },
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'Palette', favorite: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: 'FileCode', favorite: true },
      { name: 'TypeScript', level: 'Intermediate', icon: 'Code2', favorite: true },
      { name: 'HTML5 & CSS3', level: 'Expert', icon: 'Layout', favorite: false },
      { name: 'Bootstrap', level: 'Advanced', icon: 'Boxes', favorite: false }
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Designing resilient servers, schemas, and real-time communication',
    skills: [
      { name: 'Django', level: 'Proficient', icon: 'Server', favorite: true },
      { name: 'FastAPI', level: 'Proficient', icon: 'Zap', favorite: true },
      { name: 'Python', level: 'Advanced', icon: 'Terminal', favorite: true },
      { name: 'Flask', level: 'Proficient', icon: 'Cpu', favorite: false },
      { name: 'RESTful APIs', level: 'Advanced', icon: 'Network', favorite: true },
      { name: 'WebSockets', level: 'Proficient', icon: 'Radio', favorite: true },
      { name: 'PostgreSQL / SQL', level: 'Proficient', icon: 'Database', favorite: true }
    ]
  },
  {
    category: 'Cloud, DevOps & Tools',
    description: 'Deploying, monitoring, and maintaining production applications',
    skills: [
      { name: 'AWS (EC2, S3, IAM, Lambda)', level: 'Certified', icon: 'Cloud', favorite: true },
      { name: 'Git & GitHub', level: 'Advanced', icon: 'GitBranch', favorite: true },
      { name: 'Render & Netlify', level: 'Advanced', icon: 'Globe', favorite: true },
      { name: 'CI/CD Pipelines', level: 'Intermediate', icon: 'Workflow', favorite: false },
      { name: 'Postman & API Testing', level: 'Proficient', icon: 'CheckCircle2', favorite: false },
      { name: 'Linux / Bash', level: 'Intermediate', icon: 'Terminal', favorite: false }
    ]
  },
  {
    category: 'Languages & Core CS',
    description: 'Fundamental algorithmic thinking and data structures',
    skills: [
      { name: 'Python', level: 'Advanced', icon: 'FileCode', favorite: true },
      { name: 'JavaScript', level: 'Advanced', icon: 'Code', favorite: true },
      { name: 'SQL', level: 'Proficient', icon: 'Database', favorite: false },
      { name: 'C++', level: 'Intermediate', icon: 'Cpu', favorite: false }
    ]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Practitioner',
    issuer: 'GeeksforGeeks / Amazon Web Services',
    date: '2025',
    imageUrl: 'https://tnuislostq.github.io/assets/certs/aws.png',
    verifyUrl: 'https://media.geeksforgeeks.org/courses/certificates/89892c4aba573ffec8583cd5e1a53730.pdf',
    skills: ['AWS Cloud Core', 'EC2 & S3', 'IAM Security', 'Cloud Architecture', 'Billing & Cost']
  },
  {
    id: 'fullstack-bootcamp',
    title: 'Full Stack Developer Bootcamp',
    issuer: 'GeeksforGeeks',
    date: '2025',
    imageUrl: 'https://tnuislostq.github.io/assets/certs/fullstack.png',
    verifyUrl: 'https://media.geeksforgeeks.org/courses/certificates/56e148fadde08a06615b087fc1457364.pdf',
    skills: ['React', 'Node.js', 'Express', 'Databases', 'Full Stack Architecture']
  },
  {
    id: 'javascript-programming',
    title: 'JavaScript Programming',
    issuer: 'GeeksforGeeks',
    date: '2025',
    imageUrl: 'https://tnuislostq.github.io/assets/certs/javascript.png',
    verifyUrl: 'https://media.geeksforgeeks.org/courses/certificates/8f6aad8635816c3951992105d0da2007.pdf',
    skills: ['ES6+ Syntax', 'Asynchronous JS', 'DOM Manipulation', 'Event Loop', 'Fetch API']
  },
  {
    id: 'product-management',
    title: 'Product Management Fundamentals',
    issuer: 'GeeksforGeeks',
    date: '2025',
    imageUrl: 'https://tnuislostq.github.io/assets/certs/productmgmt.png',
    verifyUrl: 'https://media.geeksforgeeks.org/courses/certificates/2c21ebd113afa2e626e44e16976970d0.pdf',
    skills: ['User Stories', 'Agile / Scrum', 'Roadmapping', 'Feature Prioritization']
  },
  {
    id: 'soft-skills',
    title: 'Professional Soft Skills Course',
    issuer: 'GeeksforGeeks',
    date: '2025',
    imageUrl: 'https://tnuislostq.github.io/assets/certs/softskills.png',
    verifyUrl: 'https://media.geeksforgeeks.org/courses/certificates/410f8bb2ac20bc31ba332304f211bb7d.pdf',
    skills: ['Cross-functional Collaboration', 'Client Communication', 'Technical Documentation']
  },
  {
    id: 'programming-languages',
    title: 'Programming Languages & Algorithms',
    issuer: 'Career Ninja',
    date: '2025',
    imageUrl: 'https://tnuislostq.github.io/assets/certs/python.png',
    verifyUrl: 'https://drive.google.com/file/d/1nzIGgGFDsNlMQJmb6mLayAA4nojIsDqg/view?usp=drivesdk',
    skills: ['Data Structures', 'Algorithmic Problem Solving', 'Python Scripting']
  }
];

export const EXPERIENCE_EDUCATION: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Junior Full-Stack Developer (Independent Projects)',
    company: 'Self-Driven Production Builds',
    period: '2024 - Present',
    location: 'Hazaribagh, Jharkhand (Remote)',
    type: 'experience',
    description: 'Architecting and deploying five end-to-end web applications connecting React frontends with Python backends.',
    achievements: [
      'Built and shipped ASALPS: an adaptive competency assessment platform in Django with relational PostgreSQL models.',
      'Constructed TUKO: an ultra low-latency (<50ms) real-time WebSocket chat app with FastAPI and in-thread AI assistant.',
      'Developed Cake & Crumb: e-commerce portal with dynamic live cake customization and WhatsApp Business API ordering.',
      '100% production deployment track record on Render, Netlify, and AWS.'
    ],
    skills: ['React', 'FastAPI', 'Django', 'WebSockets', 'Render', 'PostgreSQL']
  },
  {
    id: 'edu-1',
    role: 'Full Stack Development Certification',
    company: 'GeeksforGeeks Bootcamp',
    period: '2024 - 2025',
    location: 'Online / Intensive',
    type: 'education',
    description: 'Comprehensive hands-on training spanning modern frontend engineering, backend microservices, and databases.',
    achievements: [
      'Completed rigorous training across JavaScript, React, RESTful architectures, and database modeling.',
      'Built multiple real-world capstone projects evaluated on code quality, testing, and deployment standards.'
    ],
    skills: ['Full Stack Architecture', 'JavaScript ES6+', 'Database Design', 'System Design Basics']
  },
  {
    id: 'edu-2',
    role: 'Programming Foundations & Algorithms',
    company: 'Career Ninja & Self-Study',
    period: '2023 - 2024',
    location: 'Jharkhand, India',
    type: 'education',
    description: 'Foundations of Data Structures, Algorithmic Problem Solving, Object-Oriented Programming, and Web Standards.',
    achievements: [
      'Certified in core programming languages and software development principles.',
      'Constructed algorithmic solutions including greedy graph traversals and cycle prediction.'
    ],
    skills: ['Python', 'JavaScript', 'Data Structures', 'Algorithms', 'SQL']
  }
];
