import { Form, useLoaderData, useNavigation } from "react-router-dom";

type Book = {
  id: number;
  name: string;
  description: string;
};

function BookDetail() {
  const book = useLoaderData() as Book;

  const navigation = useNavigation();

  if (!book) {
    return <div>Book not found</div>;
  }

  if (navigation.state === "loading") {
    return <div>Loading Book...</div>;
  }

  return (
    <div>
      <h1>Books detail</h1>
      <p>Details for book {book?.name}</p>
      <ul>
        <li>
          <strong>Id:</strong> {book?.id}
        </li>
        <li>
          <strong>Name:</strong> {book?.name}
        </li>
        <li>
          <strong>Description:</strong> {book?.description}
        </li>
      </ul>

      {/* TODO: not working not sure why */}
      <Form method="post" action="destroy">
        <button type="submit">Delete book</button>
      </Form>
    </div>
  );
}

export default BookDetail;
