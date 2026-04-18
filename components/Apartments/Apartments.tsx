'use client'

import styles from './Apartments.module.scss'
import ApartmentsBg from '../../public/apartment-bg.jpg'
import { LINK_IDS } from '@/shared/constants';
import { useParallax } from '@/shared/hooks';
import { motion } from 'motion/react';


export const Apartments = ({ isShowSidebar }: { isShowSidebar: boolean }) => {
  const { parallaxRef, x } = useParallax({ isShowSidebar })

  return (
    <section className={styles.container} id={LINK_IDS.APARTMENTS}>
        <motion.div
          className={styles.parallaxBg}
          ref={parallaxRef}
          style={{ backgroundImage: `url(${ApartmentsBg.src})`, x } }
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
