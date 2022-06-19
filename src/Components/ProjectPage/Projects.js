import React from 'react'
import classes from './Projects.module.css'

const Projects = (props) => {
  return(
    <div className={classes.Projects} ref={props.reference}>
      <div className={classes.projects__wrapper}>
        <a  className={classes.project__t_paita}target='_blank' href='https://github.com/PatrikBrolin/School-project-Webshop'>
        </a>
        
        <a className={classes.project__banken} target='_blank' href='https://github.com/PatrikBrolin/Banken'></a>
        <a className={classes.project__bookduck} target='_blank' href='https://github.com/PatrikBrolin/BookDuck'></a>
        <a className={classes.project__paltbyrå} target='_blank' href='https://github.com/PatrikBrolin/School-project-HTML-and-CSS'></a>
      </div>
    </div>
  );
}

export default Projects