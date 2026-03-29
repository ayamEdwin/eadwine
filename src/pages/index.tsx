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
              <img src="/img/eddie_profile.jpg" alt="Logo" className={styles.logoImg} />
              <div className={styles.heroTextCol}>
                <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
                  {siteConfig.title}
                </Heading>
                <p className={clsx('hero__subtitle', styles.heroTagline)}>{siteConfig.tagline}</p>
                <p className={styles.heroDesc}>
                  <em style={{fontSize: '0.8em'}}>"I will do to robots, what Steve Jobs did to computers." - Edwin Setsoafia</em>
                  <br/><br/>
                  This is my personal space where I share my projects, thoughts,
                  and learnings in the world of mechatronics, robotics and programming.
                  Here you'll find documentation, tutorials, and a showcase of my work.
                  Whether you're a beginner or a research enthusiast, there's something
                  here for everyone interested in the exciting world of intelligent robots.
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
                 Explore this space
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
  { src: '/img/3d_printing.png', alt: '3d_printer' },
    { src: '/img/wheeled_biped.png', alt: 'wheeled biped' },
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
      description="His journey in the world of mechatronics, robotics and programming <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
