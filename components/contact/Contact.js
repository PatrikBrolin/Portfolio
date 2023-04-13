import { useState, useRef, useEffect } from "react";

import Section from "../layout/ui/section/section";
import MapChart from "../layout/ui/map/map";
import emailjs from "emailjs-com";
import Snackbar from "../utilities/snackbar/Snackbar";

import styles from "./contact.module.scss";
import { ValidateEmail } from "@/lib/helpFunctions";

import DarkButton from "../layout/design/Button/DarkButton";

export default function Contact({ contactRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackBarOptions, setSnackBarOptions] = useState({
    status: "error",
    text: "",
  });

  // Show snackbar
  function showSnackBar(options) {
    setSnackBarOptions(options);
    setTimeout(() => {
      setSnackBarOptions({ status: "error", text: "" });
    }, [options?.duration || 5000]);
  }

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateName = formData?.name?.trim().length > 0;
    const validateEmail = ValidateEmail(formData?.email);
    const validateMessage = formData?.message.trim().length > 0;
    if (validateName && validateEmail && validateMessage) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICEID,
          process.env.NEXT_PUBLIC_TEMPLATEID,
          formData,
          process.env.NEXT_PUBLIC_PUBLICKEY
        )
        .then(
          (result) => {
            showSnackBar({
              status: "success",
              text: "Thank you for reaching out. Your email has been received and I will respond soon.",
              duration: 3000,
            });
          },
          (error) => {
            showSnackBar({
              status: "error",
              text: "Sorry, your email could not be sent.",
              duration: 3000,
            });
          }
        );
    } else {
      showSnackBar({
        status: "error",
        text: !validateName
          ? "Please provide me with your name"
          : !validateEmail
          ? "Please provide me with a correct email"
          : !validateMessage
          ? "Please provide me with a message"
          : null,
        duration: 5000,
      });
    }
  };

  return (
    <Section>
      <div className={styles.contactWrapper} ref={contactRef}>
        <div className={styles.textContent}>
          <h2>Send me a message! <a  href="mailto:patrkbrolin@hotmail.com" ><img src="./icons/arrow.png"/></a> </h2>
          <p>Got a question or proposal, or just want to say hello? shoot!</p>
        </div>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <section>
            <div>
              <div className={styles.name}>
                <label>Your name</label>
                <input placeholder="Enter your name" name="name" onChange={(e) => {
                  handleInputChange(e)
                }}></input>
              </div>
              <div className={styles.name}>
                <label>Your email</label>
                <input placeholder="Enter your email" name="email" onChange={(e) => {
                  handleInputChange(e)
                }}></input>
              </div>
            </div>
            <div>
              <div className={styles.message}>
                <label>Your message</label>
                <textarea placeholder="Enter your message" name="message" onChange={(e) => {
                  handleInputChange(e)
                }}></textarea>
              </div>
            </div>
            </section>
            <div className={styles.buttonContainer}>
           <button>Shoot <img src="./icons/arrow.gif"/></button>
            </div>
          </form>
        </div>
      </div>
      {snackBarOptions?.text && (
        <Snackbar
          show={true}
          status={snackBarOptions?.status}
          text={snackBarOptions?.text}
        />
      )}
    </Section>
  );
}
