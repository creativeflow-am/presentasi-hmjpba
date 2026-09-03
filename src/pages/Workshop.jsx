import React, { useState } from 'react';
import { Lightbulb, PenTool, AlertTriangle, Clock, ChevronDown, ChevronUp, Trophy, Target, Star, ExternalLink, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const challenges = [
  {
    id: 1,
    iconName: 'Search',
    tag: 'Audit & Review',
    title: 'Evaluasi Akun Eksternal',
    subtitle: 'Analisis komparatif konten media sosial',
    difficulty: 2,
    time: '5 Menit',
    color: '#BC305F',
    colorBg: 'rgba(188,48,95,0.08)',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80&fit=crop',
    goal: 'Asah insting mengevaluasi konten visual & caption secara profesional.',
    steps: [
      'Buka platform Instagram dan cari akun institusi mahasiswa sejenis',
      'Analisis publikasi terakhir mereka (desain grafis, takarir/caption, atau video)',
      'Identifikasi 3 aspek yang kurang optimal (contoh: visual kaku, takarir kurang interaktif)',
      'Diskusikan hal apa yang dapat diperbaiki jika konten tersebut dipublikasikan oleh HMJ PBA',
    ],
    tip: 'Tips: Pilihlah akun referensi yang paling relevan dengan segmentasi audiens Anda.',
  },
  {
    id: 2,
    iconName: 'Pen',
    tag: 'Copywriting',
    title: 'Penulisan Hook: Pengumuman Acara',
    subtitle: 'Transformasi informasi formal menjadi kalimat persuasif',
    difficulty: 3,
    time: '10 Menit',
    color: '#C03959',
    colorBg: 'rgba(192,57,89,0.08)',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&fit=crop',
    goal: 'Latihan menulis kalimat pembuka (Hook) yang langsung memancing atensi.',
    steps: [
      'Terdapat surat resmi: "Dengan hormat, diberitahukan bahwa pendaftaran Festival Jazirah Arab 2026 telah resmi dibuka..."',
      'Tugas: Transformasi kalimat tersebut menjadi 3 variasi kalimat pembuka (Hook)',
      'Variasi 1: Pendekatan pertanyaan yang memicu rasa ingin tahu',
      'Variasi 2: Pendekatan penyajian fakta atau statistik audiens',
      'Variasi 3: Pendekatan gaya bahasa keseharian mahasiswa PBA',
    ],
    tip: 'Prinsip Dasar: Kalimat pembuka terbaik adalah yang mampu menahan audiens pada 3 detik pertama.',
  },
  {
    id: 3,
    iconName: 'Alert',
    tag: 'Crisis PR',
    title: 'Manajemen Krisis Komunikasi',
    subtitle: 'Strategi merespons keluhan publik secara profesional',
    difficulty: 4,
    time: '7 Menit',
    color: '#E8813A',
    colorBg: 'rgba(232,129,58,0.08)',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80&fit=crop',
    goal: 'Latihan menjadi admin yang tenang, profesional, namun tetap solutif saat krisis.',
    steps: [
      'Skenario nyata di ruang publik:',
      '"Sertifikat Diklat saya belum keluar padahal sudah 2 bulan berlalu! Admin tidak profesional!"',
      'Tugas: Susun draf balasan yang bernada profesional, berempati, dan memberikan tenggat waktu penyelesaian masalah',
      'Kriteria: Hindari sikap defensif dan penggunaan kata yang dapat memicu perdebatan lanjutan',
    ],
    tip: 'Prinsip Dasar: Balas sesegera mungkin, akui masalah, dan berikan kepastian penyelesaian.',
  },
];

const DifficultyStars = ({ level }) => (
  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
    {[1, 2, 3, 4, 5].map(i => (
      <Star key={i} size={13}
        fill={i <= level ? '#F8A734' : 'transparent'}
        color={i <= level ? '#F8A734' : '#d1d5db'}
      />
    ))}
    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginLeft: '4px', fontWeight: 600 }}>
      {level <= 2 ? 'Mudah' : level === 3 ? 'Sedang' : 'Menantang'}
    </span>
  </div>
);

