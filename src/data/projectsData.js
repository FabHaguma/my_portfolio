
import project_A_Screenshot from '../assets/images/projects/nochmal-screenshot.jpg';
import project_B_Screenshot from '../assets/images/projects/bac-estimation-tool.png';
import project_C_Screenshot from '../assets/images/projects/prompt-gallery-image.png';
import project_D_Screenshot from '../assets/images/projects/map-guessing-game.png';
import project_E_Screenshot from '../assets/images/projects/agebond-screenshot.png';
import project_F_Screenshot from '../assets/images/projects/yt-subs-screenshot.png';
import project_G_Screenshot from '../assets/images/projects/haguma-art-editor-screenshot.png';

// Featured projects displayed on the landing page (in order of appearance)
// To add a new featured project: Add its ID to this array
// To change featured order: Rearrange the IDs below
export const featuredProjectIds = [1, 2, 3];

// How to add a new project:
// 1. Add project screenshot to src/assets/images/projects/
// 2. Import the screenshot at the top of this file
// 3. Add a new project object below with a unique ID
// 4. To feature it on the landing page, add its ID to featuredProjectIds array above
export const projectsData = [
  {
    id: 1,
    name: "YT Subs",
    description: "Unlock insights from YouTube videos instantly without watching the whole stream. This full-stack application extracts video subtitles using yt-dlp and leverages AI models to generate concise summaries and answer user questions about the content. It features a responsive React frontend for seamless interaction and a robust Express backend handling media parsing and AI integration.",
    smallDescription: "Download YouTube transcripts, summarize content, and chat with AI.",
    technologies: ["Python", "fastapi", "React", "Node.js", "Express", "Google Gemini AI", "yt-dlp", "Docker"],
    liveDemoLink: "https://www.ytsubs.haguma.com/",
    sourceCodeLink: "https://github.com/fabhaguma/yt-subs",
    screenshot: project_F_Screenshot
  },
  {
    id: 2,
    name: "BAC Estimation Tool",
    description: "An interactive web application provides users with an estimate of Blood Alcohol Content (BAC) based on their weight, drinking duration, and drink inputs. Built with React and styled with Tailwind CSS, it features precise calculations using industry-standard algorithms, time-to-sober estimations, and intuitive visual feedback. The user interface is designed for a seamless and responsive experience across all devices, promoting responsible alcohol consumption.",
    smallDescription: "A tool to estimate Blood Alcohol Content (BAC).",
    technologies: ["React", "JavaScript", "Vite", "Jest", "Cypress"],
    liveDemoLink: "https://www.bac.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/BAC-Estimator",
    screenshot: project_B_Screenshot
  },
  {
    id: 3,
    name: "Haguma Art Editor",
    description: "A full-stack web application for image editing and manipulation. Built with a modern React frontend and Python Flask backend, it features real-time image processing capabilities including resizing, cropping with presets, rotation, and flipping. Users can apply filters like grayscale, adjust brightness and contrast, and download their creations in multiple formats. The application utilizes Docker for containerization and provides a responsive, intuitive interface for seamless editing.",
    smallDescription: "A web application for real-time image editing and manipulation.",
    technologies: ["React", "Python", "Flask", "Vite", "Docker", "Pillow", "CSS Modules"],
    liveDemoLink: "https://www.arteditor.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/haguma-art-editor",
    screenshot: project_G_Screenshot,
  },
  {
    id: 4,
    name: "Map Guessing Game",
    description: "Test your global knowledge with this engaging interactive game! Users identify countries on a world map, with options to filter by continent or difficulty. Built with React, Vite, and Zustand for state management, it features dynamic SVG map rendering via React Simple Maps, persistent scoring, and multiple gameplay levels. The clean, responsive interface ensures a smooth experience as you race to conquer the map!",
    smallDescription: "An interactive game to identify countries on a map.",
    technologies: ["React", "Vite", "Zustand", "React Simple Maps"],
    liveDemoLink: "https://map-game.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/map-guessing-game",
    screenshot: project_D_Screenshot
  },
  {
    id: 5,
    name: "AgeBond",
    description: "An innovative web application designed to explore and calculate intricate family age relationships. Built with React, Vite, and Zustand, it features a dual-mode interface: a guided mode with pre-defined templates for precise calculations, and an AI-powered mode using Google's Gemini API for natural language queries. Users can manage family members, track life events, and ask complex questions like 'When will my sister and I have a combined age equal to our mom's?' The relationship-aware AI provides personalized, context-rich answers, making generational connections easy to visualize.",
    smallDescription: "An AI-powered app to explore family age relationships.",
    technologies: ["React", "Vite", "Zustand", "Google Gemini API", "CSS Modules"],
    liveDemoLink: "https://www.agebond.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/agebond",
    screenshot: project_E_Screenshot
  },
  
  {
    id: 6,
    name: "Noch Mal: Online Adaptation",
    description: "An adaptation of a multiplayer board game that allows players to enjoy the classic Noch Mal game online. It features real-time gameplay, of rolling dice to strategically place numbers on a grid, aiming to complete rows and columns for points. Players can join games, track their scores. The game is designed to be user-friendly and engaging, with a focus on smooth gameplay and an intuitive interface.",
    smallDescription: "An online adaptation of the classic Noch Mal board game.",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "Vanilla CSS"],
    liveDemoLink: "https://www.nochmal.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/nochmal-online",
    screenshot: project_A_Screenshot
  },
  {
    id: 7,
    name: "Prompt Gallery",
    description: "This web application allows users to explore and interact with a collection of AI-generated prompts. Users can browse through various categories, view prompt details, and save their favorite prompts for later use. The application is built with a focus on user experience, featuring smooth navigation and an intuitive interface.",
    smallDescription: "A gallery to explore AI-generated prompts.", 
    technologies: ["Supabase", "PostgreSQL", "JavaScript", "SCSS Modules"],
    liveDemoLink: "https://prompt-gallery.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/prompt-gallery",
    screenshot: project_C_Screenshot
  },
  
  // {
  //   id: 5,
  //   name: "Project Delta",
  //   description: "Description for Project Delta, focusing on UI/UX.",
  //   smallDescription: "A UI/UX focused project with modern design.",
  //   technologies: ["React", "Figma", "Storybook"],
  //   liveDemoLink: "https://your-live-demo-link5.com",
  //   sourceCodeLink: null, // Example: if no public source code
  //   screenshot: placeholderScreenshot,
  // },
];