import React from 'react'
import { cases } from '../../data/cases'
import { ProjectItem } from './Shared'

const Video = () => {
  // We can differentiate levels here visually if needed
  const items = cases.filter(c => c.type === 'video');

  return (
    <div className="section-page" style={{ paddingTop: '150px' }}>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Producción Audiovisual</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '700px', fontSize: '1.1rem' }}>
          Del guion a la post-producción. Desarrollo contenidos en dos niveles: edición ágil para impacto diario en redes y dirección cinematográfica para piezas de campaña de alta producción.
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

export default Video
