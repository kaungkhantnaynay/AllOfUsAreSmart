import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import sneakerLogo from '../../assets/sneakers.png';
import menu_icon from '../../assets/msg-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo'>
        <img src={sneakerLogo} alt='Sneaker Logo' />
        <span>AllOfUsAreSmart</span>
      </div>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='background' smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='trending-section' smooth={true} offset={-130} duration={500}>
            Shop
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-180} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to='map-container' smooth={true} offset={-190} duration={500}>
            Location
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-100} duration={500}>
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
