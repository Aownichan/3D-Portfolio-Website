import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    MQL,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      iconBg: "#383E56",
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
      iconBg: "#383E56",
      date: "November 2022 - Present",
      points: [
        "Optimizing websites to increase organic traffic and improve search engine rankings.",
        "Conducting keyword research and developing content strategies to increase rankings on all major search networks.",
        "Uploading content to WordPress and other content management systems.",
        "Monitoring and analyzing website performance metrics and taking steps to improve them.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "MQL Developer",
      icon: MQL,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Developing and maintaining web applications using MERN stack and other related technologies.",
        "Developing and maintaining desktop applications using C# (.NET) and other related technologies.",
        "Integrating MT4 and MT5 with external APIs and desktop applications to perform automated trading.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/Aownichan/Express-Charity",
    },
    {
      name: "SteamPunk",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      image: jobit,
      source_code_link: "https://github.com/Aownichan/SteamPunk-project",
    },
    {
      name: "IMS (Inventory Management System)",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "C#",
          color: "indigo-text-gradient",
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
      image: tripguide,
      source_code_link: "https://github.com/Aownichan/InventoryManagementSystem",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };