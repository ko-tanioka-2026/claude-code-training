import styles from "./NewsSection.module.css";

const NEWS = [
  { date: "2025-06-01", title: "ニュースタイトル（サンプル）1" },
  { date: "2025-04-15", title: "ニュースタイトル（サンプル）2" },
  { date: "2025-02-10", title: "ニュースタイトル（サンプル）3" },
] as const;

export default function NewsSection() {
  return (
    <section id="news" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>News</h2>
        <ul className={styles.list}>
          {NEWS.map((n) => (
            <li key={n.title} className={styles.item}>
              <time dateTime={n.date} className={styles.date}>
                {n.date}
              </time>
              <span className={styles.title}>{n.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
