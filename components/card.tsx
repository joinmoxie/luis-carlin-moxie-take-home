import styles from "./card.module.css";

function Card({ children }: { children: React.ReactNode }) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
