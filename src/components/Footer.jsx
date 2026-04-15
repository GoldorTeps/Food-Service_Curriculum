import React from 'react'
import { contactInfo } from '../data/cases'

const Footer = () => {
  return (
    <footer id="contacto" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg-secondary)',
      marginTop: '100px',
      borderTop: '1px solid #eee'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px'
        }}>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Contacto</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Disponible para proyectos de comunicación estratégica, narrativa y producción visual.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-outline" style={{ marginBottom: '10px', display: 'inline-block', marginRight: '10px' }}>
                {contactInfo.email}
              </a>
              <p style={{ fontWeight: 600 }}>{contactInfo.phone}</p>
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Siguientes Pasos</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Te invito a explorar las secciones de Comunicación y Campañas para entender mi enfoque pragmático y orientado a resultados.
            </p>
          </div>
        </div>
        <div style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid #eee',
          color: 'var(--text-secondary)',
          fontSize: '0.8rem',
          textAlign: 'center'
        }}>
          &copy; {new Date().getFullYear()} David Janer. Comunicación y Estrategia.
        </div>
      </div>
    </footer>
  )
}

export default Footer
