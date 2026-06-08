import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "開発・導入サービス",
    description:
      "システムの企画・開発から導入まで一貫して支援します。",
  },
  {
    title: "オンサイトサービス",
    description:
      "お客様先に常駐し、システムの運用・保守をサポートします。",
  },
  {
    title: "コンサルテーションサービス",
    description:
      "業務ノウハウとプロジェクト管理経験をもとに、IT課題の解決を支援します。",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>サービス</h2>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
