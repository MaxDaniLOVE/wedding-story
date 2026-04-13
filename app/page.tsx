
import styles from "./page.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <main className={styles.story}>
      There will be form
    </main>
  );
}
