import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, query, orderByChild, limitToLast } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvGAw7oO59FzB-D9hdPlS_45dQQWASqrg",
  authDomain: "kuis-hmjpba.firebaseapp.com",
  projectId: "kuis-hmjpba",
  storageBucket: "kuis-hmjpba.firebasestorage.app",
  messagingSenderId: "771997899445",
  appId: "1:771997899445:web:2fcc884f150f9ab4713cfc",
  databaseURL: "https://kuis-hmjpba-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Hanya inisialisasi jika ada konfigurasi (mencegah error saat user belum setup)
let app;
let db;

try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
  }
} catch (error) {
  console.error("Firebase init error:", error);
}

export { db, ref, push, onValue, query, orderByChild, limitToLast };
