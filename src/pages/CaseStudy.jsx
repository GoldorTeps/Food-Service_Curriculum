import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import { cases, contactInfo } from '../data/cases'
import { videoManifest } from '../data/videoManifest'

const CaseStudy = () => {
  const { category, slug } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  const project = cases.find(c => c.id === slug)
  const folderPath = project?.folder || `${category}/${slug}`
  
  // ROBUST VIDEO DISCOVERY:
  // Check all keys in the manifest that might match the project ID, slug, or folder
  const projectVideos = Object.keys(videoManifest).reduce((acc, key) => {
    const normalizedKey = key.toLowerCase().replace(/-/g, '').replace(/_/g, '');
    const normalizedSlug = slug.toLowerCase().replace(/-/g, '').replace(/_/g, '');
    const normalizedFolder = folderPath.toLowerCase().replace(/-/g, '').replace(/_/g, '');

    if (
      key.includes(slug) || 
      normalizedKey.includes(normalizedSlug) || 
      normalizedKey.includes(normalizedFolder) ||
      normalizedFolder.includes(normalizedKey)
    ) {
      return [...acc, ...videoManifest[key]];
    }
    return acc;
  }, []);
  
  // Deduplicate and ensure absolute paths
  const uniqueVideos = [...new Set(projectVideos)].map(path => {
    return path.startsWith('/') ? path : `/${path}`;
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/portfolio-web/01_casos/${folderPath}/index.md`)
        if (response.ok) {
          const text = await response.text()
          setContent(text)
        } else {
          setContent('# ERROR\nNo se pudo visualizar el contenido de este caso. Es posible que el archivo Markdown no exista aún.')
        }
      } catch (err) {
        setContent('# Error de conexión al cargar el material.')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
    window.scrollTo(0, 0)
  }, [category, slug, project, folderPath])

  if (loading) return <div className="container" style={{ padding: '200px 0' }}>Cargando caso...</div>

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="case-study-page"
      style={{ paddingTop: '150px' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" style={{ color: 'var(--text-secondary)', marginBottom: '40px', display: 'inline-block' }}>
          &larr; Volver a proyectos
        </Link>
        
        <div className="markdown-content">
          <ReactMarkdown 
            components={{
              h1: ({node, ...props}) => <h1 style={{ fontSize: '3.5rem', marginBottom: '60px' }} {...props} />,
              h2: ({node, ...props}) => <h2 style={{ fontSize: '1.5rem', marginTop: '60px', marginBottom: '20px', borderBottom: '1px solid var(--accent-muted)', paddingBottom: '10px' }} {...props} />,
              p: ({node, ...props}) => <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.8' }} {...props} />,
              li: ({node, ...props}) => <li style={{ color: 'var(--text-secondary)', marginBottom: '10px', marginLeft: '20px' }} {...props} />,
              a: ({node, href, ...props}) => {
                if (href?.toLowerCase().endsWith('.mp4')) {
                  return <div style={{ margin: '40px 0' }}><VideoPlayer src={href} label={props.children} /></div>
                }
                return <a href={href} style={{ color: 'var(--accent-color)', textDecoration: 'underline' }} {...props} />
              },
              img: ({node, src, ...props}) => {
                if (src?.toLowerCase().endsWith('.mp4')) return <VideoPlayer src={src} />
                return <img src={src} style={{ maxWidth: '100%', margin: '40px 0', borderRadius: '4px' }} {...props} />
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Automatic Video Gallery */}
        {uniqueVideos.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', borderBottom: '1px solid var(--accent-muted)', paddingBottom: '10px' }}>
              Material Audiovisual ({uniqueVideos.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
              {uniqueVideos.map((v, i) => (
                <VideoPlayer key={v} src={v} label={`Vídeo: ${v.split('/').pop()}`} />
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div style={{ marginTop: '100px', padding: '60px', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px' }}>¿Te interesa este trabajo?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Puedo hacer algo similar para tu proyecto o equipo.</p>
          <a href={`mailto:${contactInfo.email}`} className="btn">Contactar</a>
        </div>
      </div>
    </motion.div>
  )
}

const VideoPlayer = ({ src, label }) => (
  <div style={{ borderRadius: '4px', overflow: 'hidden', backgroundColor: '#000', border: '1px solid var(--accent-muted)' }}>
    <video preload="metadata" 
      controls 
      style={{ width: '100%', display: 'block' }}
      controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
    </video>
    {label && (
      <div style={{ padding: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', backgroundColor: 'var(--bg-secondary)' }}>
        {label}
      </div>
    )}
  </div>
)

export default CaseStudy
