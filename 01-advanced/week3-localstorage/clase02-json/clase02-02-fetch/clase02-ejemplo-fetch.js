let url = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(url);

promise.then((response) => console.log(Object.getPrototypeOf(response))); // Response

promise.then((r) => console.log(r));
/* Response {
  status: 200,
  ok: true,
  url: "https://jsonplaceholder.typicode.com/users"
  headers: Headers {...},
  ...
}
*/
