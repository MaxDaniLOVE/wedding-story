/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";

const imgHeroTop = "/hero-top.png";
const imgHeroBottom = "/hero-bottom.png";
const imgVenue = "/venue.png";
const imgTravel = "/travel.png";
const imgDressCode = "/dress-code.png";
const imgSchedule = "/schedule-bg.png";

const palette = ["#626875", "#d0b2b2", "#d0a290", "#a3c2b4", "#f6e5ca"];

export default function Home() {
  return (
    <main className={styles.story}>
      <section className={`${styles.hero} ${styles.section}`}>
        <img className={styles.heroTop} src={imgHeroTop} alt="" />
        <img className={styles.heroBottom} src={imgHeroBottom} alt="" />
        <div className={`${styles.heroContent} ${styles.container}`}>
          <p className={styles.signature}>Vladimir &amp; Alina</p>
          <p className={styles.subtitle}>Дорогая мама, приглашаем тебя на нашу свадьбу!</p>
          <p className={styles.date}>22 Мая 2026</p>
          <p className={styles.country}>Грузия</p>
        </div>
      </section>

      <nav className={styles.topNav}>
        <div className={`${styles.container} ${styles.navRow}`}>
          <span>Приглашение</span>
          <span>Место проведения</span>
          <span>Как добраться</span>
          <span>Где жить</span>
          <span>Дресс-код</span>
          <span>Расписание</span>
          <span>Что дарить</span>
        </div>
      </nav>

      <section className={`${styles.section} ${styles.sectionVenue}`}>
        <div className={styles.split}>
          <article className={`${styles.panel} ${styles.panelGreen}`}>
            <h2>Место проведения</h2>
            <p>
              Свадьба пройдет в аутентичном отеле Nekresi Estate среди виноградников, в горах на
              юге Грузии, примерно в 2,5-3 часах езды от Тбилиси.
            </p>
          </article>
          <img className={styles.splitImage} src={imgVenue} alt="Nekresi Estate" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTravel}`}>
        <div className={`${styles.container} ${styles.centeredCopy}`}>
          <h2>Как добраться</h2>
          <p>
            Вы можете прилететь в Тбилиси заранее, а 22 мая в 15:00 мы будем рады видеть вас на
            нашей свадьбе. Мы организовали трансфер из Тбилиси, чтобы вам было удобно добраться.
            Если вы планируете поехать самостоятельно, точный адрес: Nekresi, Kvareli 4816,
            Georgia.
          </p>
        </div>
        <div className={styles.travelImageWrap}>
          <img src={imgTravel} alt="Дорога к месту проведения" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionStay}`}>
        <div className={`${styles.container} ${styles.centeredCopy}`}>
          <h2>Где жить</h2>
          <p>
            С 22 по 23 мая для вас будет забронирован номер в отеле Nekresi Estate, чтобы вы
            могли провести этот вечер с нами и отдохнуть после праздника. Заселение с 15:00.
            Утром вас будет ждать завтрак в отеле.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDress}`}>
        <div className={`${styles.container} ${styles.dressGrid}`}>
          <img src={imgDressCode} alt="Пример дресс-кода" />
          <div>
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

      <section className={`${styles.section} ${styles.schedule}`}>
        <img src={imgSchedule} alt="" className={styles.scheduleBg} />
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

      <footer className={`${styles.section} ${styles.gifts}`}>
        <div className={`${styles.container} ${styles.centeredCopy}`}>
          <h2>Что дарить</h2>
          <p>
            Ваше присутствие самый ценный подарок для нас. Если захотите дополнить его, мы будем
            рады небольшому и символичному подарку. Впереди у нас медовый месяц и путешествие
            налегке, а чемоданы уже переполнены Алиниными платьишками.
          </p>
          <p className={styles.copyright}>Vladimir &amp; Alina &copy; 2026 till Forever</p>
        </div>
      </footer>
    </main>
  );
}
