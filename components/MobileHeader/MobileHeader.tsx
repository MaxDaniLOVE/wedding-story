import { SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './MobileHeader.module.scss'
import SidebarLogo from '../../public/sidebar-logo.svg'
import Image from 'next/image';
import { LINKS } from '@/shared/constants';
import Link from 'next/link';
import { SectionIds } from '@/types';

let scrollY = 0;

export const blockBodyScroll = (isBlock: boolean) => {
  if (isBlock) {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    return
  }
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';

  window.scrollTo(0, scrollY);
}

const AnimatedIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`${styles.animatedBurger} ${isOpen ? styles.open : ''} `} id='close-icon'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
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

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpenSidebar) {
        return
      }

      const target = event.target as HTMLDivElement
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && target?.id !== 'close-icon') {
        setIsOpenSidebar(false)
        blockBodyScroll(false)
      }
    }

    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 64)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [sidebarRef, isOpenSidebar])

  return (
    <>
      <button className={`${styles.iconWrapper} ${isOpenSidebar ? styles.open : ''}`} onClick={toggle}>
        <AnimatedIcon isOpen={isOpenSidebar} />
      </button>
      <aside className={`${styles.sidebarContainer} ${isOpenSidebar ? styles.open : ''}`} ref={sidebarRef}>
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
