import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const ProjectItem = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="card"
    style={{ padding: '0', overflow: 'hidden' }}
  >
    <Link to={`/caso/${item.category}/${item.id}`}>
      <div style={{
        aspectRatio: '3/2',
        backgroundColor: '#eee',
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid #eee'
      }} />
      <div style={{ padding: '25px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.tag}</span>
        <h3 style={{ marginTop: '10px', fontSize: '1.25rem' }}>{item.title}</h3>
        <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.description}</p>
      </div>
    </Link>
  </motion.div>
)
