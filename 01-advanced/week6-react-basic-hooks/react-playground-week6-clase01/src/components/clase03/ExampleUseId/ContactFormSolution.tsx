import React from "react";
import styles from "./ContactForm.module.css";

function ContactFormSolution() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // nota que como usas ahora React.useId
  // siempre tendras Ids unicos
  // entonces si renderizas mas de una vez estos componentes
  // se deberia ir a otro lado
  const id = React.useId()
  const emailId = `${id}-email`
  const messageId = `${id}-message`

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles["form"]}>
      <div className={styles["form-field"]}>
        <label htmlFor={emailId} className={styles["label"]}>
          Email:
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles["field"]}
        />
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor={messageId} className={styles["label"]}>
          Message:
        </label>
        <textarea
          id={messageId}
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

export default ContactFormSolution;
