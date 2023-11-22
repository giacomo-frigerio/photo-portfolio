import styles from "./Contact.module.css";

function Contact() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>mappa con indirizzo</p>
      <form className={styles.contactsForm} onSubmit={submitHandler}>
        <div className={styles.contactsFormBody}>
          <input type="text" id="firstName" placeholder="First Name*"></input>
          <input type="text" id="lastName" placeholder="Last Name*"></input>
          <input type="mail" id="email" placeholder="Email*"></input>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
          ></input>
          <input type="text" id="website" placeholder="Website"></input>
          <input type="text" id="company" placeholder="Company"></input>
          <input
            type="text"
            id="message"
            placeholder="Type a message here..."
          ></input>
        </div>
        <button>Send it</button>
      </form>
    </div>
  );
}

export default Contact;
