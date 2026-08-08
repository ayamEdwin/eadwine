import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

type TimeInfo = {
  greeting: string;
  emoji: string;
  localTime: string;
  timeZone: string;
};

function getTimeInfo(): TimeInfo {
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour >= 5 && hour < 12 ? 'Good morning' :
    hour >= 12 && hour < 17 ? 'Good afternoon' :
    hour >= 17 && hour < 21 ? 'Good evening' :
    'Good night';
  const emoji = hour >= 6 && hour < 18 ? '☀️' : '🌙';

  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  });

  const parts = formatter.formatToParts(now);
  const localTime = parts
    .filter((part) => part.type !== 'timeZoneName')
    .map((part) => part.value)
    .join('')
    .trim();
  const timeZone = parts.find((part) => part.type === 'timeZoneName')?.value ?? Intl.DateTimeFormat().resolvedOptions().timeZone;

  return { greeting, emoji, localTime, timeZone };
}

export default function MagicWandButton() {
  const [timeInfo, setTimeInfo] = useState<TimeInfo>({
    greeting: 'Hello',
    localTime: '',
    timeZone: '',
  });

  useEffect(() => {
    const update = () => setTimeInfo(getTimeInfo());
    update();
    const intervalId = window.setInterval(update, 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container} aria-live="polite">
      <div className={styles.greetingCard}>
        <p className={styles.greeting}>
          {timeInfo.emoji} {timeInfo.greeting}!
        </p>
        <p className={styles.details}>
          {timeInfo.localTime
            ? `It's ${timeInfo.localTime} in ${timeInfo.timeZone}.`
            : 'Checking local time...'}
        </p>
      </div>
    </div>
  );
}
