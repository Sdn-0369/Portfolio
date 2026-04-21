import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <a href="#" style={styles.logo}>Subham Debnath</a>
        
        {/* Desktop Nav */}
        <nav style={styles.desktopNav} className="desktop-nav">
          <ul style={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          style={styles.mobileToggle} 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <ul style={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border-color)',
    zIndex: 1000,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--accent-color)',
    letterSpacing: '-0.5px',
  },
  desktopNav: {
    display: 'none',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    transition: 'var(--transition)',
  },
  mobileToggle: {
    display: 'block',
    color: 'var(--text-primary)',
  },
  mobileMenu: {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    padding: '1rem 0',
    boxShadow: 'var(--shadow-md)',
  },
  mobileNavList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  mobileNavLink: {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },
};

// Add basic media query for desktop nav using a style tag injected in index.css or doing it via CSS classes.
// For simplicity, I'll add a quick global class in index.css for mobile-hidden elements.
export default Header;
