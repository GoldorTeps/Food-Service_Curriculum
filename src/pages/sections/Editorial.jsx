import React from 'react'
import { cases } from '../../data/cases'
import { motion } from 'framer-motion'

const Editorial = () => {
  const items = cases.filter(c => c.category === 'editorial');

  return (
    <div className="section-page" style={{ paddingTop: '150px' }}>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Editorial y Maquetación</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '700px', fontSize: '1.1rem' }}>
          Orden y jerarquía. Organización de información compleja mediante guías de buenas prácticas y maquetación editorial orientada a la claridad y la legibilidad institucional.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '40px'
        }}>
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {item.image && (
                <div style={{
                  aspectRatio: '3/2',
                  backgroundColor: '#f5f5f5',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderBottom: '1px solid #eee'
                }} />
              )}
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.tag}</span>
                  <h3 style={{ marginTop: '10px', fontSize: '1.25rem' }}>{item.title}</h3>
                  <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '30px' }}>{item.description}</p>
                </div>
                
                {item.file && (
                  <a 
                    href={item.file} 
                    download 
                    className="btn" 
                    style={{ textAlign: 'center', width: '100%', fontSize: '0.8rem' }}
                  >
                    Descargar {item.file.endsWith('.pdf') ? 'PDF' : 'Original'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Editorial
