const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "My Happy Moments",
    link: "#happy-moments",
  },
];

const words = [
  { text: "Ideas", imgPath: "/cv-portfolio/images/ideas.svg" },
  { text: "Concepts", imgPath: "/cv-portfolio/images/concepts.svg" },
  { text: "Designs", imgPath: "/cv-portfolio/images/designs.svg" },
  { text: "Code", imgPath: "/cv-portfolio/images/code.svg" },
];

const counterItems = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Clients" },
  { value: 45, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "+", label: "Skills and Tools learned" }
];

const logoIconsList = [
  {
    imgPath: "/cv-portfolio/images/logos/Info.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/iCIMS.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/alten.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/mars.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/verizon.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/intel.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/GL-logo.svg",
  },
  {
    imgPath: "/cv-portfolio/images/logos/analog.svg",
  }
];

const abilities = [
  {
    imgPath: "/cv-portfolio/images/seo.png",
    title: "Quality",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/cv-portfolio/images/chat.png",
    title: "Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/cv-portfolio/images/time.png",
    title: "On-Time",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Front End Developer",
    imgPath: "/cv-portfolio/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/cv-portfolio/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/cv-portfolio/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/cv-portfolio/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/cv-portfolio/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular",
    imgPath: "/cv-portfolio/images/logos/angular.png",
  },
  {
    name: "Javascript",
    modelPath: "/cv-portfolio/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive",
    modelPath: "/cv-portfolio/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager, Scrum",
    modelPath: "/cv-portfolio/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Angular, React, HTML5, CSS3, JavaScript, ES6, Tailwind",
    imgPath: "/cv-portfolio/images/logos/GL-logo.svg",
    logoPath: "/cv-portfolio/images/GL-icon.ico",
    title: "Senior Lead",
    date: "August 2020 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications to reduce load time and increase speed",
      "Emphasised on sleek, modern and scalable designs",
      "Worked as Implementation Consultant and Scrum Master"
    ],
  },
  {
    review:
      "HTML5, CSS3, JavaScript, D3.js, Chart.js, NG-charts",
    imgPath: "/cv-portfolio/images/logos/alten.svg",
    logoPath: "/cv-portfolio/images/alten.webp",
    title: "Senior Software Engineer",
    date: "January 2020 - July 2020",
    responsibilities: [
      "Developed an application to determine the lifetime of flight engines based on historic data",
      "Worked with Data analyst and scientists, UX team, and backend teams to integrate the APIs seamlessly with the frontend.",
      "Developed a covid tracking application to predict the increase in number of cases.",
      "Used D3.js, Chart.js and integrated them seamlessly in the angular application"
    ],
  },
  {
    review:
      "AngularJS, Bootstrap 3, JQuery, HTML5, CSS3, JavaScript",
    imgPath: "/cv-portfolio/images/logos/Info.svg",
    logoPath: "/cv-portfolio/images/infosys-icon.ico",
    title: "Consultant",
    date: "Oct 2014 - April 2018",
    responsibilities: [
      "Built cross-platform desktop applications using React, integrating with backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/cv-portfolio/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/cv-portfolio/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/cv-portfolio/images/logo3.png",
  },
];

const workProjects = [
  {
    icon: '📡',
    domain: 'Telecommunication & Retail',
    title: 'Telecommunication & Retail Platform',
    company: 'Globallogic India Private Limited',
    companyLogo: '/cv-portfolio/images/logos/GL-logo.svg',
    duration: 'December 2025 – April 2026',
    highlights: [
      'Engineered robust solutions for telecommunication and retail domains, integrating scalable architectures and elevating end-user experience across digital channels.',
      'Integrated advanced APIs and established seamless connectivity between telecommunication systems and retail platforms, optimizing cross-channel user journeys and supporting scalable business growth.',
      'Formulated and deployed reusable UI components leveraging React, enhancing modularity and maintainability across telecommunication and retail digital platforms.',
    ],
    tags: ['React', 'REST APIs', 'Scalable Architecture', 'UI Components', 'Cross-channel'],
  },
  {
    icon: '🐾',
    domain: 'Healthcare · Petcare',
    title: 'Petcare Platform',
    company: 'Globallogic India Private Limited',
    companyLogo: '/cv-portfolio/images/logos/GL-logo.svg',
    duration: 'August 2020 – November 2023',
    highlights: [
      'Developed a single page application for a healthcare pet care platform utilizing Angular, Material UI, SCSS, Redux, and RXJS, delivering a seamless and interactive experience for end-users.',
      'Standardized new feature development processes by working alongside architects to harmonize coding practices and blueprint granular development tasks within the project lifecycle.',
      'Performed code assessments using automated tools and manual inspection to align project codebases with organizational development standards and best practices in JavaScript and Angular.',
      'Produced comprehensive low-level design documentation for project features using UML and architectural design principles.',
    ],
    tags: ['Angular', 'Material UI', 'SCSS', 'Redux', 'RXJS', 'UML', 'JavaScript'],
  },
];

