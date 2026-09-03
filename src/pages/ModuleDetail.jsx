import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, Palette, MessageCircle, BarChart3, Workflow, BookOpen, AlertCircle, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const extraMaterial = {
  'S': {
    title: 'Strategi & Pijakan Awal',
    icon: <Target size={32} />,
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop',
    extraTitle: 'Menemukan Karakter Organisasi',
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Sebagai tim media sosial HMJ PBA, langkah pertama adalah menyamakan visi dengan pengurus inti. Instagram himpunan <strong>bukanlah</strong> sekadar mading tempat menempel pengumuman. Ini adalah "wajah" mahasiswa Bahasa Arab di ranah digital.</p>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>1. Karakter Akun (Brand Persona)</h3>
        <p>Tentukan persona akun HMJ PBA, misalnya:</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Si Akademisi:</strong> Edukatif, terstruktur, dan menggunakan bahasa baku yang elegan.</li>
          <li><strong>Senior Inovatif:</strong> Pendekatan yang lebih direkomendasikan. Santai, informatif, namun tetap menjaga profesionalitas saat membahas akademik.</li>
          <li><strong>Pusat Layanan Mahasiswa:</strong> Cepat tanggap dan to-the-point dalam membantu mahasiswa baru.</li>
        </ul>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>2. Nada Bicara (Tone of Voice)</h3>
        <p>Nada bicara harus disesuaikan dengan konteks konten:</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Informasi Akademik: <em>Tegas, informatif, dan membantu.</em></li>
          <li>Konten Interaktif: <em>Santai dan memancing diskusi.</em></li>
          <li>Peringatan Hari Besar Islam: <em>Elegan dan religius.</em></li>
        </ul>

        <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--text-accent)', marginTop: '16px' }}>
          <h4 style={{ color: 'var(--text-accent)', marginBottom: '8px' }}>Catatan Penting</h4>
          <p>Hindari mengunggah pamflet acara secara mentah. Ubah format pengumuman menjadi <strong>Carousel (Slide)</strong> yang menjelaskan urgensi acara bagi mahasiswa, sehingga lebih menarik secara visual dan kontekstual.</p>
        </div>
      </div>
    )
  },
  'O': {
    title: 'Objektif & Profil Audiens',
    icon: <Users size={32} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    extraTitle: 'Analisis Target Audiens',
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Setiap konten harus memiliki target audiens yang spesifik. Mari kita bedah segmentasi pengikut (followers) akun himpunan:</p>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>1. Pemetaan Demografi (Persona)</h3>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Mahasiswa Baru:</strong> Membutuhkan informasi sistem akademik, tips belajar dasar, dan ingin memperluas relasi kampus.</li>
          <li><strong>Mahasiswa Pertengahan:</strong> Fokus pada informasi beasiswa, organisasi, kepanitiaan, atau sertifikasi keahlian.</li>
          <li><strong>Mahasiswa Tingkat Akhir:</strong> Mencari informasi karir, tips penyelesaian tugas akhir, dan hiburan ringan pelepas penat.</li>
          <li><strong>Siswa SMA/Calon Mahasiswa:</strong> Mencari tahu budaya kampus dan prospek prodi Pendidikan Bahasa Arab.</li>
        </ul>
      </div>
    )
  },
  'C': {
    title: 'Penciptaan Konten & Identitas',
    icon: <Palette size={32} />,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
    extraTitle: 'Formula Copywriting',
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Gunakan pendekatan psikologi komunikasi untuk menulis takarir (caption) yang efektif, dibandingkan menggunakan format surat resmi.</p>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Formula 1: P.A.S (Problem, Agitate, Solve)</h3>
        <p>Pendekatan ini efektif untuk mempromosikan program kerja edukatif (misal: Bimbingan Belajar).</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Problem:</strong> "Kesulitan membedakan kaidah tata bahasa Arab dasar saat menghadapi teks?"</li>
          <li><strong>Agitate:</strong> "Persiapan UTS yang kurang matang dapat berdampak pada Indeks Prestasi semester ini."</li>
          <li><strong>Solve:</strong> "HMJ PBA memfasilitasi program Kelas Intensif yang dipandu langsung oleh mentor terbaik. Daftar sekarang melalui tautan di profil."</li>
        </ul>

        <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', marginTop: '16px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Tips Visual</h4>
          <p>Pastikan desain konsisten dengan warna identitas universitas. Gunakan tipografi Arab yang bersih dan modern seperti font <em>Tajawal</em> atau <em>Cairo</em> untuk meningkatkan keterbacaan.</p>
        </div>
      </div>
    )
  },
  'I': {
    title: 'Interaksi & Komunitas',
    icon: <MessageCircle size={32} />,
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
    extraTitle: 'Manajemen Komunitas Interaktif',
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Tim media sosial berfungsi sebagai <em>Community Manager</em>. Interaksi adalah kunci utama algoritma.</p>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>1. Strategi Keterlibatan (Engagement)</h3>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>Golden Time:</strong> Respon komentar dengan cepat pada 30 menit pertama setelah unggahan diterbitkan untuk mengoptimalkan visibilitas algoritma.</li>
          <li><strong>Merespon dengan Pertanyaan:</strong> Jaga alur diskusi agar tetap hidup. Jika ada audiens mengomentari acara, balas dengan menanyakan pengalaman mereka selama acara tersebut.</li>
        </ul>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>2. Manajemen Krisis</h3>
        <p>Skenario jika terjadi keluhan dari mahasiswa terkait program kerja (misal: keterlambatan distribusi sertifikat):</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Tetap Profesional:</strong> Hindari konfrontasi terbuka di kolom komentar publik.</li>
          <li><strong>Tunda Konten Hiburan:</strong> Hentikan jadwal unggahan yang bersifat hiburan saat situasi organisasi sedang genting.</li>
          <li><strong>Beralih ke Jalur Pribadi:</strong> Arahkan keluhan tersebut untuk diselesaikan secara langsung melalui Pesan Langsung (Direct Message) agar lebih terkontrol.</li>
        </ul>
      </div>
    )
  },
  'A': {
    title: 'Analisis & Optimasi',
    icon: <BarChart3 size={32} />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    extraTitle: 'Membaca Data Secara Tepat',
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Jumlah 'Suka' (Likes) bukan satu-satunya metrik utama. Evaluasi kinerja berdasarkan metrik yang lebih relevan.</p>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>1. Mengukur Kebermanfaatan Konten</h3>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Metrik <strong>Saves (Disimpan)</strong> tinggi mengindikasikan bahwa materi tersebut sangat informatif dan layak dipelajari ulang oleh audiens.</li>
          <li>Metrik <strong>Shares (Dibagikan)</strong> tinggi mengindikasikan relevansi sosial yang kuat di kalangan mahasiswa.</li>
        </ul>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>2. Melacak Efektivitas Promosi Acara</h3>
        <p>Gunakan tautan khusus (Link Tracking) untuk mengidentifikasi dari platform mana peserta pendaftaran paling banyak berasal:</p>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'monospace', color: 'var(--text-accent)' }}>
          <li>bit.ly/Seminar-IGBio</li>
          <li>bit.ly/Seminar-Story</li>
          <li>bit.ly/Seminar-WAGrup</li>
        </ul>
      </div>
    )
  },
  'L': {
    title: 'Manajemen Alur Kerja',
    icon: <Workflow size={32} />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    extraTitle: 'Sistem Kerja Terstruktur',
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Distribusi tugas yang baik akan mencegah kelelahan (burn-out) pada panitia pelaksana media sosial.</p>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>1. Delegasi Tugas</h3>
        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Konseptor:</strong> Merancang ide konten, tabel penjadwalan, dan draf tulisan.</li>
          <li><strong>Kreatif:</strong> Mengeksekusi aset visual dan pengeditan media.</li>
          <li><strong>Admin:</strong> Mengelola penjadwalan sistematis dan interaksi audiens.</li>
        </ul>

        <h3 style={{ marginTop: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>2. Alur Publikasi</h3>
        <p>Terapkan Standar Operasional Prosedur (SOP) untuk menghindari kesalahan fatal:</p>
        <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', textAlign: 'center', fontWeight: 600 }}>
          Draf Ide ➔ Persetujuan Ketua ➔ Eksekusi Kreatif ➔ Uji Coba Keterbacaan ➔ Penjadwalan Sistematis.
        </div>
      </div>
    )
  }
};

const ModuleDetail = () => {
  const { id } = useParams();
  const data = extraMaterial[id?.toUpperCase()];

  if (!data) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px', minHeight: '60vh' }}>
        <AlertCircle size={48} color="var(--text-secondary)" style={{ marginBottom: '16px' }} />
        <h2 style={{ marginBottom: '16px' }}>Modul Tidak Ditemukan</h2>
        <Link to="/framework" className="btn-primary">Kembali ke Menu Utama</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ height: '320px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <motion.img 
          src={data.image} 
          alt={data.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 5%, transparent 60%)' }} />
        
        <div className="container" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: '32px' }}>
          <motion.div 
            style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-accent)', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              {data.icon}
            </div>
            <div>
              <p style={{ color: 'var(--text-accent)', fontWeight: 800, opacity: 0.9, letterSpacing: '0.05em', textTransform: 'uppercase' }}>MODUL {id.toUpperCase()}</p>
              <h1 style={{ color: 'var(--text-primary)', fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>{data.title}</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <Link to="/framework" className="btn-primary" style={{ marginBottom: '40px', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
          <ArrowLeft size={18} /> Kembali ke Direktori
        </Link>

        <motion.div 
          className="desktop-full-panel"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: '12px', color: 'var(--text-accent)' }}>
               <Lightbulb size={24} />
            </div>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>{data.extraTitle}</h2>
          </div>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            {data.extraContent}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModuleDetail;
