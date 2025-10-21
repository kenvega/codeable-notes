import { useState } from "react";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log({ email, password });
  // };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            value={formData.email}
            // onChange={(e) => {
            //   setFormData({ ...formData, email: e.target.value });
            // }}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            value={formData.password}
            // onChange={(e) => {
            //   setFormData({ ...formData, password: e.target.value });
            // }}
            onChange={handleChange}
            placeholder="******"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
