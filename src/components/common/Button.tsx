import React from "react";
import styles from "../../styles/Login.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <div className={styles.Button} {...props} />
);

export default Button;
