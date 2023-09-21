import styles from "./layout.module.css";

export function ContentWithFooter({ children }: { children: React.ReactNode }) {
  return <div className={styles.contentWithFooter}>{children}</div>;
}

export function TwoColumnLayoutWithFooter({
  left,
  right,
  footer,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className={styles.twoColumnLayoutWithFooter}>
      <div className={styles.mainContent}>
        <div className={styles.leftCol}>{left}</div>
        <div className={styles.rightCol}>{right}</div>
      </div>
      {footer}
    </div>
  );
}
