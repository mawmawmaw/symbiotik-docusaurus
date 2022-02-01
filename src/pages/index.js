import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import logo from '@site/static/img/logo.png';
import icono from '@site/static/img/icono.png';

const bgAnimUrls = 
[
'https://munro-art.vercel.app/?params=eyJzcGVlZCI6MC4xLCJub3JtYWxTY2FsZSI6MC40OSwic3RyZW5ndGgiOjEuMTYsInN0cmVuZ3RoU2NhbGUiOnsieCI6MC4xLCJ5IjowLjF9LCJkaXJlY3Rpb24iOnsieCI6LTEsInkiOi0xfSwic2NhbGluZyI6ImZpbGwiLCJpbWdTY2FsZSI6MSwiaW50cm9EZWxheSI6MC44LCJpbnRyb0R1cmF0aW9uIjo1LCJwYXVzZWQiOmZhbHNlLCJpbWFnZXMiOnsibm9ybWFsIjoiL2ltYWdlcy9maWx0ZXJfTlJNLmpwZyIsImJnIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjc0ODkzNzc3MDYtNWJmOTdlNjA4ODUyP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNTU5JnE9ODAifX0']

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [rand, setRand] = useState();
  useEffect(()=>{
    setRand(Math.floor(Math.random() * bgAnimUrls.length))
  },[])
  return (
    <>
    <iframe className='hero-bg-animation' src={bgAnimUrls[rand]}></iframe>
    <header>
      
      <div className="container hero-container">
        <h1 className="hero__title">
          <img src={logo} alt="Symbiotik logo"/>  
        </h1>
        <p className="hero__subtitle">
          <img src={icono} alt="Symbiotik icon"/>  
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            See documentation
          </Link>

        </div>
      </div>
    </header>
    </>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Symbiotik | Documentaci&oacute;n oficial`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}