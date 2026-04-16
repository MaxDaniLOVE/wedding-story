'use client'

import Image from "next/image";
import imgTravel from "../../../public/travel.png";
import imgVenue from "../../../public/venue.png";
import styles from "./SuccessPage.module.scss";
import { MainBanner } from "@/components/MainBanner";
import { DressCode } from "@/components/DressCode";
import { Schedule } from "@/components/Schedule/Schedule";
import FooterLogo from '../../../public/footer-logo.svg'
import { Apartments } from "@/components/Apartments";
import { useInvitedUser } from "@/shared/hooks";
import { LINK_IDS } from "@/shared/constants";
import { MobileHeader } from "@/components/MobileHeader";
import { useEffect, useState } from "react";
import { SectionIds } from "@/types";

export function SuccessPage() {
  const invitedFriendInfo = useInvitedUser()

  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeBlock, setActiveBlock] = useState<SectionIds>('invite')
  const [isCarBlockActive, setIsCarBlockActive] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;
    const sections = document.querySelectorAll('section');
    const carCard = document.querySelector('#car') as HTMLElement;
    console.log(carCard);

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 92) { // 92px for header
          setActiveBlock(section.getAttribute('id') as SectionIds)
        }
      })

      if (carCard && (window.scrollY >= (carCard.offsetTop - 92) && (window.scrollY <= (carCard.offsetTop - 92 + carCard.clientHeight)))) {  // 92px for header
        setIsCarBlockActive(true);
      } else {
        setIsCarBlockActive(false)
      }

      frameId = window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
        frameId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log('MOUNTED');

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      <MobileHeader activeBlock={activeBlock} />
      <main className={styles.story}>
        <MainBanner activeBlock={activeBlock} invitedFriendInfo={invitedFriendInfo} scrollPosition={scrollPosition} />
        <section className={`${styles.section} ${styles.sectionVenue}`} id={LINK_IDS.PLACE}>
          <div className={styles.split}>
            <article className={`${styles.container} ${styles.panelGreen}`}>
              <h2>Место проведения</h2>
              <p>
                Свадьба пройдет в аутентичном отеле Nekresi Estate среди виноградников, в горах на
                юге Грузии, примерно в 2,5-3 часах езды от Тбилиси.
              </p>
            </article>
            <div className={`${styles.blockImageWrapper} ${activeBlock === LINK_IDS.PLACE ? styles.activeImageWrapper : ''}`}>
              <Image className={styles.splitImage} src={imgVenue} alt="Nekresi Estate" fill objectFit="cover" />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTravel}`} id={LINK_IDS.HOW_TO_GET}>
          <div className={`${styles.container} ${styles.travelInfo}`}>
            <h2>Как добраться</h2>
            <p>
              Вы можете прилететь в Тбилиси заранее, а 22 мая в 15:00 мы будем рады видеть вас на
              нашей свадьбе. Мы организовали трансфер из Тбилиси, чтобы вам было удобно добраться.
              Если вы планируете поехать самостоятельно, точный адрес: <a target="_blank" referrerPolicy="no-referrer" href="https://maps.app.goo.gl/25va8vZgNW16gGSS6">Nekresi,&nbsp;Kvareli&nbsp;4816,&nbsp;Georgia.</a>
            </p>
          </div>
        </section>
        <div className={styles.travelImageWrap}>
          <div id='car' className={`${styles.carImageWrapper} ${isCarBlockActive ? styles.activeImageWrapper : ''}`}>
            <Image src={imgTravel} alt="Дорога к месту проведения" fill />
          </div>
        </div>

        <Apartments scrollPosition={scrollPosition} />
        <DressCode activeBlock={activeBlock}  />
        <Schedule scrollPosition={scrollPosition} />

        <section className={`${styles.section} ${styles.gifts}`} id={LINK_IDS.GIFTS}>
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
    </>
  );
}
