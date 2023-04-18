import Github from "@/assets/logos/Github";
import styles from "./Links.module.scss";
import LinkedIn from "@/assets/logos/LinkedIn";

import { useRouter } from "next/router";

const handleClick = (url) => {
  console.log('test')
  window.open(url, "_blank");
};
export default function Links() {
  return (
    <div className={styles.linksContainer}>
      <div className={styles.links}>
        <Github
          size={"25px"}
          click={() => {
            handleClick("https://github.com/PatrikBrolin");
          }}
        />
        <LinkedIn size={"25px"}   click={() => {
            handleClick("https://www.linkedin.com/in/patrik-brolin");
          }}/>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
