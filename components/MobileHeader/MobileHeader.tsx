import { SyntheticEvent, useCallback, useState } from 'react';
import styles from './MobileHeader.module.scss'
import SidebarLogo from '../../public/sidebar-logo.svg'
import Image from 'next/image';
import { LINKS } from '@/shared/constants';
import Link from 'next/link';
import { SectionIds } from '@/types';

const BurgerSVG = () => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <circle cx="27" cy="27" r="27" fill="#FBFDFC"/>
    <rect x="13" y="26" width="28" height="2" rx="1" fill="#40615A"/>
    <rect x="13" y="18" width="28" height="2" rx="1" fill="#40615A"/>
    <rect x="13" y="34" width="28" height="2" rx="1" fill="#40615A"/>
  </svg>
)}

const CrossSVG = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <rect x="0.393433" y="20.1924" width="28" height="2" rx="1" transform="rotate(-45 0.393433 20.1924)" fill="#FBFDFB"/>
  <rect x="1.41418" width="28" height="2" rx="1" transform="rotate(45 1.41418 0)" fill="#FBFDFB"/>
</svg>
}

export const blockBodyScroll = (isBlock: boolean) => {
  if (isBlock) {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
    return
  }
  document.body.style.overflow = 'auto'
  document.body.style.height = 'auto'
}


export const MobileHeader = ({ activeBlock }: { activeBlock: SectionIds }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const toggle = () => {
    setIsOpenSidebar((isOpen) => {
      blockBodyScroll(!isOpen)
      return !isOpen
  })
}

  const onClickLink = useCallback((e:  SyntheticEvent<HTMLAnchorElement>, id: string) => {
    setIsOpenSidebar(false)
    blockBodyScroll(false)
    e.preventDefault()
    const container = document.querySelector(`#${id}`) as HTMLDivElement
    if (!container) return
    window.scrollTo({ top: container.offsetTop, behavior: 'smooth' })
  }, [])

  return (
    <>
      <button className={`${styles.iconWrapper} ${isOpenSidebar ? styles.open : ''}`} onClick={toggle}>
        {isOpenSidebar ? <CrossSVG /> : <BurgerSVG />}
      </button>
      <aside className={`${styles.sidebarContainer} ${isOpenSidebar ? styles.open : ''}`}>
          <div className={styles.linksWrapper}>
            <Image src={SidebarLogo.src} alt='logo' width={SidebarLogo.width} height={SidebarLogo.height}/>
            {LINKS.map(({ id, label }) => (
              <Link
                onClick={e => onClickLink(e, id)}
                href={`#${id}`}
                key={id}
                className={activeBlock === id ? styles.active : ''}
              >
                {label}
              </Link>
            ))}
          </div>
      </aside>
    </>
)};
