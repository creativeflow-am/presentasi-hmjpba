import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SpeakerIdentity = () => {
  // Add a small script to ensure the iframe takes full height minus the navigation bar
  // Since the iframe contains its own styling, we just need to render it full width/height
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: '100%', height: 'calc(100vh - var(--desktop-nav-height))', overflow: 'hidden' }}
    >
      <iframe 
        src={`${import.meta.env.BASE_URL}speaker-identity.html`} 
        style={{ width: '100%', height: '100%', border: 'none' }} 
        title="Speaker Identity - Agung Ahdiansyah"
      />
    </motion.div>
  );
};

export default SpeakerIdentity;
