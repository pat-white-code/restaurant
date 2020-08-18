import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <div className={styles['col-1']}></div>

      <div className={styles['col-2']}>
        <div className={styles['item-1']}></div>
        <div className={styles['item-2']}></div>
      </div>
    </div>
  )
}

export default Hero;