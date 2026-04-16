import styles from './Schedule.module.scss'
import ImgSchedule from "../../public/schedule-bg.jpg";
import { LINK_IDS, PARALLAX_SPEED } from '@/shared/constants';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export const Schedule = ({ scrollPosition }: { scrollPosition: number }) => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerYPosition = (window.scrollY + (containerRef.current?.getBoundingClientRect()?.y || 3000));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParallaxOffset(containerYPosition);
  }, []);

  return (
    <section
      className={`${styles.section} ${styles.schedule}`}
      id={LINK_IDS.SCHEDULE}
      style={{
        backgroundImage: `url(${ImgSchedule.src})`,
        "--parallax-offset": `${(scrollPosition - parallaxOffset) * PARALLAX_SPEED}px`,
      } as CSSProperties}
      ref={containerRef}
    >
    <div className={`${styles.container} ${styles.scheduleContent}`}>
      <h2>Расписание</h2>
      <ul>
        <li>15:00 - заселение</li>
        <li>16:30 - фуршет</li>
        <li>17:00 - регистрация</li>
        <li>17:30 - продолжение фуршета и свободное время</li>
        <li>20:00 - ужин</li>
        <li>22:00 - салют</li>
      </ul>
    </div>
  </section>
  )
};
