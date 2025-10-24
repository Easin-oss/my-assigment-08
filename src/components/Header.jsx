import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png'; 

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 48px', 
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    fontFamily: 'sans-serif',
  },
  logo: {
    height: '40px', 
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '48px', 
  },
 
  navLink: {
    textDecoration: 'none',
    color: '#6b7280',
    fontWeight: '500',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s, border-color 0.3s',
  },
 
  navLinkActive: {
    textDecoration: 'none',
    color: '#3b82f6',
    fontWeight: '600',
    paddingBottom: '4px',
    borderBottom: '2px solid #3b82f6',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#3b82f6', 
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  },
  
  emojiIcon: {
    fontSize: '18px',
  }
};




const Header = () => {

  
  const getNavLinkStyle = ({ isActive }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };

  return (
    <header style={styles.header}>
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Hero IO Logo" style={styles.logo} />
        </Link>
      </div>

      <nav style={styles.nav}>
        <NavLink to="/" style={getNavLinkStyle}>Home</NavLink>
        <NavLink to="/apps" style={getNavLinkStyle}>Apps</NavLink>
        <NavLink to="/installation" style={getNavLinkStyle}>My Installation</NavLink>
      </nav>

      <a 
        href="https://github.com/Easin-oss" 
        target="_blank" 
        rel="noopener noreferrer"
        style={styles.button}
      >
      
        <span style={styles.emojiIcon}>🐙</span> 
        <span>Contributor</span>
      </a>
    </header>
  );
};

export default Header;