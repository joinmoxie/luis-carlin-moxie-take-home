import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "./inputField.module.css";
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputField(
  { ...props }: InputFieldProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return <input className={styles.input} ref={ref} {...props} />;
}

export default forwardRef(InputField);
