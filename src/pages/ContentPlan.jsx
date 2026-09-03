import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileSpreadsheet, Zap, CheckCircle2, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const ContentPlan = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          style={{ textAlign: 'center' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Menyusun <span className="text-gradient">Content Plan</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Mari bahas cara mudah membuat jadwal konten mingguan untuk HMJ PBA. Dengan strategi ini, akun himpunan akan tetap aktif tanpa membebani panitia secara berlebihan.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="responsive-grid"
          style={{ marginTop: '32px' }}
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="dynamic-panel" style={{ padding: '32px' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '16px', width: 'fit-content', color: 'var(--text-accent)', marginBottom: '24px' }}>
              <FileSpreadsheet size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>1. Tentukan Pilar Konten</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Sebelum menyusun jadwal, kita harus memiliki pedoman konten utama atau <strong>Content Pillar</strong>. Idealnya, HMJ PBA memiliki 4 jenis konten berikut:
            </p>
            <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '8px', listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--text-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Edukasi (40%):</strong> Konten seperti Tebak Mufrodat, Tips Nahwu, atau fakta unik Sejarah Islam.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--text-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Informasi (30%):</strong> Panduan pengisian KRS, jadwal ujian, atau beasiswa Timur Tengah.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--text-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Hiburan (20%):</strong> Konten ringan seputar kehidupan mahasiswa PBA untuk menjaga interaksi dan kedekatan emosional.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--text-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Promosi (10%):</strong> Publikasi seminar, Open Recruitment, atau penjualan merchandise.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="dynamic-panel" style={{ padding: '32px' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '16px', width: 'fit-content', color: 'var(--text-accent)', marginBottom: '24px' }}>
              <Zap size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>2. Sistem Batching</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Pengurus Divisi Kominfo memiliki kewajiban kuliah yang utama. Gunakan sistem <strong>Batching (Borongan)</strong>. Selesaikan proses pembuatan materi di awal minggu.
            </p>
            <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', marginTop: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>Siklus Mingguan:</h4>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)' }}>
                <li><strong>Senin:</strong> Rapat penentuan ide untuk 7 konten seminggu ke depan.</li>
                <li><strong>Selasa:</strong> Penulisan naskah dan caption oleh Copywriter.</li>
                <li><strong>Kamis:</strong> Eksekusi desain grafis dan pengambilan video.</li>
                <li><strong>Sabtu:</strong> Penjadwalan konten otomatis menggunakan Meta Business Suite.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabel Penjadwalan Konten */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="desktop-full-panel"
          style={{ marginTop: '32px' }}
        >
          <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Contoh Kalender Konten (Content Calendar)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Format penjadwalan standar agensi kreatif yang bisa langsung diterapkan oleh Divisi Kominfo/Media. 
            Fokus pada pilar konten, format yang sedang tren, dan status pengerjaan yang jelas.
          </p>
          <div style={{ overflowX: 'auto', paddingBottom: '16px' }}>
            <table className="table-modern">
              <thead>
                <tr>
                  <th>Jadwal Terbit</th>
                  <th>Pilar Konten</th>
                  <th>Format & Visual</th>
                  <th>Topik / Hook (Pancingan)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Senin, 10:00</td>
                  <td>Edukasi</td>
                  <td>Instagram Carousel (Slide)</td>
                  <td><strong>"3 Perangkat AI Wajib bagi Mahasiswa"</strong><br/><span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Fokus pada penyelesaian masalah tugas akademik.</span></td>
                  <td><span className="status-badge badge-published">TAYANG</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Rabu, 16:30</td>
                  <td>Hiburan / Relatable</td>
                  <td>TikTok / IG Reels (Video 15s)</td>
                  <td><strong>"Sudut Pandang: Revisi Proposal dari Dosen Pembimbing"</strong><br/><span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Menggunakan audio populer dengan pendekatan komedi ringan.</span></td>
                  <td><span className="status-badge badge-scheduled">TERJADWAL</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Jumat, 19:00</td>
                  <td>Hard Selling (Info)</td>
                  <td>Single Post Graphic</td>
                  <td><strong>"Pendaftaran Volunteer Gebyar Bahasa Arab 2026 Resmi Dibuka!"</strong><br/><span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Judul utama menonjol, dengan instruksi tindakan (CTA) jelas di profil.</span></td>
                  <td><span className="status-badge badge-draft">DRAFT / REVISI</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Real Example Social Media Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '32px', display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Contoh Output di Instagram</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.8 }}>
              Ini adalah contoh bagaimana sebuah konten edukasi (Pilar Edukasi) diimplementasikan secara visual di Instagram. Desain menggunakan pendekatan tipografi yang bersih, tidak kaku, namun tetap mempertahankan identitas akademis mahasiswa Bahasa Arab.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '12px 24px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>Tipografi Bersih</div>
              <div style={{ background: 'var(--bg-secondary)', padding: '12px 24px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>Warna Konsisten</div>
              <div style={{ background: 'var(--bg-secondary)', padding: '12px 24px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>Caption Memancing Interaksi</div>
            </div>
          </div>
          
          <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
            <div className="social-mockup" style={{ width: '100%', maxWidth: '380px' }}>
              <div className="social-mockup-header">
                <div className="social-mockup-avatar">
                   <img
                     src="/hmjpba-avatar.jpg"
                     alt="HMJ PBA"
                     onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=HMJ+PBA&size=80&background=BC305F&color=fff&bold=true'; }}
                     style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                   />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '2px' }}>hmjpba.uinssc</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>HMJ Pendidikan Bahasa Arab • UIN SSC</p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop" 
                alt="Contoh Konten Edukasi Bahasa Arab" 
                className="social-mockup-image"
              />
              
              <div className="social-mockup-footer">
                <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  <Heart size={24} />
                  <MessageCircle size={24} />
                  <Send size={24} />
                  <div style={{ flex: 1 }}></div>
                  <Bookmark size={24} />
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>124 Suka</p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, marginRight: '8px' }}>hmjpba.uinssc</span>
                  Sering bingung membedakan penggunaan harokat dalam kalimat? Mari bahas 5 jebakan umum yang sering terjadi saat membaca teks Arab. Simpan postingan ini untuk persiapan ujian! #HMJBahasaArab #UINSiberCirebon #BelajarArab
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContentPlan;
