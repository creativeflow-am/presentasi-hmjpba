import React from 'react';
import { ArrowRight } from 'lucide-react';

const PROFILE_PHOTO = 'https://lh3.googleusercontent.com/d/1JMtTj-vATd68lSRQafVQoHumZE6mW_us';

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

          {/* Speaker Profile Card */}
          <div className="animate-fade-in delay-300" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {/* Animated ring + photo */}
            <div className="speaker-ring-wrapper">
              <div className="speaker-ring ring-outer" />
              <div className="speaker-ring ring-inner" />
              <div className="speaker-photo-frame">
                <img
                  src={PROFILE_PHOTO}
                  alt="Agung Ahdiansyah"
                  className="speaker-photo"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Agung+Ahdiansyah&size=256&background=6366f1&color=fff&bold=true'; }}
                />
              </div>
            </div>

            {/* Name + title */}
            <div className="speaker-info-card">
              <div className="speaker-badge">Pemateri</div>
              <h2 className="speaker-name">Agung Ahdiansyah</h2>
              <p className="speaker-title">Mid-level Social Media Specialist<br />& Multimedia Designer</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inline styles for responsive grid + speaker card */}
      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }

        .speaker-ring-wrapper {
          position: relative;
          width: 220px;
          height: 220px;
        }

        .speaker-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed var(--accent);
          opacity: 0.4;
          animation: spin-ring 18s linear infinite;
        }

        .ring-outer {
          inset: 0;
          animation-duration: 18s;
        }

        .ring-inner {
          inset: 12px;
          animation-direction: reverse;
          animation-duration: 12s;
        }

        @keyframes spin-ring {
          to { transform: rotate(360deg); }
        }

        .speaker-photo-frame {
          position: absolute;
          inset: 22px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--surface);
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.25);
          border: 3px solid var(--border);
        }

        .speaker-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .speaker-photo-frame:hover .speaker-photo {
          transform: scale(1.06);
        }

        .speaker-info-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px 28px;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .speaker-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          border-radius: 999px;
          padding: 3px 12px;
          margin-bottom: 10px;
        }

        .speaker-name {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0 0 6px 0;
        }

        .speaker-title {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
