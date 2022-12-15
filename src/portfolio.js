import emoji from 'react-easy-emoji';


// import googlelogo from './assets/img/icons/common/google.svg'
// import github from './assets/img/icons/common/github.svg'
// import airbnb from './assets/img/icons/common/airbnbLogo.png'
import lc from './assets/img/icons/common/lc.png'
import bad from './assets/img/icons/common/bad.png'
import sway from './assets/img/icons/common/sway.png'
import cv from './assets/docs/devCV.pdf'

export const greetings = {
    "name": "Shajeed Islam",
    "title": "Hi all, I'm Shajeed",
    "description": "A passionate Full Stack Developer and Mobile App Developer having experience in building Web applications with JavaScript / Reactjs / Nodejs / PHP / Java / React Native for Mobile App and some other cool libraries and frameworks.",
    "resumeLink": cv
}

export const openSource = {
  githubUserName: 'Sajistreo3',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/sajeed99",
    "instagram": "https://www.instagram.com/sajistreo3",
    "twitter": "https://twitter.com/shajeedul",
    "github": "https://github.com/Sajistreo3",
    "linkedin": "https://www.linkedin.com/in/sajistreo3/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as AWS / Digital Ocean'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'reactNative',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'PHP',
        fontAwesomeClassname: 'vscode-icons:file-type-php',
      },
      {
        skillName: 'Java',
        fontAwesomeClassname: 'vscode-icons:file-type-java',
      },
      {
        skillName: 'CSharp',
        fontAwesomeClassname: 'vscode-icons:file-type-csharp',
      },
      {
        skillName: 'MySQL',
        fontAwesomeClassname: 'vscode-icons:file-type-mysql',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'XML',
        fontAwesomeClassname: 'vscode-icons:file-type-xml',
      },
      // {
      //   skillName: 'sass',
      //   fontAwesomeClassname: 'logos:sass',
      // },
      // {
      //   skillName: 'TypeScript',
      //   fontAwesomeClassname: 'logos:typescript-icon',
      // },
      // {
      //   skillName: 'flutter',
      //   fontAwesomeClassname: 'logos:flutter',
      // },
      // {
      //   skillName: 'swift',
      //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
      // },
      // {
      //   skillName: 'aws',
      //   fontAwesomeClassname: 'logos:aws',
      // },
      // {
      //   skillName: 'python',
      //   fontAwesomeClassname: 'logos:python',
      // },
      // {
      //   skillName: 'docker',
      //   fontAwesomeClassname: 'logos:docker-icon',
      // },
        ],
      }
      
      
      export const SkillBars = [
        {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '70', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80',
    },
    {
      Stack: 'Programming',
      progressPercentage: '90',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Herzing College',
      subHeader: 'Full-Stack Developer',
      duration: 'June 2019 - August 2020',
      desc: 'This Institution trained me to become a Full-stack developer',
      descBullets: [
        'As for front-end, I mainly learned Web-dev using React HTML and CSS',
        'On the Back-end side, I have learned Java and PHP with OOP',
      ],
    },
    {
      schoolName: "Ecole National D'Aerotechnique",
      subHeader: 'DEC Genie Aerospacial',
      duration: 'January 2017 - May 2018',
      desc: 'Learned in aeronautics ',
      descBullets: [
        'Learned about Engines',
        'Learned about aerodynamics and more',
      ],
    },
    
]

export const experience = [
  {
    role: 'Full-Stack Web developer',
    company: 'Linen Chest',
    companylogo: lc,
    date: 'August 2021 – Present',
    desc:
      'Working full time with Magento 2 for making Features and fixing Issues and bugs on the E-commerce website. with Scrum Agile Methodoly',
    descBullets: [
      'E-commerce Development',
      'Web Development with PHP, Magento 2',
    ],
  },
  {
    role: 'Junior Full-Stack developer',
    company: 'Brossard App Design',
    companylogo: bad,
    date: 'August 2020 – March 2022',
    desc:
      'Participated on the development',
    descBullets: [
      'Mobile app Development in React Native',
      'Web Development with PHP, NodeJS, Javascript',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Tekmadev',
    companylogo: sway,
    date: 'July 2019 – Jan 2021',
    desc:
      'As a Freelancer, I develop and find the solution to what the client asks. with Software in Java and mobile application in React Native.',
  },
  // {
  //   role: 'Software Engineer Intern',
  //   company: 'Airbnb',
  //   companylogo: airbnb,
  //   date: 'Jan 2015 – Sep 2015',
  //   desc:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // },
]

export const projects = [
  {
    name: "Linen Chest",
    desc: 'the project is about an E-Commerce website at Linen Chest directly using Magento 2 with PHP, Front-End Develop with React',
    descBullets: [
      'Creating Features and new Idea implemention',
      'Web Development with PHP, Magento 2 with MVC',
      'Worked with the E-commerce website in the cart section in React JS using hooks',
      'Fix Bugs and problems',
      'working with admin panel and making new panels programmatically',
    ],
    link: {
      name: "Website",
      url: "https://www.linenchest.com/"
    }
  },
  {
    name: "WhatsUp - Event Organizer",
    desc: 'the project is a Mobile app for Booking and get together for Meetings and Events',
    descBullets: [
      'Create different pages and implemented the back-end with Firebase',
      'Development with React Native and various different Libraries',
      'Made Front-end usedull and reusable componants for Buttons, texts, and some layouts',
      'Fix Bugs and problems',
      'Work in a team of Agile and Sprint method',
    ],
    link: {
      name: "Screen Shot",
      url: "https://drive.google.com/file/d/1At74CiFO1DVEH3mHnxXnZ7iiybynR75P/view?usp=share_link"
    }
  },
  {
    name: "GestionAHT",
    desc: "It's a project of making a website for a client where I had to showcase his gas stations and his team, and the most important part is " + 
    "there is a back-end made in PHP with a user CRUD system and an Evaluation system for the client's solution to be able to do inspections with his phone or PC and export it as PDF.",
  },
  {
    name: "Restaurant Delivery System",
    desc: "A Windows Software with Front-end using Java Swing and Back-end with Java using Object-Oriented Programming, structured in MVC.",
  },
  {
    name: "TimeBox",
    desc: "Participated in the Front-end development for a mobile application in React Native.",
  },
]