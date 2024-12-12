import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div> */}
                <div className="copyright">
                © Created with love by Mika Hurvits
                    {/* © {new Date().getFullYear()} Mika Hurvits. All rights reserved. */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;