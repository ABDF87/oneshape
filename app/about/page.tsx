'use client';
import React from 'react';
import styles from './About.module.css';
import Header from '@/components/header/Header';

const About = () => {
  return <main className={styles.mainContainer}>
    <div className={styles.innerContainer}>About</div>

    <Header />
  </main>;
};

export default About;