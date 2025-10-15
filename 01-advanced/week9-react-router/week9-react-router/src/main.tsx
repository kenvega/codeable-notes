import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Login from "./components/Login";
import Games from "./components/Games";
import Companies from "./components/Companies";
import Error from "./components/Error";
import { getGames } from "./services/gamesService.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/games",
    element: <Games />,
    loader: async () => {
      return await getGames();
    },
  },
  {
    path: "/companies",
    element: <Companies />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route index element={<App />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/games" element={<Games />} />
//       <Route path="/companies" element={<Companies />} />
//       <Route path="*" element={<Error />} />
//     </Routes>
//   </BrowserRouter>
// );
