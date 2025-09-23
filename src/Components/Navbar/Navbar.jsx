import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import sneakerLogo from '../../assets/sneakers.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const menuRef = useRef();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    const handleClickOutside = (e) => {
      if (mobileMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const menuIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNCA2SDIwTTEyIDExSDIwTTEyIDE3SDIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogPC9zdmc+";
  const closeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuNSAzLjQ0TDEyLjU2IDEuNSA4IDYuMDYgMy40NCAxLjUgMS41IDMuNDQgNi4wNiA4IDEuNSAxMi41NiAzLjQ0IDE0LjUgOCAzLjQ0IDEyLjU2IDE0LjUgMTQuNSAxMi41NiA4IDguMDYgMTQuNSAzLjQ0eiIvPjwvc3ZnPg==";

  const closeMenu = () => {
    setMobileMenu(false);
  }

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo'>
        <img src={sneakerLogo} alt='Sneaker Logo' />
        <span>AllOfUsAreSmart</span>
      </div>

      <ul ref={menuRef} className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li onClick={closeMenu}>
          <ScrollLink to='background' smooth={true} offset={0} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink to='trending-section' smooth={true} offset={-130} duration={500}>
            Shop
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink to='about' smooth={true} offset={-180} duration={500}>
            About us
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink to='map-container' smooth={true} offset={-190} duration={500}>
            Location
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <ScrollLink to='contact' smooth={true} offset={-100} duration={500}>
            Contact us
          </ScrollLink>
        </li>
        <li onClick={closeMenu}>
          <Link to='/cart'><FaShoppingCart />Cart</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to='/login'><FaUser /> Login</Link>
        </li>
      </ul>
      <img src={mobileMenu ? closeIcon : menuIcon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;