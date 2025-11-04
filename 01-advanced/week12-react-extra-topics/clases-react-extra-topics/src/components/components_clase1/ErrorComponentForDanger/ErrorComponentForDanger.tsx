type ErrorComponentForDangerProps = {
  error: Error;
  resetErrorBoundary: (message: string) => void;
};

// esto es un componente de fallback que aparece cuando hay un error
const ErrorComponentForDanger = ({
  error,
  resetErrorBoundary,
}: ErrorComponentForDangerProps) => {
  return (
    <div>
      <p>ErrorComponentForDanger</p>
      <p>
        Mensaje que envía el componente Danger al lanzar su error:
        {error.message}
      </p>
      <button
        onClick={() => resetErrorBoundary("Mensaje de error actualizado")}
      >
        boton para volver a intentar renderizar el componente Danger
      </button>
    </div>
  );
};

export default ErrorComponentForDanger;
