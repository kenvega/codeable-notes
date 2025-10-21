import React from "react";
import styles from "./ContactForm.module.css";

function ContactFormProblem() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles["form"]}>
      <div className={styles["form-field"]}>
        <label htmlFor="email" className={styles["label"]}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles["field"]}
        />
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor="message" className={styles["label"]}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles["field"]}
          rows={4}
        />
      </div>
      <button type="submit" className={styles["submit-button"]}>
        Send
      </button>
    </form>
  );
}

export default ContactFormProblem;
