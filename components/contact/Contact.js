import { useState } from "react";

import Section from "../layout/ui/section/section";
import MapChart from "../layout/ui/map/map";
import emailjs from "emailjs-com";
import Snackbar from "../utilities/snackbar/Snackbar";

import styles from "./contact.module.scss";
import { ValidateEmail } from "@/lib/helpFunctions";

export default function Contact({contactRef}) {
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
        <div className={styles.left}>
          <div className={styles.formWrapper}>
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                {/* <label htmlFor="name">Name</label> */}
                <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.inputGroup}>
                {/* <label htmlFor="email">Email</label> */}
                <input
                placeholder="Email"
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                {/* <label htmlFor="message">Write your message</label> */}
                <textarea
                placeholder="Write your message"
                  type="text"
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className={styles.right}>
          <MapChart />
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
