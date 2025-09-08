type User = {
  id: number;
  name: string;
  role: "user" | "admin";
  phone: { code: string; number: string };
};

type UserId = User["id"];
//     ^ type UserId = number

type UserName = User["name"];
//     ^ type UserName = string

type UserRole = User["role"];
//      ^ type UserRole = "user" | "admin"

type PhoneCode = User["phone"]["code"];
//       ^ type PhoneCode = string



// para el caso de tuplas
type User2 = {
  id: number;
  name: string;
  role: "user" | "admin";
  phone: { code: string; number: string };
}

type UserResponse = readonly [string | number, User2]

type Status = UserResponse[0]
type UserData = UserResponse[1]



const fruits = ['apple', 'banana', 'orange']

type Fruit = typeof fruits[number]
// parece que 'number' aqui se toma como si fuese parte de typescript tambien
// por eso no falla. interpreta como si fuera cualquier number.
// en vez de number podria ir 0 o 1 o 2, etc


const fruits2 = ['apple', 'banana', 'orange'] as const

type Fruit2 = (typeof fruits2)[2]