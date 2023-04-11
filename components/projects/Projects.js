import Section from "../layout/ui/section/section";
import styles from "./Projects.module.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import Button from "../layout/design/Button/DarkButton";
import LightButton from "../layout/design/Button/LightButton";

export default function Projects({ isVisible }) {
  const router = useRouter();
  const [partnaActive, setPartnaActive] = useState(false);
  const [eWalletActive, seteWalletActive] = useState(false);
  const [tPaitaActive, settPaitaActive] = useState(false);
  const [bookDuckActive, setBookDuckActive] = useState(false);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.pattern}></div>
        <div
          className={cn(styles.partna, isVisible && styles.visible)}
          onMouseOver={() => {
            setPartnaActive(true);
          }}
          onMouseLeave={() => {
            setPartnaActive(false);
          }}
        >
          {partnaActive && (
            <div className={cn(styles.projectDescription)}>
              <p>
                Partna is a digital platform where it is easy to do business and
                collaborate. Partna provides business tools to help users
                establish and manage relationships, find service providers, and
                discover new business opportunities. I worked on this product in
                a team for 6 months
              </p>
              <div className={styles.buttonContainer}>
                <LightButton
                  click={() => {
                    handleClick("https://www.partna.se");
                  }}
                >
                  Go to page
                </LightButton>
              </div>
            </div>
          )}
        </div>
        <div
          className={cn(styles.eWallet, isVisible && styles.visible)}
          onMouseOver={() => {
            seteWalletActive(true);
          }}
          onMouseLeave={() => {
            seteWalletActive(false);
          }}
        >
          {eWalletActive && (
            <div className={cn(styles.projectDescription)}>
              <p>
                E-wallet is a app thats build on react. The application is a
                redux state management project{" "}
              </p>
              <div className={styles.buttonContainer}>
                <LightButton
                  click={() => {
                    handleClick("https://github.com/PatrikBrolin/E-Wallet");
                  }}
                >
                  See code
                </LightButton>
              </div>
            </div>
          )}
        </div>
        <div
          className={cn(styles.tPaita, isVisible && styles.visible)}
          onMouseOver={() => {
            settPaitaActive(true);
          }}
          onMouseLeave={() => {
            settPaitaActive(false);
          }}
        >
          {tPaitaActive && (
            <div className={cn(styles.projectDescription)}>
              <p>
                T-paita is a webshop that sells only white t-shirts. The project
                is done in vanilla javascript the website features a homepage,
                productpage and a checkout{" "}
              </p>
              <div className={styles.buttonContainer}>
                <LightButton
                  click={() => {
                    handleClick(
                      "https://github.com/PatrikBrolin/School-project-Webshop"
                    );
                  }}
                >
                  See code
                </LightButton>
              </div>
              <div className={styles.buttonContainer}>
                <LightButton
                  click={() => {
                    handleClick(
                      "https://patrikbrolin.github.io/School-project-Webshop/"
                    );
                  }}
                >
                  See page
                </LightButton>
              </div>
            </div>
          )}
        </div>
        <div
          className={cn(styles.bookDuck, isVisible && styles.visible)}
          onMouseOver={() => {
            setBookDuckActive(true);
          }}
          onMouseLeave={() => {
            setBookDuckActive(false);
          }}
        >
          {bookDuckActive && (
            <div className={cn(styles.projectDescription)}>
              <p>
                Bookduck is a book and e-book community that features
                functionality to add new books. The projects is built on vanilla
                javascript and uses Strapi as a headleas CMS to store data.{" "}
              </p>
              <div className={styles.buttonContainer}>
                <LightButton
                  click={() => {
                    handleClick("https://github.com/PatrikBrolin/BookDuck");
                  }}
                >
                  See code
                </LightButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
