import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return <form>{/* form code... */}</form>;
};

export default Form;
