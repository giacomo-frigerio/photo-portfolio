import { useRef, useState } from "react";
import styles from "./Contact.module.css";

const isEmpty = (value) => {
  if (value.trim().length === 0) return true;
  return false;
};

const mailIsValid = (mail) => {
  const validSymbolsEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (validSymbolsEmail.test(String(mail).toLowerCase())) return true;
  return false;
};

const phoneNumberIsValid = (phoneNumber) => {
  const validSymbolsPhoneNumber =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  if (isEmpty(phoneNumber)) return true;

  if (validSymbolsPhoneNumber.test(phoneNumber)) return true;
  return false;
};

function Contact() {
  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
    message: true,
  });
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhoneNumber = phoneNumberRef.current.value;
    const enteredMessage = messageRef.current.value;

    const firstNameValidity = !isEmpty(enteredFirstName);
    const lastNameValidity = !isEmpty(enteredLastName);
    const emailValidity = !isEmpty(enteredEmail) && mailIsValid(enteredEmail);
    const phoneNumberValidity = phoneNumberIsValid(enteredPhoneNumber);
    const messageValidity = !isEmpty(enteredMessage);

    setFormValidity({
      firstName: firstNameValidity,
      lastName: lastNameValidity,
      email: emailValidity,
      phoneNumber: phoneNumberValidity,
      message: messageValidity,
    });
  };

  const firstNameClass = formValidity.firstName ? "" : styles.invalidInput;
  const lastNameClass = formValidity.lastName ? "" : styles.invalidInput;
  const emailClass = formValidity.email ? "" : styles.invalidInput;
  const phoneNumberClass = formValidity.phoneNumber ? "" : styles.invalidInput;
  const messageClass = formValidity.message ? "" : styles.invalidInput;
  const formIsValid =
    formValidity.firstName &&
    formValidity.lastName &&
    formValidity.email &&
    formValidity.message;

  return (
    <div id={styles.contact}>
      <h1>Contact</h1>
      <form className={styles.contactsForm} onSubmit={submitHandler}>
        <input
          type="text"
          id="firstName"
          placeholder="First Name*"
          ref={firstNameRef}
          className={firstNameClass}
        ></input>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name*"
          ref={lastNameRef}
          className={lastNameClass}
        ></input>
        <input
          type="mail"
          id="email"
          placeholder="Email*"
          ref={emailRef}
          className={emailClass}
        ></input>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          ref={phoneNumberRef}
          className={phoneNumberClass}
        ></input>
        <input type="text" id="website" placeholder="Website"></input>
        <input type="text" id="company" placeholder="Company"></input>
        <input
          type="text"
          id={styles.message}
          placeholder="Type a message here..."
          ref={messageRef}
          className={messageClass}
        ></input>
        <button>Send it</button>
      </form>
      {!formIsValid && <p>Insert necessary fields</p>}
    </div>
  );
}

export default Contact;
