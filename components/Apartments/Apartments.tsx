'use client'
import styles from './Apartments.module.scss'
import ApartmentsBg from '../../public/apartment-bg.jpg'
import type { CSSProperties } from 'react';
import { LINK_IDS } from '@/shared/constants';


export const Apartments = () => {
  return (
    <section className={styles.container} id={LINK_IDS.APARTMENTS}>
        <div
          className={styles.parallaxBg}
          style={{ backgroundImage: `url(${ApartmentsBg.src})` } as CSSProperties}
          aria-hidden
        />
        <div className={styles.content}>
          <h2>Где жить</h2>
          <p>
            С 22 по 23 мая для вас будет забронирован номер в отеле Nekresi Estate,
            чтобы вы могли провести этот вечер с нами и отдохнуть после праздника.
            Заселение с 14:00. Утром вас будет ждать завтрак в отеле.
          </p>
        </div>
    </section>
  )
};
