import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    upwork,
    mql,
    EC,
    SP,
    IMS,
    PW,
    threejs,
    express,
    mui,
    mudirr
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: ".NET Developer",
      icon: mobile,
    },
    {
      title: "Documentation Specialist",
      icon: backend,
    },
    {
      title: "Article Writer/SEO Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Material UI",
      icon: mui,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Article Writer",
      company_name: "UpWork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "December 2020 - Present",
      points: [
        "Writing well-researched articles on various topics including technology, business, and finance.",
        "Worked under tight deadlines and delivered high-quality work.",
        "Communicating with clients to understand their needs and following their guidelines.",
        "Editing and proofreading articles to ensure they are free of errors.",
      ],
    },
    {
      title: "SEO/Wordpress Manager",
      company_name: "UpWork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "November 2022 - Present",
      points: [
        "Optimizing websites to increase organic traffic and improve search engine rankings.",
        "Conducting keyword research and developing content strategies to increase rankings on all major search networks.",
        "Uploading content to WordPress and other content management systems.",
        "Monitoring and analyzing website performance metrics and taking steps to improve them.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "MQL Development",
      icon: mql,
      iconBg: "#E6DEDD",
      date: "September 2023 - January 2024",
      points: [
        "Developing and maintaining web applications using MERN stack and other related technologies.",
        "Developing and maintaining desktop applications using C# (.NET) and other related technologies.",
        "Integrating MT4 and MT5 with external APIs and desktop applications to perform automated trading.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Mudirr",
      icon: mudirr,
      iconBg: "#E6DEDD",
      date: "February 2024 - Present",
      points: [
        "Developing and maintaining various startups using MERN stack and other related technologies.",
        "Deploying and maintaining web applications on AWS and other cloud platforms.",
        "Creating containerized applications using Docker.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Express Charity",
      description:
        "An online charity management platform for a UK-based NGO organization (Global Reach). Highly focused on data visualization (graphs, data grids, custom cards, etc.), with modules on user management, beneficiary verification, real-time-chat, and donation trails.",
      tags: [
        {
          name: "MERN",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "blue-text-gradient",
        },
        {
          name: "Nivo Rocks",
          color: "pink-text-gradient",
        },
      ],
      image: EC,
      source_code_link: "https://github.com/Aownichan/Express-Charity",
    },
    {
      name: "SteamPunk",
      description:
        "A frontend focused digital game store. Contains pages with moving backgrounds, animated buttons, and imbedded video trailers. Backend focuses on user management (login/signup), and an admin portal to manage registered users.",
      tags: [
        {
          name: "HTML 5",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "red-text-gradient",
        },
      ],
      image: SP,
      source_code_link: "https://github.com/Aownichan/SteamPunk-project",
    },
    {
      name: "IMS (Inventory Management System)",
      description:
        "A beautiful desktop application for managing inventory and performing CRUD operations. Contains modules for managing products and product details (quantity, price), generating sales receipt, and a buyers portal.",
      tags: [
        {
          name: "C#",
          color: "tertiary-text-gradient",
        },
        {
          name: ".NET",
          color: "purple-text-gradient",
        },
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
      ],
      image: IMS,
      source_code_link: "https://github.com/Aownichan/InventoryManagementSystem",
    },
    {
      name: "3D Portfolio Website",
      description:
        "Do I really need to explain this one? 😝",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "black-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
      ],
      image: PW,
      source_code_link: "https://github.com/Aownichan/3D-Portfolio-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };