import React from 'react';
import './home-css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Dinesh Pawar. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
