import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section reveal" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div style={styles.timeline}>
          <div style={styles.item}>
            <div style={styles.iconWrapper}>
              <Briefcase size={20} color="var(--accent-color)" />
            </div>
            <div style={styles.content}>
              <h3 style={styles.role}>Full Stack Developer</h3>
              <p style={styles.company}>Bluestock Learning (Remote)</p>
              <p style={styles.description}>
                Working on scalable applications using React, Node.js, APIs, and backend systems. Contributing to backend services, debugging, and improving performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  timeline: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
  },
  item: {
    display: 'flex',
    gap: '1.5rem',
    paddingBottom: '2rem',
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-color)',
    border: '2px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '0.25rem',
  },
  content: {
    flex: 1,
    backgroundColor: 'var(--bg-color)',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
  },
  role: {
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  company: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  description: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
};

export default Experience;
