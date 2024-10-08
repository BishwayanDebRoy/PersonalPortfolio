import {

    webdevimg,
    reactdevimg,
    javascript,
    bootstrap,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    java,
    mysql,
    jpmc,
    unfold,
    srm,
    shikshas,
    echowritephoto,
    threejs,
    debuggerlgo,
    frntend,
    portfoliothumbnail,


} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "techstack",
        title: "Technologies",
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: webdevimg,
    },
    {
        title: "React  Developer",
        icon: reactdevimg,
    },
    {
        title: "Frontend Developer",
        icon: frntend,
    },
    {
        title: "Debugger",
        icon: debuggerlgo,
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
        name: "Bootstrap",
        icon: bootstrap,
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
        name: "Git",
        icon: git,
    },

    {
        name: "Java",
        icon: java,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
];

const experiences = [
    {
        title: "Code For Good ",
        company_name: "JP Morgan Chase & Co.",
        icon: jpmc,
        iconBg: "#383E56",
        date: "June 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "UNFOLD",
        company_name: "COINDCX",
        icon: unfold,
        iconBg: "#E6DEDD",
        date: "Oct 2023",
        points: [
            "Designed and implemented responsive and intuitive user interfaces for the decentralized application (dApp) using modern frontend frameworks.",
            "Ensured the application was fully responsive, providing an optimal viewing experience across various devices.",
            "Focused on frontend performance optimization techniques to ensure a smooth and fast user experience.",
            "Identified and resolved UI issues, ensuring a bug-free and polished application.",
        ],
    },
    {
        title: "Mathitude",
        company_name: "SRM Institute of Science and Technology",
        icon: srm,
        iconBg: "#383E56",
        date: "Mar 2023",
        points: [
            "Showcased strong analytical abilities by solving complex mathematical problems under time constraints.",
            "Worked closely with teammates to discuss strategies and solutions, contributing to the team’s overall success.",
            "Performed consistently well in a high-stress, competitive environment, securing the Runner-Up position.",
            "Successfully outperformed over 150 participants, highlighting a strong grasp of mathematics and critical thinking.",
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
        name: "Shiksha Sankalp",
        description:
            "It is an educational platform that bridges the gap between students and quality resources, offering accessible, high-quality learning materials to enhance the educational experience across all levels.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: shikshas,
        source_code_link: "https://github.com/BishwayanDebRoy/Shiksha-Sankalp",
        live_link: "https://shiksha-sankalp-app.vercel.app/"
    },
    {
        name: "Personal Portfolio",
        description:
            "The Personal Portfolio is a responsive website created by me to showcase my skills, projects, and experiences. It features a clean design, highlighting my technical expertise and providing a professional online presence.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "three.js",
                color: "pink-text-gradient",
            },
        ],
        image: portfoliothumbnail,
        source_code_link: "https://github.com/BishwayanDebRoy/PersonalPortfolio",
        live_link: "https://bishwayan-portfolio.vercel.app/",
    },
    {
        name: "Echowrite",
        description:
            "EchoWrite is a project to create a visually appealing, responsive blog website with advanced CSS techniques, focusing on aesthetics and user-friendly design.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "appwrite",
                color: "pink-text-gradient",
            },
        ],
        image: echowritephoto,
        source_code_link: "https://github.com/BishwayanDebRoy/Echowrite",
        live_link: "https://echowrite-blogapp.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };