import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, XCircle, RotateCcw, Trophy, AlertTriangle, Users, Medal } from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';
import { db, ref, push, onValue, query, orderByChild, limitToLast, remove } from '../lib/firebase';

const Quiz = () => {
  const [gameState, setGameState] = useState('register'); // register, playing, result
  const [playerName, setPlayerName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mengambil data leaderboard dari Firebase
  useEffect(() => {
    if (db) {
      const scoresRef = query(ref(db, 'scores'), orderByChild('score'), limitToLast(50));
      const unsubscribe = onValue(scoresRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert object to array and sort descending
          const scoresArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          })).sort((a, b) => b.score - a.score);
          setLeaderboard(scoresArray);
        } else {
          setLeaderboard([]);
        }
      });
      
      return () => unsubscribe();
    }
  }, []);

  const startGame = (e) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
  };

  const submitScoreToFirebase = async (finalScore) => {
    if (!db) return; // Jika firebase belum dikonfigurasi, abaikan
    setIsSubmitting(true);
    try {
      await push(ref(db, 'scores'), {
        name: playerName,
        score: finalScore,
        maxScore: quizQuestions.length,
        timestamp: Date.now()
      });
    } catch (error) {
      console.error("Error submitting score:", error);
    }
    setIsSubmitting(false);
  };

  const handleAnswerSelect = (index) => {
    if (isAnswerRevealed) return;
    
    setSelectedAnswer(index);
    setIsAnswerRevealed(true);
    
    const isCorrect = index === quizQuestions[currentQuestionIndex].correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) setScore(newScore);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswerRevealed(false);
      } else {
        submitScoreToFirebase(newScore);
        setGameState('result');
      }
    }, 2000);
  };

  const getWinnerTitle = (finalScore) => {
    const percentage = finalScore / quizQuestions.length;
    if (percentage === 1) return "Manajer Media Sosial Profesional";
    if (percentage >= 0.8) return "Staf Komunikasi Madya";
    if (percentage >= 0.5) return "Staf Junior Divisi Komunikasi";
    return "Membutuhkan Peningkatan Pemahaman";
  };

  const handleResetLeaderboard = async () => {
    const confirm = window.confirm("SECRET ADMIN: Apakah Anda yakin ingin menghapus SEMUA data Leaderboard? Tindakan ini tidak bisa dibatalkan.");
    if (confirm && db) {
      try {
        await remove(ref(db, 'scores'));
        alert("Leaderboard berhasil di-reset! Siap untuk dipakai live.");
      } catch (error) {
        alert("Gagal mereset: " + error.message);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      style={{ padding: '40px 20px', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <AnimatePresence mode="wait">
        
        {/* REGISTER SCREEN */}
        {gameState === 'register' && (
          <motion.div
            key="register"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
          >
            <div style={{ background: 'rgba(188, 48, 95, 0.1)', padding: '24px', borderRadius: '50%', width: '100px', height: '100px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-accent)' }}>
              <Play size={48} />
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Kuis Interaktif ({quizQuestions.length} Soal)</h1>
            
            <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', marginBottom: '32px', borderLeft: '4px solid var(--text-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: 700 }}>
                <AlertTriangle size={24} color="var(--text-accent)" />
                Informasi Kuis
              </div>
              <p style={{ color: 'var(--text-secondary)', textAlign: 'left', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Pertanyaan dalam kuis ini dirancang untuk mengetes pengetahuan umum dan kemampuan pemecahan masalah Anda terkait pengelolaan media sosial. Hasil kuis akan ditampilkan secara langsung di <strong>Leaderboard Global</strong>.
              </p>
            </div>

            <form onSubmit={startGame} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
              <input 
                type="text" 
                placeholder="Masukkan Nama Anda..." 
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
                style={{ 
                  padding: '16px 24px', 
                  fontSize: '1.1rem', 
                  borderRadius: '100px', 
                  border: '2px solid var(--border-color)', 
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                  outline: 'none'
                }} 
              />
              <button type="submit" className="btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px', borderRadius: '100px', justifyContent: 'center' }}>
                Mulai Kuis
              </button>
            </form>
          </motion.div>
        )}

        {/* PLAYING SCREEN */}
        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Pertanyaan {currentQuestionIndex + 1} / {quizQuestions.length}</span>
              <span style={{ fontWeight: 700, color: 'var(--text-accent)', background: 'rgba(188,48,95,0.1)', padding: '6px 16px', borderRadius: '100px' }}>
                Skor Sementara: {score}
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '40px', lineHeight: 1.4 }}>
              {quizQuestions[currentQuestionIndex].question}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {quizQuestions[currentQuestionIndex].options.map((option, index) => {
                let buttonStyle = {
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--border-color)', // Added clear outline by default
                  cursor: isAnswerRevealed ? 'default' : 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                };

                if (isAnswerRevealed) {
                  if (index === quizQuestions[currentQuestionIndex].correctAnswer) {
                    buttonStyle.background = '#dcfce7'; // green-100
                    buttonStyle.border = '2px solid #22c55e'; // green-500
                    buttonStyle.color = '#166534'; // green-800
                  } else if (selectedAnswer === index) {
                    buttonStyle.background = '#fee2e2'; // red-100
                    buttonStyle.border = '2px solid #ef4444'; // red-500
                    buttonStyle.color = '#991b1b'; // red-800
                  } else {
                    buttonStyle.opacity = 0.5;
                  }
                }

                return (
                  <motion.button
                    key={index}
                    whileHover={!isAnswerRevealed ? { scale: 1.02, borderColor: 'var(--text-accent)' } : {}}
                    whileTap={!isAnswerRevealed ? { scale: 0.98 } : {}}
                    style={buttonStyle}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswerRevealed}
                  >
                    {option}
                    
                    {isAnswerRevealed && index === quizQuestions[currentQuestionIndex].correctAnswer && (
                      <CheckCircle size={24} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#22c55e' }} />
                    )}
                    {isAnswerRevealed && selectedAnswer === index && index !== quizQuestions[currentQuestionIndex].correctAnswer && (
                      <XCircle size={24} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#ef4444' }} />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* RESULT & LEADERBOARD SCREEN */}
        {gameState === 'result' && (
          <motion.div
            key="result"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
              {/* Hasil Individu */}
              <div style={{ flex: '1 1 350px', background: 'var(--bg-secondary)', padding: '40px', borderRadius: '24px', textAlign: 'center' }}>
                <Trophy 
                  size={80} 
                  color="var(--text-accent)" 
                  style={{ marginBottom: '24px', cursor: 'pointer' }} 
                  onClick={handleResetLeaderboard}
                  title="Klik untuk Mereset Leaderboard"
                />
                
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Hasil Evaluasi, {playerName}!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Berikut adalah hasil evaluasi 20 pertanyaan Anda:</p>
                
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--text-accent)', lineHeight: 1, marginBottom: '16px' }}>
                  {score}<span style={{ fontSize: '2.5rem', color: 'var(--text-secondary)' }}>/{quizQuestions.length}</span>
                </div>
                
                <div style={{ display: 'inline-block', background: 'var(--bg-primary)', padding: '12px 24px', borderRadius: '100px', border: '1px solid var(--border-color)', marginBottom: '40px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tingkat Kompetensi:</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
                    "{getWinnerTitle(score)}"
                  </div>
                </div>
                
                <button onClick={() => setGameState('register')} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <RotateCcw size={20} /> Ulangi Kuis
                </button>
              </div>

              {/* Leaderboard Global */}
              <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: '12px', color: 'var(--text-accent)' }}>
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>Papan Skor Global (Live)</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Peringkat seluruh audiens yang telah bermain</p>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '24px', overflow: 'hidden', flex: 1, maxHeight: '500px', overflowY: 'auto' }}>
                  {!db ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                      <AlertTriangle size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                      <p>Database Firebase belum dikonfigurasi.<br/>Skor hanya tersimpan secara lokal.</p>
                    </div>
                  ) : leaderboard.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                      Memuat data skor... (Atau belum ada yang bermain)
                    </div>
                  ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead style={{ background: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 10 }}>
                        <tr>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700, borderBottom: '1px solid var(--border-color)' }}>Rank</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700, borderBottom: '1px solid var(--border-color)' }}>Nama Audiens</th>
                          <th style={{ padding: '16px', textAlign: 'right', fontWeight: 700, borderBottom: '1px solid var(--border-color)' }}>Skor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map((player, idx) => (
                          <motion.tr 
                            key={player.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            style={{ 
                              background: player.name === playerName ? 'rgba(188,48,95,0.05)' : 'transparent',
                              borderBottom: '1px solid var(--border-color)',
                            }}
                          >
                            <td style={{ padding: '16px', fontWeight: 700, color: idx < 3 ? 'var(--text-accent)' : 'var(--text-secondary)' }}>
                              {idx === 0 ? '🏆 1' : idx === 1 ? '🥈 2' : idx === 2 ? '🥉 3' : `#${idx + 1}`}
                            </td>
                            <td style={{ padding: '16px', fontWeight: player.name === playerName ? 800 : 500, color: 'var(--text-primary)' }}>
                              {player.name} {player.name === playerName && '(Kamu)'}
                            </td>
                            <td style={{ padding: '16px', textAlign: 'right', fontWeight: 800, color: 'var(--text-accent)' }}>
                              {player.score}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Quiz;
