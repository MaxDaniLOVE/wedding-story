'use client'

import styles from "./FormPage.module.scss";
import {  ChangeEvent, FormEvent, useCallback, useState, type CSSProperties } from "react";
import MainBannerBg from '../../../public/main-banner.jpg'
import { LINK_IDS } from "@/shared/constants";
import { useInvitedUser } from "@/shared/hooks";
import { NamesSvg, WeddingSvg } from "@/components/MainBanner/MainBanner";
import { usePathname, useRouter } from "next/navigation";

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <WeddingSvg />
      <NamesSvg />
    </div>
  )
}

export function FormPage() {
  const invitedFriendInfo = useInvitedUser()
  const [value, setValue] = useState('')
  const [hasError, setHasError] = useState(false)
  const router = useRouter()
  const path  = usePathname()

  const onSubmit = useCallback((e?: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    const answer = invitedFriendInfo.answer.map((answer) => answer.toLowerCase().trim())

    const result = value.toLowerCase().trim()

    if (!answer.includes(result)) {
      setHasError(true)
    } else {
      let newPath = path;
      if (path.endsWith('/')) {
        newPath = path.slice(0, -1)
      }
      router.push(`${newPath}/success`)
    }
  },[invitedFriendInfo.answer, path, router, value])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setHasError(false)
    const value = e.target.value;
    setValue(value)
  }, [])

  return (
    <main className={styles.story}>
        <section
        className={`${styles.section}`}
        style={{ backgroundImage: `url(${MainBannerBg.src})` } as CSSProperties}
        id={LINK_IDS.INVITE}
      >
        <div className={`${styles.heroContent} ${styles.container}`}>
          <Logo />
          <form className={styles.formWrapper} onSubmit={onSubmit}>
            <label htmlFor="input" className={styles.subtitle}>{invitedFriendInfo?.question}</label>
            <div className={`${styles.inputWrapper} ${hasError ? styles.error : ''}`}>
              <input
                autoComplete='off'
                id='input'
                onChange={onChange}
                value={value}
                className={`${styles.input} ${hasError ? styles.error : ''}`}
                placeholder="Введите ответ"
              />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.818923 21.6855C1.75985 22.1806 3.13285 22.0802 3.88559 21.4615L15.5219 11.8963C16.1594 11.3723 16.1594 10.6277 15.5219 10.1037L3.88559 0.53853C3.13285 -0.0802326 1.75985 -0.180555 0.818923 0.314457C-0.122007 0.809467 -0.274562 1.71236 0.478182 2.33113L11.0241 11L0.478182 19.6689C-0.274562 20.2876 -0.122007 21.1905 0.818923 21.6855Z" fill="#FBFDFB"/>
                </svg>
              </button>
            </div>
            <p className={hasError ? styles.errorLabel : ''}>Неверно :(</p>
          </form>
        </div>
    </section>
    </main>
  );
}
