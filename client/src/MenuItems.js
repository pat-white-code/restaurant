import React from 'react';
import styles from './MenuItems.module.css';

const MenuItems = () => {
  return (
    <div className={styles['menu-container']}>
      <div className={styles['menu-item']}>
        <h4>
          Tacos
        </h4>
      </div>
      <div className={styles['menu-item']}>
        <h4>
          Beers
        </h4>
      </div>
      <div className={styles['menu-item']}>
        <h4>
          Wines
        </h4>
      </div>
      <div className={styles['menu-item']}>
        <h4>
          Desserts
        </h4>
      </div>
      <div className={styles['menu-item']}>
        <h4>
          Reservations
        </h4>
      </div>
    </div>
  )
}

export default MenuItems;