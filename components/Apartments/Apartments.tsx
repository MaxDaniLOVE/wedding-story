'use client'
import styles from './Apartments.module.scss'
import ApartmentsBg from '../../public/apartment-bg.png'
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { LINK_IDS, PARALLAX_SPEED } from '@/shared/constants';


export const Apartments = ({ scrollPosition }: { scrollPosition: number }) => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerYPosition = (window.scrollY + (containerRef.current?.getBoundingClientRect()?.y || 3000));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParallaxOffset(containerYPosition);
  }, []);

  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${ApartmentsBg.src})`,
        "--parallax-offset": `${(scrollPosition - parallaxOffset) * PARALLAX_SPEED}px`,
      } as CSSProperties}
      ref={containerRef}
      id={LINK_IDS.APARTMENTS}
    >
        <div>
          <h2>Где жить</h2>
          <p>
            С 22 по 23 мая для вас будет забронирован номер в отеле Nekresi Estate, чтобы вы
            могли провести этот вечер с нами и отдохнуть после праздника. Заселение с 15:00.
            Утром вас будет ждать завтрак в отеле.
          </p>
        </div>
    </section>
  )
};
