import Image from 'next/image';
import styles from './DressCode.module.scss'
import ImgDressCode from "../../public/dress-code.jpg";
import { LINK_IDS } from '@/shared/constants';

const palette = ["#626875", "#d0b2b2", "#d0a290", "#a3c2b4", "#f6e5ca"];

export const DressCode = () => {
  return (
    <section className={`${styles.section} ${styles.sectionDress}`} id={LINK_IDS.DRESS_CODE}>
      <div className={`${styles.container} ${styles.dressGrid}`}>
        <div className={`${styles.blockImageWrapper}`}>
          <Image src={ImgDressCode} alt="Пример дресс-кода" fill />
        </div>
        <div className={styles.info}>
          <h2>Дресс-код</h2>
          <p>
            Пастельные и приглушенные оттенки для платьев. Классический черный или бежевый для
            костюмов. Тихая элегантность и сдержанная красота.
          </p>
          <div className={styles.palette}>
            {palette.map((color) => (
              <span key={color} style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
      </div>
  </section>
  )
};
