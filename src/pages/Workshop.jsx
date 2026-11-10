import React from 'react';
import { Lightbulb, PenTool, AlertTriangle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const workshops = [
  {
    id: 1,
    title: 'Bedah Akun Tetangga',
    goal: 'Latihan insting nge-review konten visual & copy.',
    icon: <Lightbulb size={28} />,
    instruction: 'Studi Kasus: Coba buka Instagram kampus lain atau akun duta kampus universitas lain. Cari 3 hal yang menurut kalian kurang oke dari tampilan feed atau caption unggahan terakhir mereka. Terus, obrolin bareng-bareng gimana caranya kalau Duta Kampus UIN Siber yang bikin, biar hasilnya jauh lebih keren dan berkarakter!',
    time: '5 Menit',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Tantangan Copywriter Kilat',
    goal: 'Latihan bikin kalimat pancingan (Hook) yang bikin kepo.',
    icon: <PenTool size={28} />,
    instruction: 'Topik: "Pengumuman Penerimaan Duta Kampus UIN Siber Angkatan 2026". Coba ubah bahasa pengumuman resmi dari kampus yang kaku banget itu jadi 3 variasi kalimat Hook (kalimat pertama) untuk video TikTok/Reels. Bikin yang bikin calon peserta auto berhenti scroll dan langsung pengen daftar!',
    time: '10 Menit',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Simulasi Balas Komen Pedas',
    goal: 'Latihan mental admin (Public Relations) pas ada masalah.',
    icon: <AlertTriangle size={28} />,
    instruction: 'Skenario: Wah, ada warganet yang marah-marah di kolom komentar akun Duta Kampus UIN Siber karena info tentang jadwal kegiatan kampus ternyata salah diposting. Coba ketik draf balasan komen yang profesional, adem, dan ngasih solusi biar reputasi kampus tetap terjaga dan netizen nggak makin ngamuk.',
    time: '7 Menit',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Workshop = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          style={{ textAlign: 'center' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Workshop <span className="text-gradient">Mandiri</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Praktik langsung untuk menguji pemahaman materi S.O.C.I.A.L. Kerjakan dengan alat yang sudah ada di HP Anda.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="responsive-grid"
          style={{ marginTop: '32px' }}
        >
          {workshops.map((ws) => (
            <motion.div 
              key={ws.id}
              variants={itemVariants}
              className="dynamic-panel"
            >
              <div className="media-container hide-on-mobile" style={{ aspectRatio: '16/9', borderRadius: '0' }}>
                 <img src={ws.image} alt={ws.title} />
              </div>
              
              <div className="panel-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ background: 'var(--bg-secondary)', color: 'var(--text-accent)', padding: '12px', borderRadius: '12px' }}>
                    {ws.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>{ws.title}</h3>
                </div>
                
                <p style={{ fontSize: '1rem', marginBottom: '32px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {ws.goal}
                </p>

                <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '12px', marginTop: 'auto', borderLeft: '4px solid var(--text-accent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-primary)' }}>
                    <Clock size={16} />
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800 }}>
                      Waktu Cuma: {ws.time}
                    </span>
                  </div>
                  <p className="hide-on-mobile" style={{ fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500, color: 'var(--text-secondary)' }}>
                    {ws.instruction}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Workshop;
