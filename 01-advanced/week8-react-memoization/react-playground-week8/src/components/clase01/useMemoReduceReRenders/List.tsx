const users = [
  { name: "Sofía", country: "Argentina", email: "sofia@example.com" },
  { name: "Mateo", country: "México", email: "mateo@example.com" },
  { name: "Valentina", country: "Colombia", email: "valentina@example.com" },
  { name: "Lucas", country: "Perú", email: "lucas@example.com" },
  { name: "Emma", country: "Chile", email: "emma@example.com" },
  { name: "Gabriel", country: "Venezuela", email: "gabriel@example.com" },
  { name: "Isabella", country: "Uruguay", email: "isabella@example.com" },
  { name: "Diego", country: "Panamá", email: "diego@example.com" },
  { name: "Olivia", country: "Brasil", email: "olivia@example.com" },
  { name: "Sebastián", country: "España", email: "sebastian@example.com" },
];

function List({ options }) {
  console.log("List render");

  const { sortBy, sortOrder } = options;

  const sortedUsers = users.sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] < b[sortBy] ? -1 : 1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  return sortedUsers.map((user) => (
    <div
      key={user.email}
    >{`${user.name} | ${user.email} | ${user.country}`}</div>
  ));
}

export default List;
