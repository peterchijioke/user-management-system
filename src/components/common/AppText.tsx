import React, { FC, HTMLProps } from "react";
import styles from "../../styles/Login.module.css";

interface ITextProps extends HTMLProps<HTMLLabelElement> {}

const SmallText: FC<ITextProps> = (props) => {
  return <label className={styles.SmallText} {...props} />;
};

const MediumText: FC<ITextProps> = (props) => {
  return <label className={styles.MediumText} {...props} />;
};
const LargeText: FC<ITextProps> = (props) => {
  return <label className={styles.LargeText} {...props} />;
};

const AppText = { SmallText, MediumText, LargeText };
export default AppText;
