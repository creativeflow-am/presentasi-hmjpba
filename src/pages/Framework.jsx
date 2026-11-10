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
    description: 'Sebagai Duta Kampus, kamu adalah wajah digital UIN Siber. Sebelum posting apa pun, pahami dulu misi utama: apakah untuk memperkuat citra kampus, menarik calon mahasiswa, atau menjadi jembatan komunikasi antara kampus dan publik?',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'O',
    title: 'Objektif & Profil Audiens',
    subtitle: 'Kenali Siapa Follower-mu',
    icon: <Users size={24} />,
    description: 'Konten Duta Kampus harus menyasar audiens yang tepat. Apakah targetnya calon mahasiswa baru Gen-Z, orang tua yang ingin tahu tentang kampus, atau masyarakat luas yang ingin mengenal UIN Siber Syekh Nurjati Cirebon?',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'C',
    title: 'Penciptaan Konten Kreatif',
    subtitle: 'Bikin Orang Berhenti Scroll',
    icon: <Palette size={24} />,
    description: 'Paduan antara copywriting yang menggugah rasa ingin tahu dengan visual yang elegan, modern, dan merepresentasikan identitas kampus siber yang inovatif namun tetap Islami.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'I',
    title: 'Interaksi Santai & Komunitas',
    subtitle: 'Jangan Cuma Jadi Robot',
    icon: <MessageCircle size={24} />,
    description: 'Sebagai duta, kamu adalah wajah kampus di dunia digital. Membalas komentar dan DM dengan ramah dan profesional bukan sekadar etika, tapi kewajiban untuk menjaga reputasi institusi.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'A',
    title: 'Analisis Tanpa Bikin Pusing',
    subtitle: 'Lihat Data, Bukan Sekadar Likes',
    icon: <BarChart3 size={24} />,
    description: 'Jangan hanya fokus pada jumlah followers. Lihat konten mana yang paling banyak disebarkan (Shares) dan disimpan (Saves) — itu indikator konten kampus yang benar-benar berdampak.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'L',
    title: 'Manajemen Anti Burn-out',
    subtitle: 'Kerja Cerdas Divisi Kominfo',
    icon: <Workflow size={24} />,
    description: 'Menjadi Duta Kampus bukan sekadar tampil. Butuh sistem kerja yang terstruktur agar produktivitas konten tetap konsisten tanpa mengorbankan prestasi akademik dan kegiatan kemahasiswaan.',
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
            Enam langkah taktis membangun kehadiran digital Duta Kampus UIN Siber Syekh Nurjati Cirebon yang berpengaruh dan membanggakan institusi.
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
