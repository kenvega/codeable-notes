import * as React from "react";
import s from "./Unauthenticated.module.css";
import { useAuth } from "../../contexts/authContext";
import Button from "../Button";

function Unauthenticated() {
  const { login, signup } = useAuth();

  const [status, setStatus] = React.useState("idle");
  const [activeTab, setActiveTab] = React.useState("login");
  const [signUpErrors, setSignUpErrors] = React.useState(null);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    name: "email" | "password"
  ) {
    const { value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    if (activeTab === "login") {
      login(email, password)
        .then(() => setStatus("success"))
        .catch(() => setStatus("error"));
    } else {
      signup(email, password)
        .then(() => setStatus("success"))
        .catch((error) => {
          setStatus("error");
          setSignUpErrors(error.message);
        });
    }
  }

  function handleTabChange(tab: "login" | "signup") {
    setActiveTab(tab);
    setStatus("idle");
  }

  const isLoading = status === "loading";
  const buttonText = activeTab === "login" ? "Enter" : "Create";
  const hasError = status === "error";

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        <button
          onClick={() => handleTabChange("login")}
          className={activeTab === "login" ? s.active : ""}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange("signup")}
          className={activeTab === "signup" ? s.active : ""}
        >
          Signup
        </button>
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@example.com"
            value={email}
            onChange={(event) => handleInputChange(event, "email")}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => handleInputChange(event, "password")}
            required
            minLength={6}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : buttonText}
        </Button>
      </form>
      {hasError && (
        <p className={s["error-message"]}>
          {signUpErrors || "Invalid Credentials"}
        </p>
      )}
    </div>
  );
}

export default Unauthenticated;
