import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import HomeRobot from '../assets/HomeRobot.png';
import './home-css/Header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
      <img src={logo} className="logo" alt="Logo" />
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/tts">Text to Speech</Link></li>
          </ul>
        </nav>
      </header>
      <div className="home-section">
      <img src={HomeRobot} className="home-robot" alt="Logo" />
        <h1 className="main-heading">Transform text into natural-sounding speech effortlessly</h1>
        <p className="section-description">
          Create compelling audio content in seconds...
        </p>
        <button className="try-button">
          TRY OUT FOR FREE ✨
        </button>
      </div>
    </div>
  );
};

export default Header;
