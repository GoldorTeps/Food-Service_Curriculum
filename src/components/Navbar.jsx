import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { contactInfo } from '../data/cases'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  const NavLinks = ({ onClick }) => (
    <>
      {isHome ? (
        <a href="#trabajos" className="nav-link" onClick={onClick} style={{ fontSize: '0.88rem' }}>Proyectos</a>
      ) : (
        <Link to="/" className="nav-link" onClick={onClick} style={{ fontSize: '0.88rem' }}>Proyectos</Link>
      )}
      {isHome ? (
        <a href="#contacto" className="nav-link" onClick={onClick} style={{ fontSize: '0.88rem' }}>Contacto</a>
      ) : (
        <a href={`mailto:${contactInfo.email}`} className="nav-link" onClick={onClick} style={{ fontSize: '0.88rem' }}>Contacto</a>
      )}
      <a
        href={contactInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        aria-label="GitHub"
      >
        <Github size={18} strokeWidth={1.8} />
      </a>
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} strokeWidth={1.8} />
      </a>
      <a
        href="/portfolio-web/04_docs/cv-david-janer.pdf"
        download
        className="btn"
        style={{ padding: '8px 18px', fontSize: '0.83rem' }}
        onClick={onClick}
      >
        CV
      </a>
    </>
  )

  return (
    <>
      <nav
        className="glass"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          padding: '16px 0',
          borderBottom: scrolled ? '1px solid #eee' : '1px solid transparent',
          transition: 'border-color 0.3s'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/"
            style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}
            onClick={closeMenu}
          >
            David Janer
          </Link>

          {isMobile ? (
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
              aria-label="Menú"
            >
              {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <NavLinks />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          <NavLinks onClick={closeMenu} />
        </div>
      )}
    </>
  )
}

export default Navbar
