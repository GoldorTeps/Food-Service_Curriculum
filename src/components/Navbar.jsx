import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Contenido', path: '/contenido' },
    { name: 'Campañas', path: '/campanas' },
    { name: 'Vídeo', path: '/video' },
    { name: 'Editorial', path: '/editorial' },
    { name: 'IA & Web', path: '/ia-web' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '15px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          fontSize: '1.4rem', 
          color: 'var(--text-primary)', 
          letterSpacing: '-0.03em', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <span style={{ fontWeight: 800 }}>David</span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>Janer</span>
        </Link>
        <div style={{ display: 'flex', gap: '30px' }}>
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ fontSize: '0.9rem', fontWeight: 500 }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
