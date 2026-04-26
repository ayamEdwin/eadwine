import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Accept either an SVG React component OR a string URL for raster images
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who am I?',
  Svg: require('@site/static/img/eddie_portrait.jpg').default,
    description: (
      <>
        I am a Mechatronics Engineering graduate who is passionate about Robotics and A.I research.
        I received my Bachelor of Technology degree in Mechatronics Engineering from Koforidua Technical University, Ghana in 2025. 
        My background in mechatronics has enriched my engineering skills in the diverse fields of Mechanical,
        Electrical/Electronics, Embedded Systems, Robotics and Control Systems.
  
        
  <Link to="/docs/about"> Get to know me better here.</Link>
      </>
    ),
  },
  {
    title: 'My research interest',
    Svg: require('@site/static/img/naokids.jpg').default,
    description: (
      <>
        With the sole aim of assisting humans with robots,
        I find pleasure in but not limited to the following 
        areas of robotics research; <code>Assistive robots</code>,
        <code>Human-robot interaction</code>, <code>manipulation and control</code>,
        <code>robot learning</code>, <code>perception</code>,<code>bio-inspiration</code>.
        <Link to="/docs/hardware-guide/kit"> A comprehensive dive into my research interests can be found here</Link>
      </>
    ),
  },
  {
    title: 'Portfolio of projects',
    Svg: require('@site/static/img/dc_motor.jpg').default,
    description: (
      <>
        I have a portfolio of projects that I have worked on, which includes;
        personal, academic and industrial internship projects. 
        These projects have allowed me to apply my knowledge and 
        skills in mechatronics engineering to real-world problems 
        and have given me valuable experience in the field of robotics and A.I research.
      This pages showcase my portfolio of projects, which includes a brief description of each project,
       the technologies used, and the outcomes achieved. 
      <Link to="/docs/getting-started/installation-guide"> Checkout my projects here</Link>
          
 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Svg === 'string' ? (
          <img src={Svg} className={styles.featureSvg} role="img" alt={title} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
