import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { archiveImages } from '../data/archiveImages'

const Archive = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(archiveImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % archiveImages.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(archiveImages[nextIdx]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + archiveImages.length) % archiveImages.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(archiveImages[prevIdx]);
  };

  return (
    <div className="archive-page" style={{ paddingTop: '150px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{ marginBottom: '20px' }}>Archivo Visual Completo</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
          Explora la totalidad del registro documental, fotografía de eventos y piezas de diseño. 
          Haz clic en cualquier imagen para ampliarla y navegar por el archivo.
        </p>

        {/* Masonry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {archiveImages.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 10) * 0.05 }}
              onClick={() => openLightbox(index)}
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                backgroundColor: '#111',
                cursor: 'pointer',
                aspectRatio: '1/1'
              }}
            >
              <img 
                src={src} 
                alt={`Archivo ${index}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }} 
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '40px'
            }}
          >
            {/* Close Button */}
            <button onClick={closeLightbox} style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 2100
            }}>&times;</button>

            {/* Navigation Buttons */}
            <button onClick={prevImage} style={navButtonStyle('left')}>&#8592;</button>
            <button onClick={nextImage} style={navButtonStyle('right')}>&#8594;</button>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
            >
              <img 
                src={selectedImage} 
                alt="Selected" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '85vh', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  borderRadius: '2px'
                }} 
              />
              <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Imagen {currentIndex + 1} de {archiveImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const navButtonStyle = (side) => ({
  position: 'absolute',
  [side]: '40px',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'white',
  padding: '20px',
  fontSize: '1.5rem',
  cursor: 'pointer',
  zIndex: 2100,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  transition: 'var(--transition-smooth)'
});

export default Archive
