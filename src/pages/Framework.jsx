import React from 'react';
import { Target, Users, Palette, MessageCircle, BarChart3, Workflow, ArrowRight, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const methodSteps = [
  {
    id: 'S',
    title: 'Strategi & Pijakan Awal',
    subtitle: 'Niat dan Tujuan Dasar',
    icon: <Target size={24} />,
    description: 'Sebelum mempublikasikan konten di @hmjpba.uinssc, identifikasi tujuan utama akun. Apakah sekadar menjadi arsip program kerja, atau berfungsi sebagai sarana edukasi interaktif bagi mahasiswa Pendidikan Bahasa Arab?',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'O',
    title: 'Objektif & Profil Audiens',
    subtitle: 'Kenali Siapa Follower-mu',
    icon: <Users size={24} />,
    description: 'Pahami demografi audiens @hmjpba.uinssc. Apakah mayoritas adalah mahasiswa baru, alumni, atau tenaga pendidik? Materi konten harus disesuaikan dengan kebutuhan dan karakteristik pengikut Anda.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'C',
    title: 'Penciptaan Konten Kreatif',
    subtitle: 'Menarik Perhatian Audiens',
    icon: <Palette size={24} />,
    description: 'Kombinasi gaya penulisan persuasif dengan desain visual modern yang mempertahankan nilai edukatif. Pendekatan ini dirancang khusus untuk meningkatkan daya tarik estetika informasi @hmjpba.uinssc.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'I',
    title: 'Interaksi Santai & Komunitas',
    subtitle: 'Interaksi Dua Arah',
    icon: <MessageCircle size={24} />,
    description: 'Bangun komunikasi dua arah dengan audiens. Respons setiap komentar secara profesional dan adakan sesi interaktif seperti kuis kebahasaan, sesi tanya jawab (QnA), atau jajak pendapat (Polling).',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'A',
    title: 'Analisis Tanpa Bikin Pusing',
    subtitle: 'Analisis Data Praktis',
    icon: <BarChart3 size={24} />,
    description: 'Fokus pada metrik yang relevan (seperti tingkat konversi dan interaksi). Evaluasi jenis konten yang paling banyak disimpan atau dibagikan oleh mahasiswa PBA sebagai dasar strategi bulan berikutnya.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'L',
    title: 'Manajemen Anti Burn-out',
    subtitle: 'Manajemen Waktu Efektif',
    icon: <Workflow size={24} />,
    description: 'Terapkan pembagian tugas yang efisien di Divisi Kominfo HMJ PBA. Pembuatan cadangan konten (content bank) sangat penting agar pengelolaan media sosial tidak mengganggu kewajiban akademik utama.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Framework = () => {
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
            Framework <span className="text-gradient">S.O.C.I.A.L</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Enam langkah taktis mengubah <strong>@hmjpba.uinssc</strong> dari papan pengumuman digital menjadi komunitas aktif mahasiswa Bahasa Arab.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="responsive-grid"
          style={{ marginTop: '32px' }}
        >
          {methodSteps.map((step) => (
            <motion.div key={step.id} variants={itemVariants}>
              <Link to={`/framework/${step.id}`} className="dynamic-panel" style={{ height: '100%' }}>
                <div className="media-container hide-on-mobile" style={{ aspectRatio: '16/9', borderRadius: '0' }}>
                  <img src={step.image} alt={step.title} />
                  <div style={{ 
                    position: 'absolute', top: '16px', right: '16px', width: '48px', height: '48px', 
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '1.5rem', fontWeight: 800, background: 'var(--bg-primary)', color: 'var(--text-accent)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }}>
                    {step.id}
                  </div>
                </div>

                <div className="panel-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: '12px', color: 'var(--text-accent)' }}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px', fontWeight: 600 }}>{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="hide-on-mobile" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                    {step.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', fontWeight: 700, fontSize: '0.95rem' }}>
                    Pelajari Detailnya <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Framework;
