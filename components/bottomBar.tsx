import styles from "./bottomBar.module.css";

interface BottomBarProps {
  children: React.ReactNode;
}

function BottomBar({ children }: BottomBarProps) {
  return <div className={styles.container}>{children}</div>;
}

export default BottomBar;
