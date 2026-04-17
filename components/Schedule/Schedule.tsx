import styles from './Schedule.module.scss'
import ImgSchedule from "../../public/schedule-bg.jpg";
import { LINK_IDS } from '@/shared/constants';
import type { CSSProperties } from 'react';

export const Schedule = () => {
  return (
    <section className={`${styles.section} ${styles.schedule}`} id={LINK_IDS.SCHEDULE}>
      <div
        className={styles.parallaxBg}
        style={{ backgroundImage: `url(${ImgSchedule.src})` } as CSSProperties}
        aria-hidden
      />
    <div className={`${styles.container} ${styles.scheduleContent}`}>
      <h2>Расписание</h2>
      <ul>
        <li>14:00 — Заселение</li>
        <li>15:30 — Фуршет</li>
        <li>16:00 - Церемония</li>
        <li>17:00 — Фуршет и свободное время</li>
        <li>17:45 — Ужин </li>
        <li>20:30 — Салют</li>
      </ul>
    </div>
  </section>
  )
};
