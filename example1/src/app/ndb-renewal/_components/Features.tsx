import styles from "./Features.module.css";

const FEATURES = [
  {
    label: "ライフサイクル全体を支援",
    body: "情報システムのライフサイクル全般にわたって、企画・開発・運用・保守を一貫して支援します。",
  },
  {
    label: "お客様先での常駐支援",
    body: "お客様先に常駐し、現場に密着したオンサイト支援を提供します。",
  },
  {
    label: "業務ノウハウとPM経験の活用",
    body: "業務ノウハウとプロジェクト管理の経験を活かし、IT課題の解決を支援します。",
  },
] as const;

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>会社の特徴</h2>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.label} className={styles.item}>
              <h3 className={styles.label}>{f.label}</h3>
              <p className={styles.body}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
