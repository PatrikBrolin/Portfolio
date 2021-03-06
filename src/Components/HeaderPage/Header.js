import React, {useState, useEffect} from "react";
import classes from "./Headers.module.css";

const Header = (props) => {
	
	const [menuState, setMenuState]  = useState(false)

	useEffect(() => {
		function handleResize(){
			if(window.innerWidth > 600){
				setMenuState(false)
			} 
		}
		window.addEventListener('resize', handleResize)

		return _ => {
      window.removeEventListener('resize', handleResize)
		}
	})

	

	const menuHandler = () => {
		!menuState ? setMenuState(true): setMenuState(false)
	}

	return (
		<header className={classes.header}>
			<ul className={!menuState ? classes.ul : classes.ul__active}>
				<li className={classes.li} onClick={props.homeClick}>
					Hem
				</li>
				<li className={classes.li} onClick={props.aboutClick}>
					Om mig
				</li>
				<li className={classes.li} onClick={props.projectsClick}>
			Projekt
				</li>
				<li className={classes.li} onClick={props.contactFormClick}>
					Kontakt
				</li>
			</ul>
			<div className={classes.header__content__mobile} onClick={menuHandler}>
				<span className={!menuState ? classes.header__content__mobile__span : classes.header__content__mobile__span__active} ></span>
				<span className={!menuState ? classes.header__content__mobile__span : classes.header__content__mobile__span__active}></span>
				<span className={!menuState ? classes.header__content__mobile__span : classes.header__content__mobile__span__active}></span>
			</div>
		</header>
	);
};

export default Header;
