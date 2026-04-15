import React from 'react'
import { motion } from 'framer-motion'
import { cases, contactInfo } from '../data/cases'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Direct & Practical */}
      <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ maxWidth: '900px', marginBottom: '30px', fontWeight: 700 }}>
              Comunicación, contenido y campañas que se ejecutan
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '45px', lineHeight: '1.4' }}>
              Desde contenido diario para redes hasta la dirección de campañas completas. Soluciones integrales de comunicación orientadas a resultados.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/contenido" className="btn">Producción Ágil</Link>
              <Link to="/campanas" className="btn btn-outline">Dirección de Campañas</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pillars - Direct Access */}
      <section id="pilares" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            {/* Pillar 1: Execution */}
            <div className="card">
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Capacidad Diaria</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '10px' }}>Contenido y Ejecución</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                Edición rápida de vídeo, diseño para redes, fotografía y gestión de canales nativos. Autonomía técnica para producir material funcional sin intermediarios.
              </p>
              <Link to="/contenido" className="nav-link" style={{ fontWeight: 600 }}>Ver Ejemplos &rarr;</Link>
            </div>

            {/* Pillar 2: Strategy */}
            <div className="card">
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estrategia y Relato</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '10px' }}>Campañas y Proyectos</h2>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '15px', fontWeight: 400 }}>
                Dirección integral de narrativa y despliegue de acciones multicanal. Del concepto a la movilización real.
              </h3>
              <Link to="/campanas" className="nav-link" style={{ fontWeight: 600 }}>Ver Campañas &rarr;</Link>
            </div>

            {/* Pillar 3: Technology */}
            <div className="card">
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ventaja Técnica</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '10px' }}>IA & Web</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                Uso de Inteligencia Artificial para optimizar flujos de trabajo y creación de entornos web eficaces para la visibilidad de marca.
              </p>
              <Link to="/ia-web" className="nav-link" style={{ fontWeight: 600 }}>Ver Flujos IA &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Results Section */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '30px' }}>Ideas ejecutadas, no solo pensadas.</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                Combino la capacidad de diseño y edición con la visión política y estratégica necesaria para que el mensaje no solo se vea bien, sino que funcione.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '2rem' }}>100%</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Autonomía Técnica</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2rem' }}>Agilidad</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Respuesta en tiempo real</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', padding: '50px', border: 'none' }}>
              <p style={{ fontSize: '1.4rem', fontWeight: 500, fontStyle: 'italic', marginBottom: '30px' }}>
                "La IA es una herramienta de producción real, no un elemento decorativo. La uso para producir más rápido y con mayor precisión estratégica."
              </p>
              <span style={{ fontWeight: 700 }}>David</span>
              <br />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Comunicación y Estrategia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Simple */}
      <section id="contacto" style={{ textAlign: 'center', backgroundColor: '#fafafa', borderTop: '1px solid #eee' }}>
        <div className="container">
          <h2 style={{ marginBottom: '20px' }}>Hablemos de resultados</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
            {contactInfo.email} &bull; {contactInfo.phone}
          </p>
          <a href={`mailto:${contactInfo.email}`} className="btn">Contactar ahora</a>
        </div>
      </section>
    </div>
  )
}

export default Home
