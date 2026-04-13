'use client'
import styles from './Apartments.module.scss'
import ApartmentsBg from '../../public/apartment-bg.png'
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { LINK_IDS } from '@/shared/constants';

export const Apartments = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frameId: number | null = null;
    const PARALLAX_SPEED = 0.12;
    const containerYPosition = (window.scrollY + (containerRef.current?.getBoundingClientRect()?.y || 3000));

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(() => {
        setParallaxOffset((window.scrollY - containerYPosition) * PARALLAX_SPEED);
        frameId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${ApartmentsBg.src})`,
        "--parallax-offset": `${parallaxOffset}px`,
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
