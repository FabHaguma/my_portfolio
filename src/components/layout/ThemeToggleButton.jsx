// src/components/ThemeToggleButton.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggleButton.css'; // For styling the button

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? '🌙' : '☀️'} {/* Simple emoji, can be SVG icons */}
    </button>
  );
};

export default ThemeToggleButton;