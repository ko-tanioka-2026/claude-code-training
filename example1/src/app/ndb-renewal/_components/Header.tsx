import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/ndb-renewal" className={styles.logo}>
          日本デェイブレイク株式会社
        </Link>
        <nav aria-label="グローバルナビゲーション" className={styles.nav}>
          <a href="#services">サービス</a>
          <a href="#features">会社の特徴</a>
          <a href="#news">News</a>
          <a href="#contact" className={styles.ctaLink}>
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
