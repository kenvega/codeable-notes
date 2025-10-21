function Form() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return <form>{/* form code... */}</form>;
}
