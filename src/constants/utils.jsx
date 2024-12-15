import { BsLinkedin, BsTwitter, BsQuora, BsGithub } from "react-icons/bs";

export const NavLinks = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" }
];

export const Institutes = [
  {
    imgURL: "assets/images/tcet.jpg",
    name: "Thakur College of Engineering & Technology",
    degree: "Bachelor of Technology",
    major: "AI&DS",
    grade: "9.82 CGPA",
    status: "Pursuing",
  },
  {
    imgURL: "assets/images/tcsc.jpg",
    name: "Thakur College of Science & Commerce",
    degree: "Higher Secondary Certification",
    major: "PCM - Computer Science",
    grade: "86%",
    status: "Completed",
  },
  {
    imgURL: "assets/images/xaviers.jpg",
    name: "St. Xavier's High School",
    degree: "Secondary School Certification",
    major: "--",
    grade: "94%",
    status: "Completed",
  },
];

export const workDetails = [
  {
    position: "The Skidoo",
    company: "Software Engineer Intern",
    description: "Nov 2024 - Present"
  }, 
  {
    position: "Project Intern - AI&ML",
    company: "Infosys Springboard",
    description: "Oct 2024 - Jan 2025"
  },
  {
    position: "AI Junior Developer",
    company: "Anachroni AI",
    description: "May 2024 - Sep 2024",
  }
];

export const skills = [
  {
    category: "Web Development",
    icons: [
      { name: "Flask", link: "assets/icons/web/flask.svg" },
      { name: "React JS", link: "assets/icons/web/react.svg" },
      { name: "Express JS", link: "assets/icons/web/expressjs.svg" },
      { name: "Django", link: "assets/icons/web/django.svg" },
      { name: "Next JS", link: "assets/icons/web/nextjs.svg"},
      { name: "Tailwind CSS", link: "assets/icons/web/tailwindcss.svg" },
    ],
  },
  {
    category: "Programming",
    icons: [
      { name: "Python", link: "assets/icons/programming/python.svg" },
      { name: "C++", link: "assets/icons/programming/cpp.svg" },
      { name: "C", link: "assets/icons/programming/c.svg" },
      { name: "Javascript",link: "assets/icons/programming/javascript.svg" },
      { name: "Typescript", link: "assets/icons/programming/typescript.svg" },
    ],
  },
  {
    category: "Machine Learning",
    icons: [
      { name: "PyTorch", link: "assets/icons/ml/pytorch.png" },
      { name: "OpenCV", link: "assets/icons/ml/opencv.svg"},
      { name: "Tensorflow", link: "assets/icons/ml/tensorflow.svg" },
      { name: "Scikit-learn", link: "assets/icons/ml/scikit-learn.svg" },
      { name: "NumPy", link: "assets/icons/ml/numpy.svg" },
      { name: "Pandas", link: "assets/icons/ml/pandas.svg" },
    ],
  },
  {
    category: "Database",
    icons: [
      { name: "PostgreSQL", link: "assets/icons/databases/PostgreSQL.svg" },
      { name: "MongoDB", link: "assets/icons/databases/mongodb.svg" },
      { name: "MySQL", link: "assets/icons/databases/MySQL.svg" },
      { name: "SQLite", link: "assets/icons/databases/SQLite.svg" },
    ],
  },

  {
    category: "Game Development",
    icons: [
      { name: "Unity", link: "assets/icons/game/unity.svg" },
      { name: "Unreal", link: "assets/icons/game/unreal.svg" },
    ],
  },
];

export const projectLinks = [
  {
    name: "HealthVault",
    description:
      "HealthVault is a platform that allows patients to share their medical records in a secured manner.",
    imgUrl: "assets/images/projects/healthvault.png",
    repoUrl: "https://github.com/Adm-2005/HealthVault",
  },
  {
    name: "Bulwark AI",
    description:
      "Intrusion Detection System with Auto-remediation.",
    imgUrl: "assets/images/projects/bulwarkai.png",
    repoUrl: "https://github.com/Adm-2005/Bulwark-AI",
  },
  {
    name: "Test-It!",
    description:
      "Test-It is a multimodal testing tool.",
    imgUrl: "assets/images/projects/testit.png",
    repoUrl: "https://github.com/Adm-2005/Test-It",
  },
  {
    name: "Space Wars",
    description: "Space Wars is a space shooting game inspired from the past.",
    imgUrl: "assets/images/projects/spacewars.jpg",
    repoUrl: "https://github.com/Adm-2005/Space-Wars",
  },
];

export const certifications = [
  {
    name: 'Professional Data Scientist',
    org: 'DataCamp',
    img: 'assets/images/certifications/profdatascientist.jpg',
    link: 'https://www.datacamp.com/certificate/DS0024134995032'
  },
  {
    name: 'Deep Learning for Developers',
    org: 'Infosys Springboard',
    img: 'assets/images/certifications/dlfordevelopers.jpg',
    link: 'https://drive.google.com/file/d/1QhhBhTvT2lxQJm32hffLFB5dAKmI9T-w/view'
  },
  {
    name: 'Supervised Machine Learning',
    org: 'DeepLearning AI',
    img: 'assets/images/certifications/supervisedml.png',
    link: 'https://drive.google.com/file/d/1QhhBhTvT2lxQJm32hffLFB5dAKmI9T-w/view'
  },
  {
    name: 'Python Programming',
    org: 'Infosys Springboard',
    img: 'assets/images/certifications/pythonprogramming.jpg',
    link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0133013139881410566984_shared/1-f6d7781b-43b6-4e97-b87d-f4345f21dffd.pdf'
  }, 
  {
    name: 'DL for Images with PyTorch',
    org: 'DataCamp',
    img: 'assets/images/certifications/dlforimages.png',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/1c588a2d6d04f4c289cbde5035a2eb563c1a6099'
  }, 
  {
    name: 'AI Job Simulation',
    org: 'Cognizant',
    img: 'assets/images/certifications/aijobsim.jpg',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_w3x5MzxSZwYp2Mrro_1714113951548_completion_certificate.pdf'
  }
];

export const smLinks = [
  {
    link: 'https://www.linkedin.com/in/akshat--mishra',
    icon: <BsLinkedin />
  },
  {
    link: 'https://twitter.com/imakshatmishra',
    icon: <BsTwitter />
  },
  {
    link: 'https://github.com/Adm-2005',
    icon: <BsGithub />
  },
  {
    link: 'https://www.quora.com/profile/Akshat-Mishra-657',
    icon: <BsQuora />
  }
]

export const footerLinks = [
  {
    title: "Sections",
    links: [
      { name: "Home", link: "/" },
      { name: "Education", link: "#education" },
      { name: "Experience", link: "#experience" },
      { name: "Projects", link: "#projects" },
      { name: "Skills", link: "#skills" },
      { name: "Certifications", link: "#certifications" },
    ],
  },

  {
    title: "Get in touch",
    links: [
      { name: "akshatdmishra2005@gmail.com", link: "mailto:akshatdmishra2005@gmail.com" },
      { name: "Mumbai, India", link: "#" },
    ],
  },
  ,
];
