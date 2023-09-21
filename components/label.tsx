import { HTMLAttributes, ReactNode } from "react";
import styles from "./label.module.css";

interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function Label({ children, ...props }: LabelProps) {
  return (
    <p {...props} className={styles.label}>
      {children}
    </p>
  );
}

export default Label;
