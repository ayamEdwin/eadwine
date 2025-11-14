import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
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
        hide the details, DarkLight's clean <code>API</code> classes and examples makes it perfect for
        learning embedded systems programming while avoiding tedius setup work. 
        
        #link First Tutorial: Blink an LED in 5 munites |
        Hardware  Reference Guide
      </>
    ),
  },
  {
    title: 'The Standardized Learning Hardware',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Every DarkLight tutorial assumes the same setup:
        <code>STM32F030RCT6</code> + <code>ST-Link V2</code>.
        This standardization means classroom setups are identical,
        troubleshooting is predictable, and students can focus on
        embedded concepts rather than toolchain configuration.

        # Consistent across all students
        # Affordable and widely available
        # Professional-grade debugging
        
        #link View the recommended starter kit
      </>
    ),
  },
  {
    title: 'Professional Development Environment',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <code>SEGGER Embedded Studio - The Complete IDE Solution</code>
        <code>One installation, everything included</code>

        DarkLight projects are fully compatible with <code>SEGGER Embedded Studio</code>,
        a professional-grade IDE that comes with everything you need out of the box:
        
        Segger tools will be listed here:

        Educational Benefits:
        Free for educational use - No license cost for students
        Single installer - No additional toolchain setups
        Professional features - Industry-standard tools from day One
        Seamless ST-V2 integration - requires no tedius setup

        #link download segger embedded studio |
        Educational License Application
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
