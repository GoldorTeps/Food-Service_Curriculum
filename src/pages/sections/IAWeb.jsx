import React from 'react'
import { cases } from '../../data/cases'
import { motion } from 'framer-motion'

const IAWeb = () => {
  const items = cases.filter(c => c.category === 'ia-web');

  return (
    <div className="section-page" style={{ paddingTop: '150px' }}>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>IA & Web</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '750px', fontSize: '1.2rem', fontWeight: 500 }}>
          "La IA es una herramienta de producción real, no un elemento decorativo."
        </p>
        
        {/* Web Projects Section */}
        <div style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
            Proyectos Web Activos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {items.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {item.image && (
                  <div style={{
                    aspectRatio: '16/9',
                    backgroundColor: '#000',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    borderBottom: '1px solid #eee'
                  }} />
                )}
                <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {item.tag}
                    </span>
                    <h3 style={{ marginTop: '10px', fontSize: '1.6rem', marginBottom: '15px' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>{item.description}</p>
                  </div>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Visitar sitio ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Narrative Block */}
        <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px', borderRadius: '4px', border: 'none' }}>
          <h2 style={{ marginBottom: '30px' }}>Eficiencia Operativa</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Utilizo Inteligencia Artificial para optimizar flujos de trabajo críticos: desde la generación de copys y guiones hasta la automatización de procesos de diseño y desarrollo frontend. No se trata de sustituir el criterio, sino de acelerar la ejecución para producir más volumen con mayor precisión estratégica.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IAWeb
