import styles from "./container.module.scss";

const container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default container;
