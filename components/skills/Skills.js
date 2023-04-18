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

export default function Skills({ skillsRef }) {
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
              <div>
                <Html size={size} />
                <span>HTML</span>
              </div>
              <div>
                <Css size={size} />
                <span>CSS</span>
              </div>
              <div>
                <Next size={size} />
                <span>NextJs</span>
              </div>
              <div>
                <Sass size={size} />
                <span>Sass</span>
              </div>
              <div>
                <React size={size} />
                <span>React</span>
              </div>
              <div>
                <Bootstrap size={size} />
                <span>Bootstrap</span>
              </div>
              <div>
                {" "}
                <Redux size={size} />
                <span>Redux</span>
              </div>
              <div>
              <Wordpress size={size} />
                <span>Wordpress</span>
              </div>
              <div>
              <Strapi size={size} />
                <span>Strapi</span>
              </div>
            </div>
          ) : active === 2 ? (
            <div className={cn(active === 2 && styles.active)}>
               <div>
               <Node size={size} />
                <span>NodeJs</span>
              </div>
              <div>
              <Postman size={size} />
                <span>Postman</span>
              </div>
              
              <div>
              <Mongo size={size} />
                <span>MongoDB</span>
              </div>
             
              
            
              
              
              
            </div>
          ) : active === 3 ? (
            <div className={cn(active === 3 && styles.active)}>
               <div>
               <Git size={size} />
                <span>Git</span>
              </div>
              <div>
              <Figma size={size} />
                <span>Figma</span>
              </div>
              <div>
              <Trello size={size} />
                <span>Trello</span>
              </div>
              <div>
              <VScode size={size} />
                <span>VsCode</span>
              </div>
              <div>
              <Vercel size={size} />
                <span>Vercel</span>
              </div>
             
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
