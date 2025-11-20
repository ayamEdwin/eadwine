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
    title: 'Educational Framework',
  Svg: require('@site/static/img/undraw_educator_6dgp.svg').default,
    description: (
      <>
        DarkLight provides a transparent hardware abstraction that help's you understand
        what's actually happening in the microcontroller. Unlike complex API's that
        hide the details, DarkLight's clean <code>API</code> classes makes it perfect for
        learning embedded systems programming while avoiding tedius setup work.  
        
  <Link to="/docs/Tutorials/led-button"> First Tutorial: 
         Blink an LED in 5 minutes | LEDs &amp; Buttons</Link>
      </>
    ),
  },
  {
    title: 'A Standardized Hardware',
    Svg: require('@site/static/img/darklight_dev_board.jpg').default,
    description: (
      <>
        Every DarkLight tutorial assumes the same setup:
        <code>STM32F030RCT6</code> + <code>ST-Link V2</code>.
        This standardization means classroom setups are identical,
        troubleshooting is predictable, and students can focus on
        embedded concepts rather than toolchain configuration. 
        Consistent across all students | Affordable and widely available
        Professional-grade debugging.
        <Link to="/docs/hardware-guide/kit"> View the recommended starter kit</Link>
      </>
    ),
  },
  {
    title: 'Professional IDE',
    Svg: require('@site/static/img/undraw_programming_j1zw.svg').default,
    description: (
      <>
  <code>SEGGER Embedded Studio | The Complete professional-grade IDE Solution</code>
  <code>One installation, everything included</code>

        Fully compatible with <code> DarkLight </code> projects |
        a IDE that comes with everything you need out of the box | 
        <a href=" https://kb.segger.com/J-Link_RTT_Viewer " target="_blank" rel="noopener noreferrer">
          J-Link RTT Viewer | </a>
          <a href=" https://doc.segger.com/UM08027_SystemView.html " target="_blank" rel="noopener noreferrer">
          SystemView </a>
       <strong>Educational Benefits:</strong>
       Free for educational use | No license cost for students
       Single installer | No additional toolchain setups
       <Link to="/docs/getting-started/installation-guide"> Checkout Our Installation Guide</Link>
          
 
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
