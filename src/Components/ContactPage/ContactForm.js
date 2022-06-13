import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import { MdAttachEmail } from "react-icons/md";
import { send } from "emailjs-com";

const ContactForm = (props) => {
	const [toSend, setToSend] = useState({
		from_name: "",
		message: "",
		reply_to: "",
	});

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const sendEmailHandler = (e) => {
		e.preventDefault();
		send("service_d0ajimb", "template_6maysne", toSend, "fS0W49rRpBzNEbNPB")
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				setToSend({
					from_name: "",
					message: "",
					reply_to: "",
				});
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};
	return (
		<div ref={props.reference} className={classes.form__div}>
			<div className={classes.form__info}>
				<h2 className={classes.form__info__h2}>KONTAKT</h2>
				<h3 className={classes.form__info__h3}>
					I behov av en frontend utvecklare?
				</h3>
				<p className={classes.form__info__p}>
					Skicka mig ett meddelande så kanske jag blir din nästa
					kollega
				</p>
				<a
					href="mailto: patrikbrolin@hotmail.com"
					className={classes.form__info__a}
				>
					patrikbrolin@hotmail.com
					<MdAttachEmail />
				</a>
			</div>
			<form className={classes.form} onSubmit={sendEmailHandler}>
				<label>Namn:</label>
				<input
					type="text"
					name="from_name"
					placeholder="Ditt namn"
					value={toSend.from_name}
					onChange={handleChange}
				></input>
				<label>Email:</label>
				<input
					type="email"
					name="reply_to"
					placeholder="Din mail"
					value={toSend.reply_to}
					onChange={handleChange}
				></input>
				<label htmlFor="contact__textarea">Meddelande:</label>
				<textarea
					id="contact__textarea"
					name="message"
					placeholder="Ditt meddelande"
					value={toSend.message}
					onChange={handleChange}
				></textarea>
				<button className={classes.form__button} type="submit">
					Skicka
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
