import { useState } from "react";
import Input from "./Input";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    login(formData);
    // login(formData)
    //   .then((user) => console.log(user))
    //   .catch((error) => console.log(error));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@mail.com"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="******"
        label="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
