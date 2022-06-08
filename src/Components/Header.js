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
				<li className={classes.li}>
				<a href="/">Hem</a>
				</li>
				<li className={classes.li}>
				<a href="/">Om mig</a>
				</li>
				<li className={classes.li}>
				<a href="/">Projekt</a>
				</li>
				<li className={classes.li}>
					<a href="/">Kontakt</a>
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
