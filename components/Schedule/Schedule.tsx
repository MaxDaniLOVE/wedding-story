import Image from 'next/image';
import styles from './Schedule.module.scss'
import ImgSchedule from "../../public/schedule-bg.png";
import { LINK_IDS } from '@/shared/constants';

export const Schedule = () => {
  return (
    <section className={`${styles.section} ${styles.schedule}`} id={LINK_IDS.SCHEDULE}>
    <Image src={ImgSchedule} alt="schedule" className={styles.scheduleBg} fill />
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
