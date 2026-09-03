import React from 'react';
import { ArrowRight, BookOpen, CalendarDays, PenTool, Image, PlayCircle, Users, MessageCircle, Grid, UserCircle, Briefcase, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const quickActions = [
  { id: 'materi', label: 'Modul', icon: <BookOpen size={24} />, route: '/framework' },
  { id: 'jadwal', label: 'Kalender', icon: <CalendarDays size={24} />, route: '/content-plan' },
  { id: 'tugas', label: 'Workshop', icon: <PenTool size={24} />, route: '/workshop' },
  { id: 'kuis', label: 'Kuis', icon: <PlayCircle size={24} />, route: '/quiz' },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ minHeight: 'calc(100vh - var(--desktop-nav-height))', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container">
          <div className="responsive-grid" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Panduan Sosmed
                <br />
                <span className="text-gradient">HMJ PBA UIN SSC</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.6 }}>
                Panduan komprehensif untuk Divisi Komunikasi dan Informasi <strong>HMJ Pendidikan Bahasa Arab UIN Siber Syekh Nurjati Cirebon</strong>. Membahas strategi konten hingga manajemen interaksi audiens secara profesional.
              </p>

              <Link to="/framework" className="btn-primary hide-on-mobile" style={{ marginBottom: '32px' }}>
                Mulai Belajar <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: '100%' }}
            >
              <Link to="/speaker-identity" className="speaker-profile-card" style={{ marginBottom: '24px', display: 'block', textDecoration: 'none', cursor: 'pointer' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Speaker Identity
                  <span style={{ marginLeft: 'auto', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-accent)', background: 'rgba(188,48,95,0.08)', padding: '3px 10px', borderRadius: '999px' }}>Khusus HMJ PBA</span>
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                  <img
                    src="https://lh3.googleusercontent.com/d/1Cx_vMD8YfVC2djzKHvEPayaZa_chAamV"
                    alt="Agung Ahdiansyah"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Agung+Ahdiansyah&size=160&background=BC305F&color=fff&bold=true'; }}
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '3px solid var(--bg-tertiary)', flexShrink: 0 }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>Agung Ahdiansyah</h4>
                    <p style={{ color: 'var(--text-accent)', fontWeight: 600, fontSize: '0.95rem' }}>Social Media Specialist</p>
                  </div>
                </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ background: 'var(--bg-secondary)', padding: '8px', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                        <Award size={20} />
                      </div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Certified Intermediate Multimedia Designer</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ background: 'var(--bg-secondary)', padding: '8px', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                        <Briefcase size={20} />
                      </div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Head of Kominfo DEMA FITK (2022)</p>
                    </div>
                    <a
                      href="https://www.instagram.com/hmjpba.uinssc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-accent)', marginTop: '4px' }}
                    >
                      @hmjpba.uinssc
                    </a>
                  </div>
              </Link>

              {/* Lanjut Belajar Button (Mobile Only) - Positioned after speaker identity */}
              <div className="hide-on-desktop" style={{ width: '100%', marginBottom: '24px' }}>
                <Link to="/framework" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Mulai Belajar <ArrowRight size={20} />
                </Link>
              </div>

              {/* Quick Actions Menu (Mobile Only) - Positioned after the button */}
              <motion.div
                className="quick-action-grid hide-on-desktop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.id}
                    className="quick-action-item"
                    onClick={() => navigate(action.route)}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="quick-action-circle" style={{ background: 'var(--text-accent)' }}>
                      {action.icon}
                    </div>
                    <span className="quick-action-label">{action.label}</span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
