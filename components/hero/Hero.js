import styles from "./hero.module.scss";
import Section from "../layout/ui/section/section";
import DarkButton from "../layout/design/Button/DarkButton";

export default function Hero({contactRef, heroRef}) {

  const clickHandler = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section >
      <div className={styles.dotPattern}></div>
      <div className={styles.textContent} ref={heroRef}>
        <h2 className={styles.title}>Patrik Brolin</h2>
        <p className={styles.paragraph}>
          As a frontend developer, I create engaging and user-friendly web
          experiences with a focus on design and functionality.
        </p>
        <div className={styles.buttonContainer}><DarkButton click={clickHandler}>Hire me</DarkButton></div>
     
     
      </div>
    </Section>
  );
}
