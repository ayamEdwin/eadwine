import {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ResearchVideoCarousel.module.css';

type CarouselSlide =
  | {kind: 'youtube'; id: string; title: string}
  | {kind: 'image'; src: string; title: string; alt: string};

const slides: CarouselSlide[] = [
  {
    kind: 'youtube',
    id: 'wpV5Uh5NUpM',
    title: 'Unitree robot failure in real world',
  },
  {
    kind: 'image',
    src: '/img/franka.webp',
    title: 'Human working with a Franka robot arm',
    alt: 'A person working beside a Franka robot arm in a robotics workspace',
  },
  {
    kind: 'youtube',
    id: '8Drm_v3_iG4',
    title: 'Unitree robot failure in Human-centered environment',
  },
];

export default function ResearchVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const frankaImageUrl = useBaseUrl('/img/franka.webp');

  const showVideo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section className={styles.carousel} aria-label="Research media">
      <div className={styles.frame}>
        {activeSlide.kind === 'youtube' ? (
          <iframe
            key={activeSlide.id}
            src={`https://www.youtube.com/embed/${activeSlide.id}?autoplay=1&controls=1&mute=1&rel=0&playsinline=1`}
            title={activeSlide.title}
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <img key={activeSlide.src} src={frankaImageUrl} alt={activeSlide.alt} />
        )}
      </div>

      <div className={styles.caption}>
        <h3>{activeSlide.title}</h3>
        <span aria-live="polite">{activeIndex + 1} / {slides.length}</span>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          type="button"
          aria-label="Previous video"
          onClick={() => showVideo(activeIndex - 1)}
        >
          ‹
        </button>
        <div className={styles.indicators} aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={styles.indicator}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => showVideo(index)}
            />
          ))}
        </div>
        <button
          className={styles.arrow}
          type="button"
          aria-label="Next video"
          onClick={() => showVideo(activeIndex + 1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}