import styles from "./section.module.scss";

const section = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

export default section;
