import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" id="home" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
          <div className="animate-slide-up" style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span className="pill">Masterclass 2026</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '24px' }}>
              The S.O.C.I.A.L Method.
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.8 }}>
              Transforming digital presence from static archives to dynamic communities. A masterclass for the modern Social Media Specialist.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="delay-200">
              <a href="#method" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Start Learning
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="media-container" style={{ aspectRatio: '4/3', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                alt="Social Media Concept" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Inline styles for responsive grid */}
      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
