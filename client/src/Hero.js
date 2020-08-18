import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <div className={styles['col-1']}>
        <h1 className={styles['hero-h1']}>Terry's Taco Joint</h1>
        <h3 className={styles['hero-h4']}>Pretty Good Tacos!</h3>
      </div>

      <div className={styles['col-2']}>
        <div className={styles['item-1']}>
          <h1>Tacos</h1>
          <h4>1.99</h4>
        </div>
        <div className={styles['item-2']}>
          <h1>Kambucha</h1>
          <h4>3.99</h4>
        </div>
      </div>
    </div>
  )
}

export default Hero;