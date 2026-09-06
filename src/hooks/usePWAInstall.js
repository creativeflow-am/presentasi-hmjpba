import { useState, useEffect } from 'react';

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    setIsStandalone(isPWA);

    // Check if iOS
    const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIosDevice);

    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else if (isIOS) {
      alert("Untuk menginstal di iOS:\n\n1. Ketuk ikon 'Bagikan' (Share) di menu bawah browser Anda.\n2. Gulir ke bawah dan ketuk 'Tambah ke Layar Utama' (Add to Home Screen).");
    } else {
      alert("Aplikasi ini mungkin sudah diinstal, atau browser Anda tidak mendukung fitur ini.");
    }
  };

  // Return whether we should show the install button
  const canInstall = !isStandalone && (deferredPrompt || isIOS);

  return { canInstall, installPWA };
};
