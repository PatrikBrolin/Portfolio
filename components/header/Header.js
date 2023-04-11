import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import cn from "classnames";
import Button from "../layout/design/Button/DarkButton";
import DarkButton from "../layout/design/Button/DarkButton";
import LightButton from "../layout/design/Button/LightButton";

function Header({ scrolled, projectsRef, contactRef, heroRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const clickHandler = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header
      className={cn(
        styles.header,
        scrolled && styles.isScrolled,
        isMenuOpen && styles.whiteBackground
      )}
    >
      {isMenuOpen && !scrolled && <div className={styles.dotPattern}></div>}
      <h1 className={styles.heading} onClick={() => heroRef.current.scrollIntoView({ behavior: 'smooth' })}>Patrik</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
         
          <li className={styles.li} onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
          {/* <li className={styles.li}>About</li>
          <li className={styles.li}>Toolbox</li> */}
        </ul>
      </nav>
      <div className={styles.buttonContainer}>
        {" "}
        {scrolled ? (
          <LightButton  click={clickHandler} >Contact</LightButton>
        ) : (
          <DarkButton click={clickHandler}>Contact</DarkButton>
        )}
      </div>
      <button
        className={cn(
          styles.hamburgerMenuBtn,
          isMenuOpen && styles.open,
          scrolled && styles.isScrolled
        )}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && (
        <div className={cn(styles.mobileMenu)}>
          <div className={styles.dotPattern}></div>

          <ul>
            {/* <li className={styles.li}>About</li>
            <li className={styles.li}>Toolbox</li> */}
            <li className={styles.li} onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Projects</li>

            <li className={styles.buttonContainer}>
              <DarkButton click={clickHandler}>Contact</DarkButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
