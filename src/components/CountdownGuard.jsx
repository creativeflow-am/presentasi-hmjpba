import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Clock, Calendar, Unlock } from 'lucide-react';

const RELEASE_DATE = new Date('2026-09-15T01:00:00+07:00').getTime();

const CountdownGuard = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isBypassed, setIsBypassed] = useState(localStorage.getItem('admin_bypass') === 'true');
  const [lockClicks, setLockClicks] = useState(0);

  // Admin Modal States
  const [adminModalState, setAdminModalState] = useState('hidden'); // hidden, password, message
  const [adminPassword, setAdminPassword] = useState('');
  const [adminMessage, setAdminMessage] = useState('');

  useEffect(() => {
    // If bypassed or date has passed initially, no need to run timer
    if (isBypassed || Date.now() >= RELEASE_DATE) {
      setIsUnlocked(true);
      return;
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = RELEASE_DATE - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsUnlocked(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isBypassed]);

  const handleLockClick = () => {
    const newClicks = lockClicks + 1;
    setLockClicks(newClicks);

    if (newClicks >= 5) {
      setLockClicks(0);
      setAdminPassword('');
      setAdminMessage('');
      setAdminModalState('password');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (adminPassword === "12345") {
      localStorage.setItem('admin_bypass', 'true');
      setIsBypassed(true);
      setIsUnlocked(true);
      setAdminModalState('hidden');
    } else {
      setAdminMessage("Sandi salah! Akses ditolak.");
      setAdminModalState('message');
    }
  };

  const closeAdminModal = () => {
    setAdminModalState('hidden');
    setAdminPassword('');
    setAdminMessage('');
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  const TimeBox = ({ value, label }) => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      background: 'var(--bg-secondary)', padding: '16px', borderRadius: '16px',
      minWidth: '80px', border: '1px solid var(--border-color)'
    }}>
      <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-accent)', lineHeight: 1 }}>
        {value.toString().padStart(2, '0')}
      </span>
      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: 'calc(100vh - var(--desktop-nav-height))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '20px', textAlign: 'center'
      }}
    >
      <div 
        style={{ 
          background: 'rgba(188,48,95,0.1)', padding: '24px', borderRadius: '50%', 
          marginBottom: '24px', cursor: 'pointer', color: 'var(--text-accent)'
        }}
        onClick={handleLockClick}
      >
        <Lock size={48} />
      </div>

      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
        Akan Segera Hadir
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '40px', lineHeight: 1.6 }}>
        Halaman ini sedang dipersiapkan dan akan terbuka secara otomatis untuk seluruh peserta pada <strong>15 September 2026, 01:00 WIB</strong>.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <TimeBox value={timeLeft.days} label="Hari" />
        <TimeBox value={timeLeft.hours} label="Jam" />
        <TimeBox value={timeLeft.minutes} label="Menit" />
        <TimeBox value={timeLeft.seconds} label="Detik" />
      </div>

      <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <Calendar size={16} /> 15 September 2026 &nbsp;&bull;&nbsp; <Clock size={16} /> 01:00 WIB
      </div>

      {/* SECRET ADMIN MODAL */}
      <AnimatePresence>
        {adminModalState !== 'hidden' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 100, 
              background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
            }}
            onClick={closeAdminModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-primary)', padding: '32px', borderRadius: '24px',
                width: '100%', maxWidth: '400px', border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)', textAlign: 'left'
              }}
            >
              {adminModalState === 'password' && (
                <form onSubmit={handlePasswordSubmit}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', color: 'var(--text-accent)' }}>
                    <Unlock size={24} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>Bypass Admin</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Masukkan sandi rahasia untuk membuka akses ke halaman ini:</p>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    autoFocus
                    placeholder="•••••"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid var(--border-color)',
                      marginBottom: '24px', fontSize: '1rem', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button type="button" onClick={closeAdminModal} style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontWeight: 700, cursor: 'pointer' }}>Batal</button>
                    <button type="submit" style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: 'var(--text-accent)', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Lanjut</button>
                  </div>
                </form>
              )}

              {adminModalState === 'message' && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', background: 'var(--bg-secondary)', padding: '16px', borderRadius: '50%', color: 'var(--text-primary)', marginBottom: '24px' }}>
                    <Lock size={40} color="#ef4444" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Gagal!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>{adminMessage}</p>
                  <button onClick={closeAdminModal} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Tutup</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CountdownGuard;
