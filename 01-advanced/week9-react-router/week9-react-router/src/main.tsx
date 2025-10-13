import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Games from "./components/Games";
import Companies from "./components/Companies";
import Error from "./components/Error";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/games" element={<Games />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
