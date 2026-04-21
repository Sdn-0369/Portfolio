import React from 'react';
import { Code2, Layout, Server, Database, Cloud, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} color="var(--accent-color)" />,
      skills: ['Python', 'C', 'Java', 'JavaScript', 'TypeScript', 'HTML'],
    },
    {
      title: 'Frontend',
      icon: <Layout size={24} color="var(--accent-color)" />,
      skills: ['React', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <Server size={24} color="var(--accent-color)" />,
      skills: ['Node.js', 'Express', 'Hono'],
    },
    {
      title: 'Databases',
      icon: <Database size={24} color="var(--accent-color)" />,
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Prisma'],
    },
    {
      title: 'DevOps & Tools',
      icon: <Cloud size={24} color="var(--accent-color)" />,
      skills: ['AWS (EC2)', 'Docker', 'Git', 'GitHub', 'Linux', 'Cloudflare'],
    },
    {
      title: 'Data & AI',
      icon: <BrainCircuit size={24} color="var(--accent-color)" />,
      skills: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'Jupyter Notebook'],
    },
  ];

  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div style={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.header}>
                {category.icon}
                <h3 style={styles.title}>{category.title}</h3>
              </div>
              <ul style={styles.skillList}>
                {category.skills.map((skill, i) => (
                  <li key={i} style={styles.skillItem}>{skill}</li>
                ))}
              </ul>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '1.5rem',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid var(--border-color)',
  },
  title: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  skillItem: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    backgroundColor: 'var(--card-bg)',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid var(--border-color)',
  },
};

export default Skills;
