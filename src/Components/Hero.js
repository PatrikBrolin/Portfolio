import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={classes.hero}>
			<h2 className={classes.h2}>Patrik Brolin</h2>
			<p className={classes.p}>Frontend utvecklare</p>
			<div className={classes.contact__link}>
        <span className={classes.contact__link__span}></span>
        <span className={classes.contact__link__span}></span>
        <span className={classes.contact__link__span}></span>
      </div>
		</div>
	);
};

export default Hero;
