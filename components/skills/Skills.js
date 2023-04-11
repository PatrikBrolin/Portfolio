import Git from "@/assets/logos/Git";
import Css from "@/assets/logos/Css";
import Html from "@/assets/logos/Html";
import Javascript from "@/assets/logos/Javascript";
import React from "@/assets/logos/React";
import Next from "@/assets/logos/Next";
import Sass from "@/assets/logos/Sass";
import styles from "./Skills.module.scss";
import Github from "@/assets/logos/Github";
import Node from "@/assets/logos/Node";
import Mongo from "@/assets/logos/Mongo";
import Strapi from "@/assets/logos/Strapi";
import Postman from "@/assets/logos/Postman";
import Figma from "@/assets/logos/Figma";
import Redux from "@/assets/logos/Redux";
import Trello from "@/assets/logos/Trello";
import VScode from "@/assets/logos/VScode";
import Wordpress from "@/assets/logos/Wordpress";
import Vercel from "@/assets/logos/Vercel";
import Bootstrap from "@/assets/logos/Bootsrap";
import Section from "../layout/ui/section/section";

export default function Skills() {
  return (
    <Section>
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.frontendContainer}>
          <h3>Frontend</h3>
          <Javascript size={"50px"} />
        </div>
      </div>
    </Section>
  );
}
