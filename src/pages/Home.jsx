import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { cases, contactInfo } from '../data/cases'

const FILTERS = [
  { key: 'all', label: 'Todo' },
  { key: 'dev', label: 'Desarrollo & IA' },
  { key: 'web', label: 'Web' },
  { key: 'comunicacion', label: 'Comunicación' },
  { key: 'editorial', label: 'Editorial' },
]

const SKILLS = [
  { category: 'Desarrollo & IA', items: ['Python', 'Playwright', 'OpenAI API', 'Docker', 'PostgreSQL', 'Railway'] },
  { category: 'Web & Frontend', items: ['JavaScript', 'React', 'Astro', 'HTML / CSS', 'Vite', 'Vercel'] },
  { category: 'Diseño & Editorial', items: ['InDesign', 'Illustrator', 'Photoshop', 'Canva'] },
  { category: 'Comunicación', items: ['Estrategia digital', 'RRSS', 'Edición de vídeo', 'Fotografía', 'Premiere Pro'] },
]

const WorkCard = ({ item, index }) => {
  const navigate = useNavigate()
  const isVideoThumb = item.image?.endsWith('.mp4')

  const handleClick = () => {
    if (item.url) {
      window.open(item.url, '_blank')
    } else if (item.file && !item.folder) {
      window.open(item.file, '_blank')
    } else {
      navigate(`/caso/${item.category}/${item.id}`)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="card"
      onClick={handleClick}
      style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
    >
      <div style={{ aspectRatio: '16/9', backgroundColor: '#0a0a0a', overflow: 'hidden', position: 'relative' }}>
        {item.image ? (
          isVideoThumb ? (
            <video
              src={item.image}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
              loading="lazy"
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          )
        ) : item.stack ? (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'flex-end',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {item.stack.map(s => (
                <span key={s} style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: '#777',
                  border: '1px solid #2a2a2a',
                  padding: '3px 8px',
                  borderRadius: '2px',
                  fontFamily: 'monospace'
                }}>{s}</span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div style={{ padding: '22px' }}>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          {item.tag}
        </span>
        <h3 style={{ marginTop: '8px', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.3 }}>
          {item.title}
        </h3>
        <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 20px',
      fontSize: '0.85rem',
      fontWeight: 600,
      border: '1px solid',
      borderColor: active ? 'var(--accent-color)' : 'var(--accent-muted)',
      backgroundColor: active ? 'var(--accent-color)' : 'transparent',
      color: active ? '#fff' : 'var(--text-primary)',
      cursor: 'pointer',
      transition: 'var(--transition-smooth)',
      fontFamily: 'var(--font-main)',
      borderRadius: '2px'
    }}
  >
    {label}
  </button>
)

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? cases
    : cases.filter(c => c.category === activeFilter)

  return (
    <div>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--text-secondary)',
              marginBottom: '24px'
            }}>
              David Janer · Desarrollador & Comunicador · Málaga
            </p>
            <h1 style={{ maxWidth: '820px', marginBottom: '18px' }}>
              Antes gestionaba redes.<br />Ahora, tengo un nuevo superpoder.
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginBottom: '28px',
              lineHeight: 1.6
            }}>
              Sé hablar con una IA.
            </p>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginBottom: '48px',
              lineHeight: 1.7
            }}>
              Empecé maquetando una revista de fútbol. Luego seis años llevando la comunicación de un ayuntamiento. Ahora programo.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#trabajos" className="btn">Ver proyectos</a>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-outline">Contactar</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STACK */}
      <section style={{ borderTop: '1px solid #eee', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '50px' }}>Stack & Herramientas</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px'
          }}>
            {SKILLS.map(group => (
              <div key={group.category}>
                <p style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text-secondary)',
                  marginBottom: '16px'
                }}>
                  {group.category}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {group.items.map(tool => (
                    <li key={tool} style={{ fontSize: '0.93rem', fontWeight: 500 }}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="trabajos">
        <div className="container">
          <h2 style={{ marginBottom: '36px' }}>Proyectos</h2>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <FilterButton
                key={f.key}
                label={f.label}
                active={activeFilter === f.key}
                onClick={() => setActiveFilter(f.key)}
              />
            ))}
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
                gap: '28px'
              }}
            >
              {filtered.map((item, i) => (
                <WorkCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section style={{ borderTop: '1px solid #eee', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '70px',
            alignItems: 'start'
          }}>
            <div>
              <h2 style={{ marginBottom: '28px' }}>Sobre mí</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Empecé maquetando la edición española de la revista oficial de la UEFA Champions League. Después dirigí la comunicación del Ayuntamiento de Torremolinos durante casi seis años: redes, campañas, prensa, vídeo, diseño. Ahora construyo herramientas con Python, Playwright y GPT-4 que automatizan lo que antes hacía a mano.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                Si necesitas automatización, un bot, una web o un pipeline de IA, lo construyo. Si necesitas contenido, diseño editorial o gestión de redes, también.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                {
                  label: 'Automatización & IA',
                  desc: 'Bots, scrapers y pipelines en producción. Railway, Docker, PostgreSQL, OpenAI.'
                },
                {
                  label: 'Desarrollo web',
                  desc: 'Webs con React y Astro. Diseño propio, despliegue en Vercel o Railway.'
                },
                {
                  label: 'Comunicación & Diseño',
                  desc: '+15 años en comunicación institucional, editorial y redes sociales.'
                },
              ].map(item => (
                <div key={item.label} style={{ borderLeft: '2px solid #e5e5e5', paddingLeft: '20px' }}>
                  <p style={{ fontWeight: 700, marginBottom: '6px', fontSize: '0.95rem' }}>{item.label}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ borderTop: '1px solid #eee', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ marginBottom: '16px' }}>¿Hablamos?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>{contactInfo.email}</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '44px' }}>{contactInfo.phone}</p>
          <a href={`mailto:${contactInfo.email}`} className="btn">Enviar correo</a>
        </div>
      </section>

    </div>
  )
}

export default Home
