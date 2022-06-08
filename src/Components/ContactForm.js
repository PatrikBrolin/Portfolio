import React from "react";
import classes from "./ContactForm.module.css";
import { MdAttachEmail } from 'react-icons/md';

const ContactForm = () => {
	const sendEmailHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div className={classes.form__div}>
      <div className={classes.form__info}>
        <h2 className={classes.form__info__h2}>KONTAKT</h2>
        <h3 className={classes.form__info__h3}>I behov av en frontend utvecklare?</h3>
        <p className={classes.form__info__p}>Skicka mig ett meddelande så kanske jag blir din nästa kollega</p>
        <a href = "mailto: patrikbrolin@hotmail.com" className={classes.form__info__a}>patrikbrolin@hotmail.com<MdAttachEmail /></a>
      </div>
			<form className={classes.form} onSubmit={sendEmailHandler}>
        <label>Namn:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label htmlFor="contact__textarea">Meddelande:</label>
        <textarea id="contact__textarea"></textarea>
        <button className={classes.form__button} type="submit">Skicka</button>
      </form>
		</div>
	);
};

export default ContactForm;
