const books = [
  { id: 1, name: "Book 1", description: "Description for Book 1" },
  { id: 2, name: "Book 2", description: "Description for Book 2" },
  { id: 3, name: "Book 3", description: "Description for Book 3" },
  { id: 4, name: "Book 4", description: "Description for Book 4" },
  { id: 5, name: "Book 5", description: "Description for Book 5" },
];

export function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 800);
  });
}

export function getBook(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find((book) => book.id === id);

      if (book) {
        resolve(book);
      } else {
        reject(new Error(`Book with id ${id} not found`));
      }
    }, 800);
  });
}

export function deleteBook(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        resolve(books);
      } else {
        reject(new Error(`Book with id ${id} not found`));
      }
    }, 800);
  });
}
