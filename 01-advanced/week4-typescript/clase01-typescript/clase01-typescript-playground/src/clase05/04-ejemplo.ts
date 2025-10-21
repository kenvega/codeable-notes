type User = {
  name: string;
  age: number;
  email: string;
  id: number;
};

// se pueden tener tipos como parametro
const userHolder = new DataHolder<User>({
  id: 1,
  name: "John",
  age: 30,
  email: "john@example.com",
});
