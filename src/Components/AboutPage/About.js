import React from 'react'
import classes from './About.module.css'

const About = (props) => {
  return(
    <div ref={props.reference} className={classes.about__div}>
      <h1>Om mig</h1>
    </div>
  );
}

export default About;