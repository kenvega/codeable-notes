function Form() {
  const [username, setUsername] = React.useState("");

  function handleChange(event) {
    setUsername(event.target.value);
  }

  return <input value={username} onChange={handleChange} />;
}

export default Form;
