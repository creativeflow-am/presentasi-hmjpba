import React from 'react';
import { Lightbulb, PenTool, AlertTriangle, Clock } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Bedah Etalase',
    goal: 'Melatih insting audit konten.',
    icon: <Lightbulb size={24} />,
    instruction: 'Tampilkan dua profil medsos (kampus/brand). Cari 3 kelemahan visual atau copywriting dari akun tersebut.',
    time: '3 Menit',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80&fit=crop'
  },
  {
    id: 2,
    title: 'The 10-Minute Copywriter',
    goal: 'Melatih kecepatan bikin Hook.',
    icon: <PenTool size={24} />,
    instruction: 'Topik: "Pengumuman Libur Nasional". Ubah info kaku tersebut jadi 3 format Hook TikTok yang bikin penasaran.',
    time: '10 Menit',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80&fit=crop'
  },
  {
    id: 3,
    title: 'Krisis Simulator',
    goal: 'Melatih Community Management.',
    icon: <AlertTriangle size={24} />,
    instruction: 'Studi kasus: "Ada followers marah di komentar karena sertifikat lomba belum turun." Tulis draf balasan yang profesional dan menenangkan.',
    time: '5 Menit',
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&q=80&fit=crop'
  }
];

const WorkshopCards = () => {
  return (
    <section className="section" id="workshop">
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <span className="pill" style={{ marginBottom: '16px' }}>Interactive Session</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Format Praktikum</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Latihan taktis untuk mengasah insting dan pengambilan keputusan secara langsung.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {workshops.map((ws) => (
            <div 
              key={ws.id}
              className="minimal-panel"
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <div className="media-container" style={{ border: 'none', borderBottom: '1px solid var(--border-color)', borderRadius: '0', aspectRatio: '16/9' }}>
                 <img src={ws.image} alt={ws.title} />
              </div>
              
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ws.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>{ws.title}</h3>
                </div>
                
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '24px', fontWeight: 600 }}>
                  {ws.goal}
                </p>

                <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Clock size={14} color="var(--text-secondary)" />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                      Waktu: {ws.time}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {ws.instruction}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopCards;
