import { useState } from "react";

const Input = () => {
  const [username, setUsername] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  return <input value={username} onChange={handleChange} />;
};

export default Input;
