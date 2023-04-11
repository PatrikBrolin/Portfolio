import styles from "./LightButton.module.scss";

export default function LightButton({children,  link, click}) {
  return (
  
      <div className={styles.button} onClick={click}>
        <div className={styles.button__line}></div>
        <div className={styles.button__line}></div>
        <span className={styles.button__text}>{children}</span>
        <div className={styles.button__drow1}></div>
        <div className={styles.button__drow2}></div>
      </div>

  );
}
