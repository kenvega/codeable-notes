import {
  Form,
  useLocation,
  useActionData,
  redirect,
  type ActionFunctionArgs,
} from "react-router-dom";

import { authProvider } from "../auth";

interface ActionData {
  error?: string;
}

export function loader() {
  if (authProvider.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    await authProvider.login(username, password);
  } catch (error) {
    return { error: (error as Error).message };
  }

  const redirectTo = formData.get("redirectTo") as string;
  return redirect(redirectTo || "/");
}

const Login = () => {
  // Para poder redireccionar en el momento que hagamos Login
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  // En caso de que nuestro usuario se equivoque al momento de introducir
  // sus credenciales podemos utilizar el hook useActionData
  const actionData = useActionData() as ActionData;

  return (
    <Form method="post" replace>
      <input type="hidden" name="redirectTo" value={from} />
      <label>
        Username: <input name="username" />
      </label>
      <br />
      <label>
        Password: <input name="password" type="password" />
      </label>
      <br />
      <button type="submit">Login</button>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
    </Form>
  );
};

export default Login;
