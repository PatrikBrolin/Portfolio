import React from "react";
import classes from "./Hero.module.css";
import { Parallax, ParallaxContext } from "react-scroll-parallax";

const Hero = (props) => {
	return (
		<>
			<div className={classes.hero}>
				<Parallax speed={-20}>
				<h2 className={classes.h2}>Hej jag är Patrik Brolin</h2>
				<p className={classes.p}>
					Jag är en frontend utvecklare baserad i Stockholm
				</p>

				<div className={classes.contact__link}>
					<span className={classes.contact__link__span}></span>
					<span className={classes.contact__link__span}></span>
					<span className={classes.contact__link__span}></span>
				</div>
				</Parallax>
			</div>
		</>
	);
};

export default Hero;
