// Transfiere el código necesario al custom hook useForm
// de tal forma que pueda ser utilizado de la siguiente forma:

// function Exercise01() {
//   const [formData, handleFormChange] = useForm(initialValues);
//   const [status, setStatus] = React.useState("idle");

//   function handleSubmit(event) {
//     // ...
//   }

//   return ( /* ... */ )
// }

// export default Exercise01;

import React from "react";
import styles from "./Exercise01.module.css";

// import useForm from "../../hooks/useForm";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const url = "https://test-api-codeable.up.railway.app/api/data";

function Exercise01() {
  const [formData, setFormData] = React.useState(initialValues);
  const [status, setStatus] = React.useState("idle");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    setStatus("loading");
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setStatus("success");
          console.log(data);
        } else {
          setStatus("error");
          console.error(data.error);
        }
      });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.field}>
          Name:
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "loading"}
        />
        <label htmlFor="email" className={styles.field}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "loading"}
        />
        <label htmlFor="password" className={styles.field}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={status === "loading"}
        />
        <button className={styles.button} disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </form>
      {status === "success" && <p>✅ Data sent!</p>}
      {status === "error" && <p>🚫 Something went wrong!</p>}
    </div>
  );
}

export default Exercise01;
