const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
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
    name: "React Developer",
    modelPath: "/cv-portfolio/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/cv-portfolio/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Javascript Developer",
    modelPath: "/cv-portfolio/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
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
    title: "Frontend Developer",
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
    title: "Frontend Developer",
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
    title: "Frontend Developer",
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
};