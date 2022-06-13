import React from 'react'
import classes from './About.module.css'
import AboutCarousel from './AboutCarousel'

const About = (props) => {
  return(
    <div ref={props.reference} className={classes.about__div}>
      <AboutCarousel />
    </div>
  );
}

export default About;