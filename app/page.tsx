
import Image from "next/image";
import styles from "./page.module.scss";
import Banner from '../public/banner.png'

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// const withBasePath = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <main className={styles.story}>
      <Image src={Banner} alt='banner' fill objectFit="cover" />
    </main>
  );
}
