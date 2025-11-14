import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React, { useState, useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
            <img src="/img/darklight_logo.jpg" alt="Logo" style={{ height: '84px', borderRadius: '16px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Heading as="h1" className="hero__title" style={{ margin: 0 }}>
                {siteConfig.title}
              </Heading>
              <p className="hero__subtitle" style={{ marginTop: '0.5rem', maxWidth: '600px', whiteSpace: 'normal', wordBreak: 'break-word', fontSize: '1.15rem', fontWeight: 'bold' }}>{siteConfig.tagline}</p>
              <p style={{ marginTop: '0.1rem', maxWidth: '600px', fontSize: '0.95rem', color: 'var(--custom-text-color)', marginLeft: '-2rem' }}>
                DarkLight is a clean embedded framework designed specifically for teaching embedded systems
                and enabling quick proof-of-concept builds. Electrical engineers, hobbyist and engineering
                students get immediate hardware control with minimal setup overhead using the ubiquitous
                STM32F0 + ST-Link V2 combination.
              </p>
              <div className={styles.buttons} style={{ marginTop: '1rem', marginLeft: '10rem' }}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/api/intro"
                  style={{
                    background: 'linear-gradient(90deg, #FFC107 0%, #FFB300 100%)',
                    color: '#222',
                    border: 'none'
                  }}
                >
                  Start Learning for Free
                </Link>
              </div>
              {/* No image here, only in the row below */}
            </div>
          </div>
          {/* Carousel for images */}
          <CarouselImages />
        </div>
      </div>
    </header>
  );

// Simple animated carousel component
function CarouselImages() {
  const images = [
  { src: '/img/darklight_logo.jpg', alt: 'Banner' },
    { src: '/img/darklight_dev_board.jpg', alt: 'Pinout' },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <img
      src={images[index].src}
      alt={images[index].alt}
      style={{
        height: '240px',
        objectFit: 'contain',
        marginLeft: '2rem',
        boxShadow: '0 0 24px 4px rgba(0,0,0,0.45)',
        transition: 'opacity 0.5s',
        borderRadius: '16px',
      }}
    />
  );
}
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
