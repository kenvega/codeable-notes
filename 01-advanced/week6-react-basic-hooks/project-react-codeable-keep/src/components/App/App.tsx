// import styles from "./App.module.css";
import { useState } from "react";
import UserForm from "../UserForm";
import NotesApp from "../NotesApp";

function App() {
  const [username, setUsername] = useState("");
  const userInStorage = localStorage.getItem("username");

  return (
    <div>
      {userInStorage || username ? (
        <NotesApp username={userInStorage || username} />
      ) : (
        <UserForm setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
