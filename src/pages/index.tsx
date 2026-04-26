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
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <div className={styles.profileSection}>
              <img src="/img/eddie_profile.jpg" alt="Edwin Setsoafia" className={styles.profileImg} />
              <div className={styles.statusBadge}>
                <span className={styles.statusDot}></span>
                Available for Projects
              </div>
            </div>
            
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroTagline}>{siteConfig.tagline}</p>
            
            <p className={styles.heroDesc}>
              <span className={styles.highlight}>📌 Doing to robots what Steven Jobs and Wozniak did to computers</span>
              <br/><br/>
              Welcome to my digital playground! I'm a Mechatronics Engineer passionate about 
              <span className={styles.keyword}> Robotics</span>, <span className={styles.keyword}>AI</span>, and 
              <span className={styles.keyword}> Embedded Systems</span>.
              <br/><br/>
              Explore my projects, tutorials, and research in the exciting world of intelligent robots.
            </p>
            
            <div className={styles.buttonGroup}>
              <Link
                className={styles.primaryButton}
                to="/about"
              >
                <span>👤 About Me</span>
              </Link>
              <Link
                className={styles.secondaryButton}
                to="/research"
              >
                <span>🔬 Research</span>
              </Link>
              <Link
                className={styles.tertiaryButton}
                to="/blog"
              >
                <span>📝 Blog</span>
              </Link>
            </div>
            
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Publications</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.robotPreview}>
              <CarouselImages />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CarouselImages() {
  const images = [
    { src: '/img/3d_printing.png', alt: '3D Printing Project', label: '3D Printing' },
    { src: '/img/wheeled_biped.png', alt: 'Wheeled Biped Robot', label: 'Wheeled Biped' },
  ];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);
  
  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.carouselTrack}>
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`${styles.carouselSlide} ${i === index ? styles.active : ''}`}
          >
            <img src={img.src} alt={img.alt} className={styles.carouselImg} />
            <div className={styles.imageLabel}>{img.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.carouselDots}>
        {images.map((_, i) => (
          <span 
            key={i} 
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome To ${siteConfig.title}`}
      description="His journey in the world of mechatronics, robotics and programming">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
