import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const contacts = [
    {
      name: 'Email',
      value: 'subhamdnathh@gmail.com',
      link: 'mailto:subhamdnathh@gmail.com',
      icon: <Mail size={24} />,
    },
    {
      name: 'GitHub',
      value: 'Sdn-0369',
      link: 'https://github.com/Sdn-0369',
      icon: <GithubIcon size={24} />,
    },
    {
      name: 'LinkedIn',
      value: 'Subham Debnath',
      link: 'https://www.linkedin.com/in/subham-debnath-447760269/',
      icon: <LinkedinIcon size={24} />,
    },
  ];

  return (
    <section id="contact" className="section reveal" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div style={styles.wrapper}>
          <p style={styles.description}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div style={styles.contactList}>
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.name !== 'Email' ? "_blank" : undefined}
                rel={contact.name !== 'Email' ? "noopener noreferrer" : undefined}
                style={styles.contactCard}
                className="contact-card"
              >
                <div style={styles.iconWrapper}>{contact.icon}</div>
                <div style={styles.textWrapper}>
                  <h3 style={styles.name}>{contact.name}</h3>
                  <p style={styles.value}>{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: '1.6',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '1.25rem',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'var(--transition)',
    textAlign: 'left',
    boxShadow: 'var(--shadow-sm)',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    backgroundColor: 'var(--card-bg)',
    color: 'var(--accent-color)',
    borderRadius: '8px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  value: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginTop: '0.25rem',
  },
};

export default Contact;
