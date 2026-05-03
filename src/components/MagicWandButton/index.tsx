import React, { useRef } from 'react';
import styles from './styles.module.css';

export default function MagicWandButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerAnimation = () => {
    const emojis = ['❤️', '😊', '🎉', '✨', '🚀', '💫', '🎈'];
    const container = containerRef.current;
    
    if (!container) return;

    // Create 30-50 emoji elements
    for (let i = 0; i < 40; i++) {
      const emoji = document.createElement('div');
      emoji.className = styles.emoji;
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      emoji.style.left = startX + 'px';
      emoji.style.top = startY + 'px';
      
      container.appendChild(emoji);

      // Random animation direction and duration
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 200;
      const endX = startX + Math.cos(angle) * distance;
      const endY = startY + Math.sin(angle) * distance - Math.random() * 100; // Always move up somewhat
      
      const duration = 2 + Math.random() * 1.5;

      emoji.style.animation = `none`;
      
      // Use getComputedStyle to trigger reflow
      void emoji.offsetWidth;
      
      emoji.style.animation = `spread ${duration}s ease-out forwards`;
      emoji.style.setProperty('--endX', endX + 'px');
      emoji.style.setProperty('--endY', endY + 'px');

      // Remove emoji after animation
      setTimeout(() => {
        emoji.remove();
      }, duration * 1000);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={styles.container}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 99999 }}
    >
      <button 
        className={styles.magicWand}
        onClick={triggerAnimation}
        title="Spread some joy!"
        aria-label="Magic wand - spread joy"
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.5rem',
          background: 'transparent',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          padding: '0.5rem',
          pointerEvents: 'auto',
          zIndex: 100000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ✨
      </button>
    </div>
  );
}
