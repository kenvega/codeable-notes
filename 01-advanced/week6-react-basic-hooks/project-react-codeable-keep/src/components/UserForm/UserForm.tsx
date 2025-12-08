import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import styles from "./UserForm.module.css";

// TODO: en lugar de enviar el setter deberias enviar una funcion handler y este componente solo deberia invocar esa funcion
type UserFormProps = {
  // TODO: pregunta: este type deberia ser este?
  setUsername: Dispatch<SetStateAction<string>>;
};

const UserForm = ({ setUsername }: UserFormProps) => {
  const [user, setUser] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("username", user);
    setUsername(user);
  };

  return (
    <div>
      <h1 className={styles.title}>Welcome to Codeable Keep</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user}
          placeholder="Enter usename"
          onChange={handleChange}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default UserForm;
