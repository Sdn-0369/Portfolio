import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p style={styles.text}>
          © 2026 Subham Debnath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 0',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-color)',
  },
  container: {
    textAlign: 'center',
  },
  text: {
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
  },
};

export default Footer;
