import { useState } from "react";
import Input from "./Input";
// import { createUser } from "../services/user-service";

type SignUpFormProps = {
  onSignUp: (userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => void;
};

const SignUpForm = ({ onSignUp }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    onSignUp(formData);
    // createUser(formData)
    //   .then((user) => console.log(user))
    //   .catch((error) => console.log(error));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
      <Input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        label="First Name"
      />
      <Input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        label="Last Name"
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignUpForm;
