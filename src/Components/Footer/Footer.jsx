import React from 'react';
import './Footer.css'; // 
import { Link } from 'react-router-dom';
import sneakers from '../../assets/sneakers.png'
import facebook_icon from '../../assets/Facebook_icon.svg.png'
import tiktok_icon from '../../assets/Tiktok_icon.svg.png'
import instagram_icon from '../../assets/instagram-6338393_1280.webp'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-logo-container">
                    <img src={sneakers} alt="Sneaker" className="footer-logo" />
                    <span>AllOfUsAreSmart</span>
                </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-content">
                <div className="footer-column">
                    <h4>support</h4>
                    <ul>
                        <li><Link to="/faq">Frequently asked questions</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/shipping">Shipping</Link></li>
                        <li><Link to="/store-locator">Find nearby store</Link></li>
                        <li><Link to="/size-guide">Size guide</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><Link to="/return-policy">Return Policy</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        <li><Link to="/conditions-of-purchase">Conditions of purchase</Link></li>
                        <li><Link to="/promotion">*promotion</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul className="social-icons">
            <li><img src={facebook_icon} alt="" /></li>
            <li><img src={tiktok_icon} alt="" /></li>
            <li><img src={instagram_icon} alt="" /></li>
                    </ul>
                </div>
                </div>
            <p className="footer-copyright">© 2025 AllOfUsAreSmart. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
