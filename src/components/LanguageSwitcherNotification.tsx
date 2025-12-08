'use client';

import { useState, useEffect } from 'react';

export default function LanguageSwitcherNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if notification has been shown before
    const hasSeenNotification = localStorage.getItem('language-notification-seen');

    if (!hasSeenNotification) {
      // Show notification after a brief delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('language-notification-seen', 'true');
  };

  // Auto-dismiss after 8 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className='fixed top-20 right-4 z-50 max-w-sm bg-bg/95 backdrop-blur-sm border border-text/20 rounded-lg shadow-lg p-4 animate-fade-in'
      role='alert'
    >
      <div className='flex items-start gap-3'>
        <div className='flex-1'>
          <p className='text-sm text-text font-sans leading-relaxed'>
            Language can be changed to <strong>English</strong> using the <strong>EN/CZ</strong>{' '}
            buttons in the header
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className='text-text/60 hover:text-text transition-colors shrink-0 -mt-1'
          aria-label='Dismiss notification'
        >
          ✕
        </button>
      </div>
    </div>
  );
}
