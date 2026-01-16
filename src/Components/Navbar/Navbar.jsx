import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import sneakerLogo from '../../assets/sneakers.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useCart } from '../CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [sticky, setSticky] = useState(false);
  const menuRef = useRef();
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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

  // Helper function to render navigation links
  const NavLink = ({ to, label, offset = 0 }) => {
    if (isHomePage) {
      return (
        <ScrollLink to={to} smooth={true} offset={offset} duration={500} onClick={closeMenu}>
          {label}
        </ScrollLink>
      );
    }
    return (
      <Link to="/" state={{ scrollTo: to, offset: offset }} onClick={closeMenu}>
        {label}
      </Link>
    );
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <Link to="/" className='logo' onClick={closeMenu}>
        <img src={sneakerLogo} alt='Sneaker Logo' />
        <span>AllOfUsAreSmart</span>
      </Link>

      <ul ref={menuRef} className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><NavLink to='hero' label='Home' /></li>
        <li><NavLink to='trending-section' label='Shop' offset={-130} /></li>
        <li><NavLink to='about' label='About us' offset={-180} /></li>
        <li><NavLink to='map-container' label='Location' offset={-190} /></li>
        <li><NavLink to='contact' label='Contact us' offset={-100} /></li>
        <li onClick={closeMenu}>
          <Link to='/cart' className="cart-link">
            <div className="cart-icon-container">
              <FaShoppingCart />
              {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
            </div>
            Cart
          </Link>
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