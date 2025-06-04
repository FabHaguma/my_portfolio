// src/data/projectsData.js

// Import screenshots for your projects.
// Create a folder src/assets/images/projects/ and place your screenshots there.
// Example:
import projectAScreenshot from '../assets/images/projects/nochmal-screenshot.jpg';
import projectBScreenshot from '../assets/images/projects/bac-estimation-tool.png';
import projectCScreenshot from '../assets/images/projects/prompt-gallery-image.png';
import projectDScreenshot from '../assets/images/projects/map-guessing-game.png'; // Placeholder image for projects without screenshots

export const projectsData = [
  {
    id: 1,
    name: "Map Guessing Game",
    description: "Test your global knowledge with this engaging interactive game! Users identify countries on a world map, with options to filter by continent or difficulty. Built with React, Vite, and Zustand for state management, it features dynamic SVG map rendering via React Simple Maps, persistent scoring, and multiple gameplay levels. The clean, responsive interface ensures a smooth experience as you race to conquer the map!",
    smallDescription: "An interactive game to identify countries on a map.",
    technologies: ["React", "Vite", "Zustand", "React Simple Maps"],
    liveDemoLink: "https://map-game.haguma.com/",
    sourceCodeLink: "https://github.com/fabhaguma/map-guessing-game",
    screenshot: projectDScreenshot,
  },
  {
    id: 2,
    name: "BAC Estimation Tool",
    description: "An interactive web application provides users with an estimate of Blood Alcohol Content (BAC) based on their weight, drinking duration, and drink inputs. Built with React and styled with Tailwind CSS, it features precise calculations using industry-standard algorithms, time-to-sober estimations, and intuitive visual feedback. The user interface is designed for a seamless and responsive experience across all devices, promoting responsible alcohol consumption.",
    smallDescription: "A tool to estimate Blood Alcohol Content (BAC).",
    technologies: ["React", "JavaScript", "Vite", "Jest", "Cypress"],
    liveDemoLink: "https://bac.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/BAC-Estimator",
    screenshot: projectBScreenshot,
  },
  {
    id: 3,
    name: "Prompt Gallery",
    description: "This web application allows users to explore and interact with a collection of AI-generated prompts. Users can browse through various categories, view prompt details, and save their favorite prompts for later use. The application is built with a focus on user experience, featuring smooth navigation and an intuitive interface.",
    smallDescription: "A gallery to explore AI-generated prompts.", 
    technologies: ["Supabase", "PostgreSQL", "JavaScript", "SCSS Modules"],
    liveDemoLink: "https://prompt-gallery.haguma.com/",
    sourceCodeLink: "https://github.com/FabHaguma/prompt-gallery",
    screenshot: projectCScreenshot,
  },
  {
    id: 4,
    name: "Noch Mal: Online Adaptation",
    description: "An adaptation of a multiplayer board game that allows players to enjoy the classic Noch Mal game online. It features real-time gameplay, of rolling dice to strategically place numbers on a grid, aiming to complete rows and columns for points. Players can join games, track their scores. The game is designed to be user-friendly and engaging, with a focus on smooth gameplay and an intuitive interface.",
    smallDescription: "An online adaptation of the classic Noch Mal board game.",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "Vanilla CSS"],
    liveDemoLink: null,
    sourceCodeLink: "https://github.com/FabHaguma/nochmal-online",
    screenshot: projectAScreenshot,
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