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

import cn from "classnames";
import { useState } from "react";

export default function Skills({skillsRef}) {
  const [active, setActive] = useState(1);
  const [size, setSize] = useState(50);
  return (
    <Section heading={"Skills"}>
      <div className={styles.skillsContainer} ref={skillsRef}>
        <div className={styles.choose}>
          <ul>
            <li
              onClick={() => {
                setActive(1);
              }}
              className={cn(active === 1 && styles.active)}
            >
              Frontend
            </li>
            <li
              onClick={() => {
                setActive(2);
              }}
              className={cn(active === 2 && styles.active)}
            >
              Backend
            </li>
            <li
              onClick={() => {
                setActive(3);
              }}
              className={cn(active === 3 && styles.active)}
            >
              Extra
            </li>
          </ul>
        </div>
        <div className={styles.sliderContainer}>
          {active === 1 ? (
            <div className={cn(active === 1 && styles.active)}>
              <Html size={size} />
              <Css size={size} />
              <Javascript size={size} />
              <Next size={size} />
              <Sass size={size} />
              <React size={size} />
              <Bootstrap size={size} />
              <Redux size={size} />
            </div>
          ) : active === 2 ? (
            <div className={cn(active === 2 && styles.active)}>
              <Node size={size} />
              <Postman size={size} />
              <Strapi size={size} />
              <Mongo size={size} />
              <Wordpress size={size} />
            </div>
          ) : active === 3 ? (
            <div className={cn(active === 3 && styles.active)}>
              <Git size={size} />
              <Figma size={size} />
              <Trello size={size} />
              <VScode size={size} />
              <Vercel size={size} />
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
