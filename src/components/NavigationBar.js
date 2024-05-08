import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

// Add styles to a separate CSS file (NavigationBar.css)
