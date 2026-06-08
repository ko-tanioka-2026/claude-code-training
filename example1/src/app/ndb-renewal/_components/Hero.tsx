import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="ヒーロー">
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          お客様と共に、
          <br />
          情報技術で未来を創る。
        </h1>
        <p className={styles.sub}>
          開発・導入からコンサルテーションまで、
          <br />
          情報システムのライフサイクル全般を支援します。
        </p>
        <div className={styles.ctas}>
          <a href="#services" className={styles.primaryBtn}>
            サービスを見る
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
