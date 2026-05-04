import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';

export default function MagicWandButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Inject keyframes dynamically for better CSS variable support
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes emojiSpread {
        0% {
          opacity: 1;
          transform: translate(0, 0) scale(1) rotate(0deg);
        }
        50% {
          opacity: 1;
          transform: translate(calc(var(--drift-x) * 0.7), calc(var(--drift-y) * 0.7)) scale(1.1) rotate(180deg);
        }
        100% {
          opacity: 0;
          transform: translate(var(--drift-x), var(--drift-y)) scale(0.3) rotate(360deg);
        }
      }
      
      @keyframes ripple {
        0% {
          box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.7);
          transform: scale(1);
        }
        50% {
          box-shadow: 0 0 0 15px rgba(138, 43, 226, 0);
          transform: scale(1.05);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(138, 43, 226, 0);
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => styleSheet.remove();
  }, []);

  const triggerAnimation = () => {
    const emojis = ['❤️', '😊', '🎉', '✨', '🚀', '💫', '🎈', '👏'];
    const container = containerRef.current;
    const button = buttonRef.current;
    
    if (!container || !button) return;

    // Get button position
    const buttonRect = button.getBoundingClientRect();
    const startX = buttonRect.left + buttonRect.width / 2;
    const startY = buttonRect.top + buttonRect.height / 2;

    // Create 15-25 emoji elements spawning from button
    for (let i = 0; i < 20; i++) {
      const emoji = document.createElement('div');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Facebook-style downward spread with horizontal drift
      const angle = Math.random() * Math.PI * 2;
      const horizontalDrift = Math.cos(angle) * (40 + Math.random() * 80);
      const verticalDistance = 200 + Math.random() * 300; // Move down
      
      const duration = 2.5 + Math.random() * 1;
      const delay = i * 0.05; // Staggered spawn effect

      // Apply all styles inline
      emoji.style.position = 'fixed';
      emoji.style.left = startX + 'px';
      emoji.style.top = startY + 'px';
      emoji.style.fontSize = '1.5rem';
      emoji.style.pointerEvents = 'none';
      emoji.style.userSelect = 'none';
      emoji.style.willChange = 'transform, opacity';
      emoji.style.setProperty('--drift-x', horizontalDrift + 'px');
      emoji.style.setProperty('--drift-y', verticalDistance + 'px');
      emoji.style.animation = `emojiSpread ${duration}s ease-out forwards`;
      emoji.style.animationDelay = `${delay}s`;
      
      container.appendChild(emoji);

      // Remove emoji after animation completes
      setTimeout(() => {
        emoji.remove();
      }, (duration + delay) * 1000);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={styles.container}
    >
      <div className={styles.buttonWrapper}>
        <button 
          ref={buttonRef}
          className={styles.magicWand}
          onClick={triggerAnimation}
          title="Spread some love!"
          aria-label="Magic wand - spread some love"
        >
          🪄
        </button>
        <span className={styles.ripple}></span>
        <span className={styles.tag}>spread some love</span>
      </div>
    </div>
  );
}
