# Fabrice Haguma's Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://portfolio.haguma.com)

This is my personal portfolio website, built from scratch with React and Vite. It showcases my projects, skills, and professional journey. The site is designed to be a clean, modern, and responsive single-page application, with a dedicated page to display all my projects.

## Features

- **Responsive Design**: Adapts seamlessly to various screen sizes, from mobile to desktop.
- **Light/Dark Theme**: A theme toggle for user preference.
- **Dynamic Project Showcase**: Projects are loaded from a centralized data source.
- **Smooth Navigation**: Utilizes React Router for smooth scrolling and seamless navigation between sections and pages.
- **Component-Based Architecture**: Built with reusable React components for maintainability.

## Technologies Used

- **Frontend**:
  - React.js
  - Vite
  - React Router
  - HTML5 & CSS3
- **Deployment**:
  - GitHub Pages
- **Development**:
  - ESLint for code quality

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/fabhaguma/my_portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd my_portfolio
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Runs the app in development mode with hot-reloading.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally to preview before deployment.
- `npm run deploy`: Builds the project and deploys it to GitHub Pages.

## Deployment on a VPS with Docker and Caddy

These instructions assume you have a VPS with Docker and Docker Compose installed.

1.  **Create a Caddy network:**
    ```bash
    docker network create caddy_net
    ```
2.  **Build and run the application:**
    ```bash
    docker-compose up -d --build
    ```
    This will build the portfolio image, and start the portfolio and caddy services.

    Caddy will automatically provision an SSL certificate for `portfolio.haguma.com` and serve your application over HTTPS.
