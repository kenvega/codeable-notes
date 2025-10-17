import { redirect } from "react-router-dom";
import { deleteBook } from "../../services/booksService";

export async function destroyBook({ params }) {
  const bookId = Number(params.bookId);
  await deleteBook(bookId);
  return redirect("/books");
}
