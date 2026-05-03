import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { contactInfo } from '../data/cases'

const Footer = () => (
  <footer style={{
    padding: '32px 0',
    backgroundColor: 'var(--bg-secondary)',
    borderTop: '1px solid #eee'
  }}>
    <div className="container" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>David Janer</span>
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
        &copy; {new Date().getFullYear()} · Desarrollador & Comunicador · Málaga
      </span>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--text-secondary)', fontSize: '0.83rem' }}>
          {contactInfo.email}
        </a>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
          aria-label="GitHub"
        >
          <Github size={16} strokeWidth={1.8} />
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
          aria-label="LinkedIn"
        >
          <Linkedin size={16} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