const ChallengeCard = ({ ws, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 90 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
      style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }} className="hide-on-mobile">
        <img src={ws.image} alt={ws.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${ws.color}99 0%, transparent 60%)` }} />
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          background: ws.color, color: '#fff',
          borderRadius: '999px', padding: '4px 14px',
          fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>{ws.tag}</div>
        <div style={{ position: 'absolute', top: '10px', right: '14px', fontSize: '1.8rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))', color: '#fff' }}>
          {ws.iconName === 'Search' ? <Search size={28} /> : ws.iconName === 'Pen' ? <PenTool size={28} /> : <AlertTriangle size={28} />}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Mobile badge */}
        <div className="hide-on-desktop" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
            {ws.iconName === 'Search' ? <Search size={24} /> : ws.iconName === 'Pen' ? <PenTool size={24} /> : <AlertTriangle size={24} />}
          </span>
          <span style={{ background: ws.colorBg, color: ws.color, borderRadius: '999px', padding: '3px 12px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase' }}>{ws.tag}</span>
        </div>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px', lineHeight: 1.25 }}>{ws.title}</h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '14px', fontStyle: 'italic' }}>{ws.subtitle}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: ws.color, fontWeight: 700, fontSize: '0.82rem' }}>
            <Clock size={13} /> {ws.time}
          </div>
          <DifficultyStars level={ws.difficulty} />
        </div>

        <div style={{ background: ws.colorBg, borderRadius: '10px', padding: '10px 14px', marginBottom: '16px', fontSize: '0.86rem', color: ws.color, fontWeight: 600, lineHeight: 1.5 }}>
          {ws.goal}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'var(--bg-secondary)', border: 'none', borderRadius: '12px',
            padding: '12px 16px', cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem',
            color: 'var(--text-primary)', marginTop: 'auto',
          }}
        >
          <span>{open ? 'Sembunyikan Langkah' : 'Lihat Langkah Praktikum'}</span>
          {open ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ marginTop: '12px', borderRadius: '12px', border: `1px solid ${ws.color}33`, overflow: 'hidden' }}>
                <ul style={{ margin: 0, padding: '16px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {ws.steps.map((step, i) => (
                    <li key={i} style={{
                      fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)',
                      paddingLeft: '8px',
                      ...(ws.id === 3 && i === 1 ? {
                        background: ws.colorBg, borderLeft: `3px solid ${ws.color}`,
                        borderRadius: '0 8px 8px 0', padding: '8px 12px', fontWeight: 700, color: ws.color,
                      } : {}),
                    }}>{step}</li>
                  ))}
                </ul>
                <div style={{ background: `${ws.color}11`, borderTop: `1px solid ${ws.color}22`, padding: '12px 16px', fontSize: '0.83rem', color: ws.color, fontWeight: 600 }}>
                  {ws.tip}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Workshop = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container">

        {/* Header */}
        <motion.div style={{ textAlign: 'center', marginBottom: '12px' }} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '12px' }}>
            Workshop <span className="text-gradient">Mandiri</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Tiga simulasi praktis dari kasus nyata pengelolaan media sosial HMJ PBA. Modul ini dirancang untuk melatih kemampuan analisis, penulisan, dan manajemen krisis.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {[
            { icon: <Target size={15} />, label: '3 Tantangan' },
            { icon: <Clock size={15} />, label: '~22 Menit Total' },
            { icon: <Trophy size={15} />, label: 'Level: Admin Pro' },
            { icon: <ExternalLink size={15} />, label: '@hmjpba.uinssc' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.83rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              {s.icon} {s.label}
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {challenges.map((ws, i) => <ChallengeCard key={ws.id} ws={ws} index={i} />)}
        </div>

        {/* Footer banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginTop: '48px', borderRadius: '20px', background: 'linear-gradient(135deg, #BC305F, #F8A734)', padding: '36px 40px', textAlign: 'center' }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '8px', color: '#fff' }}><Trophy size={48} /></div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Penyelesaian Simulasi</h3>
          <p style={{ opacity: 0.92, fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, color: '#fff' }}>
            Anda telah membekali diri dengan dasar pengelolaan komunikasi publik secara profesional untuk <strong>@hmjpba.uinssc</strong>. Terapkan strategi ini secara berkelanjutan.
          </p>
          <a
            href="https://www.instagram.com/hmjpba.uinssc/"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '20px', background: '#fff', color: '#BC305F',
              padding: '10px 28px', borderRadius: '999px',
              fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none',
            }}
          >
            <ExternalLink size={16} /> Kunjungi @hmjpba.uinssc
          </a>
        </motion.div>

      </div>
    </motion.div>
  );
};


export default Workshop;

