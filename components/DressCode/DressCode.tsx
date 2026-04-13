import Image from 'next/image';
import styles from './DressCode.module.scss'
import ImgDressCode from "../../public/dress-code.png";

const palette = ["#626875", "#d0b2b2", "#d0a290", "#a3c2b4", "#f6e5ca"];

export const DressCode = () => {
  return (
    <section className={`${styles.section} ${styles.sectionDress}`}>
      <div className={`${styles.container} ${styles.dressGrid}`}>
        <Image src={ImgDressCode} alt="Пример дресс-кода" width={610} height={915} />
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
