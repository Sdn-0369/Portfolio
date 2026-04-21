import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content} className="reveal">
          <p style={styles.greeting}>Hi, I'm</p>
          <h1 style={styles.name}>Subham Debnath.</h1>
          <h2 style={styles.tagline}>Building intelligent systems and scalable web applications.</h2>
          <p style={styles.description}>
            I'm a Full Stack Developer & AI Enthusiast based in India, specializing in building exceptional digital experiences and AI-driven solutions.
          </p>
          <div style={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '70px', // offset for header
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '800px',
  },
  greeting: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
  },
  name: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: '700',
    color: 'var(--text-primary)',
    lineHeight: '1.1',
    letterSpacing: '-1px',
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    lineHeight: '1.2',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
};

export default Hero;
