import React from "react";
import classes from "./Hero.module.css";
import { Parallax} from "react-scroll-parallax";

const Hero = (props) => {
	return (
		<>
			<div className={classes.hero} ref={props.reference}>
				<Parallax speed={-30}>
				<h2 className={classes.h2}>Hej jag är Patrik Brolin</h2>
				<p className={classes.p}>
					Jag är en frontend utvecklare baserad i Stockholm
				</p>
				</Parallax>
				<div onClick={props.click} className={classes.contact__link}>
					<span className={classes.contact__link__span}></span>
					<span className={classes.contact__link__span}></span>
					<span className={classes.contact__link__span}></span>
				</div>
				
			</div>
		</>
	);
};

export default Hero;
