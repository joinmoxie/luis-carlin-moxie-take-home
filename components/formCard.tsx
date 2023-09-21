import styles from "./formCard.module.css";

function FormCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h4>{title}</h4>
      </div>
      <form className={styles.form}>{children}</form>
    </div>
  );
}

export default FormCard;
