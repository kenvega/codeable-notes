import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./routes/Login";
import Notes, { loader as notesLoader } from "./routes/Notes";
import { authProvider } from "./auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Notes />,
    loader: notesLoader,
    children: [
      {
        path: "trashNotes",
        element: <h1>Trash Notes</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
    loader: loginLoader,
  },
  {
    path: "/logout",
    action() {
      authProvider.logout();
      return redirect("/login");
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
