type User = { name: string; email: string };
type UserSuccess = readonly ["success", User];
type UserError = readonly ["error", Error];
type UserResponse = UserSuccess | UserError;
 
function getUser(): UserResponse {
  if (Math.random() > 0.5) {
    return ["success", { name: "Testino", email: "testino@mail.com" }];
  } else {
    return ["error", new Error("Something went wrong!")];
  }
}
 
const [result, data] = getUser();
 
result;
// ^ const result: "success" | "error"
 
data;
// ^ const data: User | Error
 
if (result === "success") {
  data;
//  ^ const data: User
} else {
  data;
//  ^ const data: Error
}