import styles from "./Recruitment.module.css";

export default function Recruitment() {
  return (
    <section id="recruitment" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>採用情報</h2>
        <p className={styles.message}>
          私たちは、情報技術でお客様の課題解決を支援する会社です。
          開発・導入からオンサイト支援・コンサルテーションまで、
          幅広い現場でエンジニアが活躍しています。
        </p>
        <a href="#" aria-disabled="true" className={styles.btn}>
          採用情報を見る
        </a>
      </div>
    </section>
  );
}
