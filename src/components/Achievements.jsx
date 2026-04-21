import React from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Winner for Social Good',
      event: 'Code for Change Hackathon 2025',
      project: 'Fintelify',
      icon: <Trophy size={24} color="var(--accent-color)" />,
    },
    {
      title: 'Finalist',
      event: 'Mumbai Hacks 2025',
      project: '',
      icon: <Award size={24} color="var(--accent-color)" />,
    },
  ];

  return (
    <section id="achievements" className="section reveal">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div style={styles.grid}>
          {achievements.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>{item.icon}</div>
              <div>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.event}>{item.event}</p>
                {item.project && <p style={styles.project}>Project: {item.project}</p>}
              </div>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
  },
  iconWrapper: {
    padding: '0.75rem',
    backgroundColor: 'var(--card-bg)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  event: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  project: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    marginTop: '0.25rem',
  },
};

export default Achievements;
