import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import icono from '@site/static/img/icono.png';

const FeatureList = [
  {
    title: 'Titulo 1',
    image: icono,
    description: (
      <>
        Texto
      </>
    ),
  },
  {
    title: 'Titulo 2',
    image: icono,
    description: (
      <>
        Texto
      </>
    ),
  },
  {
    title: 'Titulo 3',
    image: icono,
    description: (
      <>
        Texto
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt="icono" className={styles.featureImg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
