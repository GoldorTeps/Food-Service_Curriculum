import React from 'react'
import { cases } from '../../data/cases'
import { ProjectItem } from './Shared'

const Campanas = () => {
  const items = cases.filter(c => c.category === 'campanas');

  return (
    <div className="section-page" style={{ paddingTop: '150px' }}>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Campañas y Proyectos</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '700px', fontSize: '1.1rem' }}>
          Dirección y despliegue de comunicación estratégica. Proyectos integrales que combinan narrativa, diseño y acciones multicanal para transformar ideas en movilización y resultados reales.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '40px'
        }}>
          {items.map((item, index) => (
            <ProjectItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Campanas
