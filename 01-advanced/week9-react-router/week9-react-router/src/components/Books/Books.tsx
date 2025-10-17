import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getBooks } from "../../services/booksService";
import styles from "./Books.module.css";

type Book = {
  id: number;
  name: string;
  description: string;
};

function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#a9c26aff";

    getBooks().then((booksData) => {
      setBooks(booksData as Book[]);
    });

    // al desmontar el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <p>Shows a list of fetched books.</p>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : "";
              }}
              to={`/books/${book.id}`}
            >
              {book.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>

      <Outlet />
    </div>
  );
}

export default Books;
