import Image from "next/image";
import imgTravel from "../../../public/travel.png";
import imgVenue from "../../../public/venue.png";
import styles from "./page.module.scss";
import { INVITED_FRIENDS_INFO } from "@/shared/constants";
import { MainBanner } from "@/components/MainBanner";
import { DressCode } from "@/components/DressCode";
import { Schedule } from "@/components/Schedule/Schedule";
import FooterLogo from '../../../public/footer-logo.svg'
import { Apartments } from "@/components/Apartments";

const staticSlugs = Object.keys(INVITED_FRIENDS_INFO)

export function generateStaticParams() {
  return staticSlugs.map((slug) => ({ slug }));
}

export default function Home() {
  return (
    <main className={styles.story}>
      <MainBanner />

      <section className={`${styles.section} ${styles.sectionVenue}`}>
        <div className={styles.split}>
          <article className={`${styles.container} ${styles.panelGreen}`}>
            <h2>Место проведения</h2>
            <p>
              Свадьба пройдет в аутентичном отеле Nekresi Estate среди виноградников, в горах на
              юге Грузии, примерно в 2,5-3 часах езды от Тбилиси.
            </p>
          </article>
          <div className={styles.blockImageWrapper}>
            <Image className={styles.splitImage} src={imgVenue} alt="Nekresi Estate" fill objectFit="cover" />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTravel}`}>
        <div className={`${styles.container} ${styles.travelInfo}`}>
          <h2>Как добраться</h2>
          <p>
            Вы можете прилететь в Тбилиси заранее, а 22 мая в 15:00 мы будем рады видеть вас на
            нашей свадьбе. Мы организовали трансфер из Тбилиси, чтобы вам было удобно добраться.
            Если вы планируете поехать самостоятельно, точный адрес: <a target="_blank" referrerPolicy="no-referrer" href="https://maps.app.goo.gl/25va8vZgNW16gGSS6">Nekresi,&nbsp;Kvareli&nbsp;4816,&nbsp;Georgia.</a>
          </p>
        </div>
      </section>
      <section className={styles.travelImageWrap}>
        <div>
          <Image src={imgTravel} alt="Дорога к месту проведения" fill />
        </div>
      </section>

      <Apartments />
      <DressCode />
      <Schedule />

      <section className={`${styles.section} ${styles.gifts}`}>
        <h2>Что дарить</h2>
        <p>
          Ваше присутствие самый ценный подарок для нас. Если захотите дополнить его, мы будем
          рады небольшому и символичному подарку. Впереди у нас медовый месяц и путешествие
          налегке, а чемоданы уже переполнены Алиниными платьишками.
        </p>
      </section>
      <footer className={styles.footer}>
        <div>
          <Image src={FooterLogo} alt="footer-logo"  />
          <p>Vladimir & Alina © 2026 till Forever</p>
        </div>
      </footer>
    </main>
  );
}
