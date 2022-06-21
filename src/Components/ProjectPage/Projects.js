import React from 'react'
import classes from './Projects.module.css'

const Projects = (props) => {
  return(
    <div className={classes.Projects} ref={props.reference}>
      <div className={classes.projects__wrapper}>
        <a  className={classes.project__t_paita}target='_blank' href='https://github.com/PatrikBrolin/School-project-Webshop'>
          <div className={classes.project__t_paita__img}></div>
        </a>
        
        <a className={classes.project__banken} target='_blank' href='https://github.com/PatrikBrolin/Banken'>
        <div className={classes.project__banken__img}></div>
        </a>
        <a className={classes.project__bookduck} target='_blank' href='https://github.com/PatrikBrolin/BookDuck'>
        <div className={classes.project__bookduck__img}></div>
        </a>
        <a className={classes.project__paltbyrå} target='_blank' href='https://github.com/PatrikBrolin/School-project-HTML-and-CSS'>
        <div className={classes.project__paltbyrå__img}></div>
        </a>
      </div>
    </div>
  );
}

export default Projects