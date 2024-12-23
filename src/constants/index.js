
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    threads,
    typescript,
    
} from "../assets/icons";
import shorturl from "../assets/icons/shorturl.png"
import appointment from "../assets/icons/doctor-appointment.png"
import ballisimo from "../assets/icons/Ballisimo.png"
import podcast from "../assets/icons/podcast.png"
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        name: "CoraZoneHealth",
        image: "https://www.corazonehealth.com/_next/image?url=%2Fassets%2Flogo.jpg&w=256&q=75",
        url: "https://www.corazonehealth.com/",
        description: `CorazoneHealth is a project centered around fitness, 
        featuring an integrated subscription-based payment system and a dynamic blog designed to engage 
        users with fitness tips, health advice, and wellness content.
        The app was developed using Next.js, ensuring server-side rendering for fast page load speeds 
        and improved SEO performance. TypeScript was incorporated to provide type safety and enhance 
        development efficiency. The website’s design and styling leverage Tailwind CSS, making full 
        use of its utility-first approach for fast, responsive layouts. Additionally, 
        Tailwind animations were implemented to provide smooth, interactive transitions throughout the site.
        `,
        theme: "btn-back-green",
        
        
    }
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: shorturl,
        theme: 'btn-back-red',
        name: 'ShorUrl',
        description: `I developed a URL shortener web application to streamline the process of generating and managing short links. 
        This project aimed to enhance my skills in modern web development technologies, including React, TypeScript, Node.js, and MongoDB. 
        Through this experience, I gained hands-on expertise in building full-stack applications, 
        implementing RESTful APIs, and ensuring efficient data storage and retrieval. Additionally, 
        I focused on creating a user-friendly interface and ensuring robust backend functionality.`,
        link: 'https://github.com/Tommysons/ShortUrl',
        color: "bg-amber-50"
    },
    // {
    //     iconUrl: appointment,
    //     theme: 'btn-back-green',
    //     name: 'Appointment',
    //     description: `I developed a doctor appointment booking web application to facilitate the scheduling and management of medical appointments. 
    //     This project aimed to enhance my skills in modern web development technologies, including Next.js, TypeScript, Appwrite, and Twilio for SMS notifications. 
    //     Through this experience, I gained hands-on expertise in building full-stack applications, implementing real-time notifications where users receive SMS notifications if appointment is approved or cancelled, 
    //     and ensuring efficient data management.`,
    //     link: 'https://github.com/Tommysons/appointment',
    // },
    {
        iconUrl: ballisimo,
        theme: 'btn-back-blue',
        name: 'Ballisimo - 3D game',
        description: `I created a 3D game designed to challenge players to roll a ball from start to finish as fast as possible, 
        with a timer tracking their progress. 
        Using React and Three.js, this project focused on improving my skills in developing interactive 3D graphics and dynamic gameplay. 
        The game features various obstacles that increase the difficulty of reaching the end, providing a compelling and engaging experience. 
        This allowed me to gain practical knowledge in game design, performance optimization, and creating immersive user interactions.`,
        link: 'https://github.com/Tommysons/Ballisimo',
        color: "bg-cyan-50"
    },
    {
        iconUrl: podcast,
        theme: 'btn-back-pink',
        name: 'AI Podcast',
        description: `I built an AI-powered podcast application that allows users to input text and choose a voice to narrate it. 
        This project was designed to enhance my proficiency in modern web development technologies, utilizing OpenAI for voice synthesis, 
        along with Next.js, TypeScript, and Convex for the database. Through this endeavor, I gained valuable experience in integrating AI technologies, 
        managing user inputs, and providing a customizable auditory experience. 
        The project emphasized efficient data handling and creating a user-friendly interface for seamless interaction.`,
        link: 'https://github.com/Tommysons/podcast',
        color: "bg-purple-50"
    },

];
