import styles from "./ContactCta.module.css";

export default function ContactCta() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>お問い合わせ</h2>
        <p className={styles.body}>
          サービスに関するご相談・お問い合わせはこちらからどうぞ。
        </p>
        <button type="button" className={styles.btn}>
          お問い合わせフォームへ
        </button>
      </div>
    </section>
  );
}
