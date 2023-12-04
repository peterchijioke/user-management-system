import React from "react";
import styles from "../../styles/Login.module.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const TextInput: React.FC<TextInputProps> = ({ title, ...props }) => (
  <input className={styles.Input} {...props} />
);

export default TextInput;
