
import styles from "./Email.module.scss";


export default function Email() {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.text}>
      <a href="mailto:patrikbrolin@hotmail.com">patrikbrolin@hotmail.com</a>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
