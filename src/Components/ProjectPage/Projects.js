import React from 'react'
import classes from './Projects.module.css'

const Projects = (props) => {
  return(
    <div className={classes.Projects} ref={props.reference}>
      <h1>Projekt</h1>
    </div>
  );
}

export default Projects