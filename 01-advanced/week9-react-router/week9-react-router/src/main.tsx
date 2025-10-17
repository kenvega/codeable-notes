import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Login from "./components/Login";
import Games from "./components/Games";
import Companies from "./components/Companies";
import ErrorPage from "./components/ErrorPage";
import { getGames, getGame } from "./services/gamesService.ts";
import GameDetail from "./components/GameDetail";
import CompanyDetail from "./components/CompanyDetail";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import MovieEdit from "./components/MovieEdit";
import "./index.css";
import Books from "./components/Books/index.ts";
import BookDetail from "./components/BookDetail/index.ts";
import { getBook } from "./services/booksService.ts";
import { destroyBook } from "./routes/book/destroyBook.ts";

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
    children: [
      {
        index: true,
        element: <Games />,
        // if you set a loader alone it will feel that the app freezes until the data is loaded
        loader: async () => {
          return await getGames();
        },
      },
      {
        path: ":gameId",
        element: <GameDetail />,
        loader: async ({ params }) => {
          // show an error if game in url is not a number or is missing
          const { gameId } = params;
          if (!gameId) {
            throw new Error("gameId is required");
          }

          const game = await getGame(parseInt(gameId));
          if (!game) {
            throw new Error("Game not found");
          }

          return game;
        },
        errorElement: <ErrorPage />,
      },
    ],
  },
  // otra forma de renderizar las rutas anidadas es por separado
  {
    path: "/companies",
    element: <Companies />,
  },
  {
    path: "/companies/:companyId",
    element: <CompanyDetail />,
  },
  // para mostrar funcionamiento de Outlet
  {
    path: "/movies",
    element: <Movies />,
    children: [
      { path: ":movieId", element: <MovieDetail /> },
      {
        path: ":movieId/edit",
        element: <MovieEdit />,
      },
    ],
  },
  // to show useNavigation and useLoaderData
  {
    path: "/books",
    element: <Books />,
    children: [
      {
        path: ":bookId",
        element: <BookDetail />,
        loader: async ({ params }) => {
          const { bookId } = params;
          console.log("bookId params: ", bookId);
          if (!bookId) {
            throw new Error("bookId is required");
          }
          return await getBook(parseInt(bookId));
        },
        errorElement: <ErrorPage />,
      },
      {
        path: ":bookId/destroy",
        action: destroyBook,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

// declarative routing

// import { BrowserRouter, Route, Routes } from "react-router-dom";
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
