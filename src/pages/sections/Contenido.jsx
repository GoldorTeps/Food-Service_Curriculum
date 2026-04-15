import React from 'react'
import { cases } from '../../data/cases'
import { motion } from 'framer-motion'
import { ProjectItem } from './Shared'

const Contenido = () => {
  const videoItems = cases.filter(c => c.category === 'contenido' && c.type === 'video');
  const otherItems = cases.filter(c => c.category === 'contenido' && c.type !== 'video');

  return (
    <div className="section-page" style={{ paddingTop: '150px' }}>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Contenido y Ejecución</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '750px', fontSize: '1.1rem' }}>
          Producción ágil de material nativo para canales sociales. Edición rápida, autónoma y orientada a impacto inmediato sin depender de estructuras externas.
        </p>

        {/* Highlighted Videos Section */}
        <div style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
            Vídeos de Edición Ágil
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '40px'
          }}>
            {videoItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ padding: '0', overflow: 'hidden' }}
              >
                <div style={{ backgroundColor: '#000', aspectRatio: '16/9' }}>
                  <video preload="metadata" 
                    controls 
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    poster={item.image}
                  >
                    <source src={item.image} type="video/mp4" />
                  </video>
                </div>
                <div style={{ padding: '30px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {item.tag}
                  </span>
                  <h3 style={{ marginTop: '10px', fontSize: '1.4rem' }}>{item.title}</h3>
                  <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Content Section */}
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
            Otros Recursos Visuales
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {otherItems.map((item, index) => (
              <ProjectItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contenido
