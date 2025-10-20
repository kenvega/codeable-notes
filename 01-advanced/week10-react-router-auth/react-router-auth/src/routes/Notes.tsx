import { Link, useFetcher, Outlet } from "react-router-dom";
import { authProvider } from "../auth";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

export function loader({ request }: LoaderFunctionArgs) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    // se guarda la ruta desde la que se intento acceder pero que no estabas autenticado
    // asi cuando hagas login y te acepte te redirige a esa ruta
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}

const Notes = () => {
  const fetcher = useFetcher();
  return (
    <>
      <div>Notes</div>
      <Link to="/login">Go to login page</Link>
      <fetcher.Form method="post" action="/logout">
        <button type="submit">Sign out</button>
      </fetcher.Form>
      {/* Preparado para una ruta anidada */}
      <Outlet />
    </>
  );
};

export default Notes;
