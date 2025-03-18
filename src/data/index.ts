import { GithubIcon, Linkedin, Instagram } from "lucide-react";

const data = {
  home: {
    name: "Raka Nugraha",
    description:
      "I Optimize & Build Fullstack {Next.js} & {Expressjs} Apps - Powered by {AI}", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/rakanugraha18",
        icon: GithubIcon,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/rakanugraha",
        icon: Linkedin,
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/@rakajnugraha",
        icon: Instagram,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Clone Xiaomi Website",
        description:
          "We developed a mi.co.id clone as our final project at Harisenin.com Bootcamp using React.js (Vite), Tailwind CSS, Node.js, Express, Sequelize, and MySQL. The frontend was deployed on Vercel, and the backend on Render.com. This project enhanced our full-stack development skills, focusing on responsiveness, scalability, and teamwork.",
        image: "/projects-imgs/clone-xiaomi.jpg",
        previewLink: "https://xiaomi-website.vercel.app/store",
      },
      {
        id: 2,
        title: "Movie Recomendation Website",
        description:
          "I developed a movie website as an individual project at Harisenin.com Bootcamp using React.js (Vite), Tailwind CSS, and the TMDB API. It was later expanded into a full-stack app with Express.js, MySQL, user authentication, and protected routes, enhancing my skills in frontend, backend, and API integration.",
        image: "/projects-imgs/flix-flix.jpg",
        previewLink: "https://flixflix-mntv.vercel.app/",
      },
      {
        id: 3,
        title: "E-commerce Smartliving",
        description:
          "I developed a Smart Living e-commerce website during the Virtual Project-Based Internship - Harisenin with CMLABS as a Full-Stack Developer, working alongside a Project Manager and UI/UX Designer. In one month, I completed the full-stack development using React.js and Tailwind CSS for the frontend and Node.js, Express, Sequelize, and MySQL for the backend.",
        image: "/projects-imgs/smartliving.jpg",
        previewLink: "https://smartliving.vercel.app/",
      },
      {
        id: 4,
        title: "Personal Portfolio Website",
        description:
          "I developed my first personal portfolio using React.js (Vite) and Tailwind CSS to showcase my experience, skills, and personal background. This website highlights my projects, technical expertise, and career journey, serving as a platform to connect with potential employers, collaborators, and the developer community.",
        image: "/projects-imgs/personal-portfolio.jpg",
        previewLink: "https://rakanugraha.vercel.app/",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 9,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 10,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 11,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 12,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "rakanugraha2@gmail.com",
    name: "Raka Nugraha",
  },
};

export default data;
