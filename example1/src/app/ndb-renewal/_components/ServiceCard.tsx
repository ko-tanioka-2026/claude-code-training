import styles from "./ServiceCard.module.css";

type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}
