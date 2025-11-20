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
          <div className={styles.heroRow}>
            <div className={styles.heroLeft}>
              <img src="/img/darklight_logo.jpg" alt="Logo" className={styles.logoImg} />
              <div className={styles.heroTextCol}>
                <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
                  {siteConfig.title}
                </Heading>
                <p className={clsx('hero__subtitle', styles.heroTagline)}>{siteConfig.tagline}</p>
                <p className={styles.heroDesc}>
                  DarkLight is a clean embedded framework designed specifically for teaching embedded systems
                  and enabling quick proof-of-concept builds. Electrical engineers, hobbyist and engineering
                  students get immediate hardware control with minimal setup overhead using the ubiquitous
                  STM32F0 + ST-Link V2 combination.
                </p>
                <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="docs/introduction"
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
            <div className={styles.heroRight}>
              <CarouselImages />
            </div>
        </div>
      </div>
    </header>
  );

// Simple animated carousel component
function CarouselImages() {
  const images = [
  { src: '/img/darklight_logo.jpg', alt: 'Banner' },
    { src: '/img/darklight_pinout.png', alt: 'Pinout' },
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
      className={styles.carouselImg}
    />
  );
}
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome To ${siteConfig.title}`}
      description="The embedded platform for learning and rapid prototyping <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
