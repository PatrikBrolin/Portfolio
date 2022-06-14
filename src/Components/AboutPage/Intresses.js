import React from 'react'
import classes from './Intresses.module.css';

const Intresses = () =>{
  return(
    <div className={classes.intresses__wrapper}>
      <div className={classes.position__div}>
        <p className={classes.intresses__p}>Jag har ett stort intresse för fotboll och träning</p>
      </div>
      <div className={classes.position__div}>
          <div className={classes.image}></div>
      </div>
    </div>
  );
}

export default Intresses