import React from 'react'
import { motion } from 'framer-motion'
import { contactInfo } from '../data/cases'

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '150px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ marginBottom: '20px' }}>Hablemos de tu próximo proyecto</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '60px', lineHeight: '1.6' }}>
            Si buscas un perfil híbrido que no solo diseñe la estrategia, sino que se encargue de la ejecución técnica y creativa, estás en el lugar correcto. Respondo en menos de 24 horas.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '15px' }}>Email Directo</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Para consultas detalladas o propuestas de colaboración.</p>
              <a href={`mailto:${contactInfo.email}`} className="btn" style={{ width: '100%', textAlign: 'center' }}>
                Enviar Email ↗
              </a>
            </div>

            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '15px' }}>Teléfono</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Para una comunicación más ágil y directa.</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center' }}>
                {contactInfo.phone}
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', padding: '50px', border: 'none', textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              "Mejoraremos la comunicación de tu proyecto con una ejecución impecable y una estrategia orientada a resultados reales."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
