'use client'

import Image from "next/image";
import imgTravel from "../../../public/travel.jpg";
import imgVenue from "../../../public/venue.jpg";
import styles from "./SuccessPage.module.scss";
import { MainBanner } from "@/components/MainBanner";
import { DressCode } from "@/components/DressCode";
import { Schedule } from "@/components/Schedule/Schedule";
import FooterLogo from '../../../public/footer-logo.svg'
import { Apartments } from "@/components/Apartments";
import { useInvitedUser } from "@/shared/hooks";
import { LINK_IDS, PARALLAX_SPEED } from "@/shared/constants";
import { MobileHeader } from "@/components/MobileHeader";
import { useEffect, useState } from "react";
import { SectionIds } from "@/types";

export function SuccessPage() {
  const invitedFriendInfo = useInvitedUser()

  const [showTopNav, setShowTopNav] = useState(false);
  const [activeBlock, setActiveBlock] = useState<SectionIds>('invite')
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  useEffect(() => {
    if (isOpenSidebar) {
      return;
    }

    const headerOffset = 92;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sectionNodes = document.querySelectorAll<HTMLElement>("section[id]");
    const readSectionTops = () =>
      [...sectionNodes].map((section) => ({
        id: section.getAttribute("id") as SectionIds,
        top: section.offsetTop,
      }));

    let sectionTops = readSectionTops();

    let apartmentsParallaxBase = 0;
    let scheduleParallaxBase = 0;

    const measureParallaxBases = () => {
      const apartments = document.getElementById(LINK_IDS.APARTMENTS);
      const schedule = document.getElementById(LINK_IDS.SCHEDULE);
      if (apartments) {
        apartmentsParallaxBase =
          window.scrollY + apartments.getBoundingClientRect().top;
      }
      if (schedule) {
        scheduleParallaxBase =
          window.scrollY + schedule.getBoundingClientRect().top;
      }
    };

    const invite = () => document.getElementById(LINK_IDS.INVITE);

    let rafId = 0;
    let scrollQueued = false;
    let lastShowTopNav = false;
    let lastActive: SectionIds | null = null;

    const applyFrame = () => {
      const y = window.scrollY;

      if (y >= 100) {
        if (document.documentElement.style.backgroundColor !== "var(--night)") {
          document.documentElement.style.backgroundColor = "var(--night)";
        }
      } else if (document.documentElement.style.backgroundColor !== "var(--paper)") {
        document.documentElement.style.backgroundColor = "var(--paper)";
      }

      if (!reduceMotion) {
        const inv = invite();
        if (inv) {
          inv.style.setProperty("--parallax-offset", `${y * PARALLAX_SPEED}px`);
        }
        const ap = document.getElementById(LINK_IDS.APARTMENTS);
        if (ap) {
          ap.style.setProperty(
            "--parallax-offset",
            `${(y - apartmentsParallaxBase) * PARALLAX_SPEED}px`,
          );
        }
        const sch = document.getElementById(LINK_IDS.SCHEDULE);
        if (sch) {
          sch.style.setProperty(
            "--parallax-offset",
            `${(y - scheduleParallaxBase) * PARALLAX_SPEED}px`,
          );
        }
      }

      const showNav = y >= headerOffset;
      if (showNav !== lastShowTopNav) {
        lastShowTopNav = showNav;
        setShowTopNav(showNav);
      }

      let nextActive: SectionIds = sectionTops[0]?.id ?? LINK_IDS.INVITE;
      for (const { id, top } of sectionTops) {
        if (y >= top - headerOffset) {
          nextActive = id;
        }
      }
      if (nextActive !== lastActive) {
        lastActive = nextActive;
        setActiveBlock(nextActive);
      }
    };

    const flush = () => {
      scrollQueued = false;
      rafId = 0;
      applyFrame();
    };

    const onScroll = () => {
      if (scrollQueued) {
        return;
      }
      scrollQueued = true;
      rafId = window.requestAnimationFrame(flush);
    };

    const onResize = () => {
      measureParallaxBases();
      sectionTops = readSectionTops();
      if (!scrollQueued) {
        scrollQueued = true;
        rafId = window.requestAnimationFrame(flush);
      }
    };

    measureParallaxBases();
    applyFrame();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpenSidebar]);

  return (
    <>

      <MobileHeader activeBlock={activeBlock} setIsOpenSidebar={setIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
      <main className={styles.story}>
        <MainBanner activeBlock={activeBlock} invitedFriendInfo={invitedFriendInfo} showTopNav={showTopNav} />
        <section className={`${styles.section} ${styles.sectionVenue}`} id={LINK_IDS.PLACE}>
          <div className={styles.split}>
            <article className={`${styles.container} ${styles.panelGreen}`}>
              <h2>Место проведения</h2>
              <p>
                Свадьба пройдет в аутентичном отеле Nekresi Estate среди виноградников,
                в живописных горах Грузии, примерно в 2,5–3 часах езды от Тбилиси.
              </p>
            </article>
            <div className={`${styles.blockImageWrapper}`}>
              <Image className={styles.splitImage} src={imgVenue} alt="Nekresi Estate" fill objectFit="cover" />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTravel}`} id={LINK_IDS.HOW_TO_GET}>
          <div className={`${styles.container} ${styles.travelInfo}`}>
            <h2>Как добраться</h2>
            <p>
              Вы можете прилететь в Тбилиси заранее, а 22 мая с 14:00 мы будем рады видеть вас на нашей свадьбе.
              Мы организовали трансфер из Тбилиси, чтобы вам было удобно добраться. Если вы планируете поехать самостоятельно,
              точный адрес: <a target="_blank" referrerPolicy="no-referrer" href="https://maps.app.goo.gl/25va8vZgNW16gGSS6">Nekresi,&nbsp;Kvareli&nbsp;4816,&nbsp;Georgia.</a>
            </p>
          </div>
        </section>
        <div className={styles.travelImageWrap}>
          <div id='car' className={`${styles.carImageWrapper}`}>
            <Image src={imgTravel} alt="Дорога к месту проведения" fill />
          </div>
        </div>

        <Apartments />
        <DressCode />
        <Schedule />

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