const hobbyProjects = [
  {
    icon: '💼',
    title: 'Job Tracker',
    description:
      'A privacy-first Chrome extension to track your job applications entirely in your browser — no servers, no tracking. Features local-first storage via IndexedDB, auto-fill from job sites, status management, search & filter, and one-click export to Excel. Supports Light, Dark and High Contrast themes and works fully offline. Published on the Chrome Web Store.',
    tags: ['Chrome Extension', 'JavaScript', 'IndexedDB', 'Privacy-first', 'Productivity'],
    liveUrl: 'https://chromewebstore.google.com/detail/fmeapeabglgplhjofcmgcdmbnhfehmeo',
    githubUrl: 'https://github.com/shinrajpriyanka/job-tracker',
  },
  {
    icon: '👁️',
    title: 'EyeRest: Blink & Break',
    description:
      'A wellness-focused Chrome extension built to combat digital eye strain during long screen sessions. It fires a calming sidebar overlay at configurable intervals (10–25 mins) displaying a custom GIF and encouraging message, then auto-closes after a set duration. Users can upload their own GIF + message combos (up to 30) to a personal media library stored in IndexedDB — entirely offline and private. Built with Chrome Manifest V3, service worker alarms, content script injection, and dynamic scripting APIs.',
    tags: ['Chrome Extension', 'Manifest V3', 'IndexedDB', 'Service Worker', 'Health & Wellness'],
  },
];

const happyMoments = [
  {
    type: 'Award',
    icon: '🏆',
    title: 'Spot Award',
    issuer: 'Globallogic India Private Limited',
    date: '2026',
    description: 'Recognized for exceptional contributions to the Petcare platform, delivering high-quality Angular solutions and mentoring junior developers.',
  },
  {
    type: 'Award',
    icon: '🏆',
    title: 'Marvel Award - The Alpha player',
    issuer: 'Globallogic India Private Limited',
    date: '2024',
    description: 'Recognized for exceptional contributions to the Petcare platform, delivering high-quality Angular solutions and mentoring junior developers.',
  },
  {
    type: 'Award',
    icon: '🏆',
    title: 'Spot Award',
    issuer: 'Globallogic India Private Limited',
    date: '2021',
    description: 'Recognized for exceptional contributions to the Petcare platform, delivering high-quality Angular solutions and mentoring junior developers.',
  },
  {
    type: 'Award',
    icon: '🎓',
    title: 'Team to beat!',
    issuer: 'Globallogic India Private Limited',
    date: '2020',
    description: 'Completed advanced Angular certification covering reactive forms, state management, RxJS, performance optimization and enterprise patterns.',
  },
  {
    type: 'Certification',
    icon: '⚛️',
    title: 'React – The Complete Guide',
    issuer: 'Udemy',
    date: '2023',
    description: 'Mastered React, Redux Toolkit, React Router, hooks, context API, and Next.js fundamentals through a comprehensive project-based course.',
  },
  {
    type: 'Certification',
    icon: '🌐',
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn',
    date: '2023',
    description: 'Earned certification in Artificial Intelligence for Business, Artificial Intelligence (AI) and Generative AI',
  },
  {
    type: 'Certification',
    icon: '🌐',
    title: 'Ethics in the Age of Generative AI',
    issuer: 'LinkedIn',
    date: '2023',
    description: 'Earned certification in Computer Ethics and Generative AI',
  },
  {
    type: 'Award',
    icon: '🌟',
    title: 'Spot Award',
    issuer: 'Infosys',
    date: '2017',
    description: 'Awarded for introducing a reusable AngularJS component library that reduced development time across multiple client projects by 30%.',
  },
  {
    type: 'Certification',
    icon: '🧩',
    title: 'Professional Scrum Master (PSM I)',
    issuer: 'Scrum.org',
    date: '2023',
    description: 'Certified in Scrum framework, empirical process control, and role-specific responsibilities of the Scrum Master; demonstrated ability to facilitate Scrum events, coach teams toward self-management, and remove impediments to delivery.',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  techStackIcons,
  techStackImgs,
  navLinks,
  workProjects,
  hobbyProjects,
  happyMoments,
};