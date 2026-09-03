import React, { useState } from 'react';
import { Target, Users, Palette, MessageCircle, BarChart3, Workflow, ChevronRight } from 'lucide-react';

const methodSteps = [
  {
    id: 'S',
    title: 'Strategy & Setting the Ground',
    subtitle: 'Mindset Fundamental',
    icon: <Target size={20} />,
    description: 'Sebelum menyentuh aplikasi, seorang spesialis harus tahu *kenapa* akun itu ada. Media sosial adalah etalase digital, bukan sekadar tempat arsip foto.',
    points: [
      'Peran Asli SMS: Jembatan komunikasi antara brand dengan audiens.',
      'Instagram: Estetika, portofolio, dan interaksi (Stories/DM).',
      'TikTok: Reach organik, hiburan, dan edukasi snackable.',
      'LinkedIn/X: Thought leadership, diskusi profesional.'
    ],
    realExample: 'Daripada upload pamflet acara yang kaku di feed IG, ubah strateginya. Bikin video Reels pendek Behind the Scene panitia nyiapin acara, lalu arahin audiens buat cek link pendaftaran di bio.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'O',
    title: 'Objective & Audience Profiling',
    subtitle: 'Menentukan Target',
    icon: <Users size={20} />,
    description: 'Konten yang dibuat untuk semua orang, pada akhirnya tidak akan menarik bagi siapa pun. Harus ada target spesifik.',
    points: [
      'Menentukan Buyer Persona: Usia, minat, masalah, bahasa.',
      'Awareness: Bikin orang tahu (Metrik: Reach).',
      'Interest: Bikin orang betah (Metrik: Engagement).',
      'Conversion: Bikin orang bertindak (Metrik: Link Clicks).'
    ],
    realExample: 'Target Gen-Z: Susah belajar tata bahasa. Solusi kontennya: "Tips Bedain Isim & Fi\'il dalam 5 Detik Pakai Lagu Viral".',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'C',
    title: 'Content Creation & Visual Identity',
    subtitle: 'Eksekusi Kreatif',
    icon: <Palette size={20} />,
    description: 'Dapur utama. Kombinasi antara copywriting yang tajam dan visual yang berkelas.',
    points: [
      'Formula Copywriting (H.S.C): Hook, Story, CTA.',
      'Standar Visual: Branding konsisten, elegan, representatif.',
      'Quality Control Fotografi: Resolusi tinggi, otentik.'
    ],
    realExample: 'Pembuatan Hook: Jangan pakai judul "Pentingnya Belajar Bahasa Asing". Ganti jadi Hook yang nendang: "Nyesel Baru Tahu Sekarang! Ini 3 Skill Bahasa yang Bikin CV Kamu Dilirik HRD Multinasional."',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'I',
    title: 'Interaction & Community Management',
    subtitle: 'Membangun Komunitas',
    icon: <MessageCircle size={20} />,
    description: 'Medsos itu komunikasi dua arah. Kalau cuma posting lalu ditinggal, itu namanya baliho.',
    points: [
      'SOP Engagement: Membalas komen positif, komplain.',
      'Manajemen Informasi Publik: Klasifikasi informasi publik vs rahasia.'
    ],
    realExample: 'Kalau ada yang komen "Pendaftaran tutup kapan?", jangan cuma jawab "Tanggal 20". Jawab dengan empathy: "Halo Kak! Pendaftarannya ditutup tanggal 20 Agustus ya. Yuk buruan klik link di bio... 😊"',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'A',
    title: 'Analytics & Optimization',
    subtitle: 'Evaluasi Berbasis Data',
    icon: <BarChart3 size={20} />,
    description: 'Bekerja dengan angka agar tahu konten mana yang berhasil dan mana yang harus dibuang.',
    points: [
      'Membaca Insight: Membedakan Reach vs. Impressions.',
      'Menghitung ER: Kenapa Saves/Shares lebih berharga daripada Likes.',
      'A/B Testing: Bereksperimen dengan elemen yang berbeda.'
    ],
    realExample: 'Tarik data: "Meme Kampus" dapet banyak Share, "Cara Daftar" dapet Link Clicks. Pakai meme buat naikin followers, pakai tutorial buat ngejar pendaftar.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'L',
    title: 'Leverage & Workflow Management',
    subtitle: 'Sistem Kerja Profesional',
    icon: <Workflow size={20} />,
    description: 'Kreativitas yang tidak diatur sistem akan berujung burnout.',
    points: [
      'Content Calendar: Penjadwalan bulanan agar konsisten.',
      'Tools Riset: Google Trends, TikTok Creative Center.',
      'Tools Eksekusi: CapCut, Canva, Figma.',
      'Tools Scheduling: Meta Business Suite.'
    ],
    realExample: 'Tim dibagi rata: Si A riset trending, Si B bikin script, Si C syuting. Evaluasi bareng. Dokumentasi rapi di Google Sheets/Trello.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
  }
];

const SocialMethod = () => {
  const [activeTab, setActiveTab] = useState(methodSteps[0].id);

  return (
    <section className="section" id="method" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>The Framework</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            A systematic approach to mastering social media strategy, step by step.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Navigation / Tabs */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {methodSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className="minimal-panel"
                style={{ 
                  padding: '16px', 
                  textAlign: 'left', 
                  background: activeTab === step.id ? 'var(--bg-primary)' : 'transparent',
                  borderColor: activeTab === step.id ? 'var(--accent-primary)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'pointer',
                  boxShadow: activeTab === step.id ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: activeTab === step.id ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  color: activeTab === step.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}>
                  {step.id}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: activeTab === step.id ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {step.title}
                  </h3>
                </div>
                <ChevronRight size={16} color={activeTab === step.id ? 'var(--text-primary)' : 'transparent'} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div style={{ flex: '2 1 500px' }}>
            {methodSteps.map((step) => (
              <div 
                key={step.id} 
                className="minimal-panel animate-fade-in"
                style={{ 
                  padding: '40px', 
                  display: activeTab === step.id ? 'block' : 'none',
                  height: '100%',
                  background: 'var(--bg-primary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                      {step.icon}
                      <div>
                        <h2 style={{ fontSize: '1.5rem' }}>{step.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>{step.subtitle}</p>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '32px', fontStyle: 'italic', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '16px' }}>
                      "{step.description}"
                    </p>

                    <div style={{ marginBottom: '32px' }}>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '16px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Focus Areas</h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {step.points.map((point, idx) => (
                          <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-secondary)', marginTop: '10px', flexShrink: 0 }} />
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ flex: '1 1 250px' }}>
                    <div className="media-container" style={{ aspectRatio: '16/9', marginBottom: '24px' }}>
                      <img src={step.image} alt={step.title} />
                    </div>
                    
                    <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '8px' }}>
                      <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 700 }}>Real Example</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {step.realExample}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMethod;
