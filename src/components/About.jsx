import React from 'react';

const About = () => {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div style={styles.content}>
          <div style={styles.textContainer}>
            <p style={styles.paragraph}>
              A Computer Science student specializing in building scalable full-stack and AI-driven applications. Experienced in modern technologies like React, Node.js, and LLM frameworks to create impactful, production-ready solutions.
            </p>
            <p style={styles.paragraph}>
              Passionate about solving real-world problems using intelligent systems, efficient backend architectures, and data-driven approaches. Demonstrates strong problem-solving ability, system design thinking, and a focus on performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  textContainer: {
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
};

export default About;
