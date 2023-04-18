import styles from "./section.module.scss";

const section = ({ children, heading }) => {
  return (
    <div className={styles.section}>
      {children}
      <div className={styles.sectionHeader}>
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default section;
