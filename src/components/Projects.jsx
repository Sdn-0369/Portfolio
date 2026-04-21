import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fintelify',
      description: 'AI-powered financial document analysis platform using LLMs and search integration. Built with React, Node.js, TypeScript, Redis, and deployed on AWS.',
      tech: ['React', 'Node.js', 'TypeScript', 'Redis', 'AWS', 'LLMs'],
      link: 'https://app.summarizer.shop/',
    },
    {
      title: 'AI Conversational System for ARGO Data',
      description: 'Developed an end-to-end pipeline for querying oceanographic data using natural language with LLM integration, vector databases, and visualization dashboards.',
      tech: ['LLM', 'Vector DB', 'Data Viz', 'Pipeline'],
    },
    {
      title: 'Payment Wallet App',
      description: 'Secure peer-to-peer transaction system with JWT authentication, built using React, Node.js, Express, and MongoDB.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    },
    {
      title: 'Logic Looper',
      description: 'A puzzle-based platform with offline-first architecture, IndexedDB storage, and GitHub-style analytics visualization.',
      tech: ['Offline-First', 'IndexedDB', 'Analytics'],
      link: 'https://logic-looper-one-psi.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="section reveal" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card} className="project-card">
              <div style={styles.cardContent}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.techList}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div style={styles.cardFooter}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--bg-color)',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    height: '100%',
    transition: 'var(--transition)',
  },
  cardContent: {
    padding: '1.5rem',
    flexGrow: 1,
  },
  title: {
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    backgroundColor: 'var(--card-bg)',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    border: '1px solid var(--border-color)',
  },
  cardFooter: {
    padding: '1.25rem 1.5rem',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--card-hover)',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--accent-color)',
    transition: 'var(--transition)',
  },
};

export default Projects;
