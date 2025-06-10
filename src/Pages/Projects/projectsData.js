import { images } from "../../assets/data";

const projectsData = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "My personal portfolio made using React and Tailwind CSS. It showcases my bio, skills, projects, and contact information in a sleek UI.My portfolio website is a personal showcase built with React and styled using Tailwind CSS to create a clean, modern, and responsive user interface. It highlights my professional bio, technical skills, and a curated collection of projects that demonstrate my abilities as a full-stack developer. The site also features easy navigation and contact information, making it simple for potential employers or collaborators to learn about my work and get in touch. Hosted on Netlify, the portfolio loads quickly and offers a seamless experience across devices. Overall, this website reflects my passion for coding, attention to detail, and commitment to building practical, user-friendly web applications.",
    stack: [
      "React",
      "Tailwind",
      "Express",
      "Node",
      "MongoDB",
      "Vercel",
      "JWT",
      "Github",
    ],
    image: images.portfolioritesh,
    live: "https://portfolio-ritesh-kumar.vercel.app/",
    github: "https://github.com/Riteshmaurya1/portfolio-ritesh-kumar",
    readme:
      "https://github.com/Riteshmaurya1/portfolio-ritesh-kumar/blob/main/README.md",
  },
  {
    slug: "e-learning-plateform",
    title: "Online Learning Plateform",
    description:
      "An online exam platform with authentication, role-based access, exam creation, and result analysis.",
    stack: [
      "React",
      "Tailwind",
      "Express",
      "Node",
      "MongoDB",
      "Vercel",
      "JWT",
      "Github",
    ],
    image: images.examexpress,
    live: "https://examexpress.vercel.app", // Replace with real link if exists
    github: "https://github.com/Riteshmaurya1/newexamexpress",
    readme:
      "https://github.com/Riteshmaurya1/newexamexpress/blob/main/README.md",
  },
  {
    slug: "collections-web-project",
    title: "Collections Web Project",
    description:
      "I built a clean and responsive personal portfolio web application to showcase my projects and skills. Built using React with React Router for seamless navigation, and styled using Tailwind CSS for a modern UI.The project data is manually structured via a separate JS module, making it easily scalable. The routing logic allows detailed views of each project with full descriptions, live demo links, and GitHub source.",
    stack: [
      "React",
      "Whatsapp API",
      "CSS",
      "JSX",
      "Render",
      "Github",
      "Tailwind CSS",
      "QR Code Library",
    ],
    image: images.collwebs,
    live: " ", // Replace with real link if exists
    github: "https://github.com/Riteshmaurya1/collwebs",
    readme: "https://github.com/Riteshmaurya1/collwebs/blob/main/README.md",
  },
  {
    slug: "foodstack-app",
    title: "FoodStack App",
    description:
      "FoodStack is a full‑stack food ordering web application that streamlines browsing menus, placing orders, and tracking delivery in real time. Built with a MongoDB, Express, React, Node (MERN) stack, styled with Tailwind CSS, and deployed on Render. It supports secure authentication and responsive design.",
    stack: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Render",
      "GitHub",
    ],
    image: images.foodweb, // make sure `images.foodstack` is imported correctly
    live: "https://foodstack.onrender.com",
    github: "https://github.com/Riteshmaurya1/foodstack",
    readme: "https://github.com/Riteshmaurya1/foodstack/blob/main/README.md",
  },
  {
    slug: "codeview-app",
    title: "CodeView - Code Editer",
    description:
      "CodeView is a dynamic project portfolio web app for developers to showcase their GitHub repositories in a clean, card-based layout. It features real-time GitHub API integration to automatically fetch and display project details. Built with React and styled using Tailwind CSS, it provides a responsive and modern user interface.",
    stack: [
      "React",
      "Tailwind CSS",
      "Express",
      "Node",
      "Axios",
      "JavaScript",
      "Render",
      "GitHub",
      "Zegocloud API",
      "CodeMirror Lib",
    ],
    image: images.codeview, // Ensure this image is added to your images object
    live: "https://codeview-five.vercel.app",
    github: "https://github.com/Riteshmaurya1/codeview",
    readme: "https://github.com/Riteshmaurya1/codeview/blob/main/README.md",
  },
  {
    slug: "projectone-basic-website",
    title: "ProjectOne - Basic React Website",
    description:
      "ProjectOne is my first React-based single-page website. It features a basic layout with sections like Home, About, and Contact. This project helped me understand the fundamentals of React components, JSX, and basic styling. It's a clean and minimal personal web page built for practice and learning.",
    stack: ["React", "JavaScript", "CSS", "JSX", "GitHub", "Render"],
    image: images.Techstar, // Make sure this key exists in your `images` object
    live: "https://reactoneweb-riteshmaurya1-ritesh-kumars-projects-ea81f701.vercel.app", // Replace if deployed elsewhere
    github: "https://github.com/Riteshmaurya1/projectone",
    readme: "https://github.com/Riteshmaurya1/projectone/blob/main/README.md",
  },

  // Add more projects here...
];

export default projectsData;
