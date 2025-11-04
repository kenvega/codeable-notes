import { useState, useEffect } from "react";

type ErrorComponentProps = {
  error: Error;
  resetErrorBoundary: (message: string) => void;
};

const ErrorComponent = ({ error, resetErrorBoundary }: ErrorComponentProps) => {
  return (
    <div className="error">
      <p>Error message: {error.message}</p>
      <button
        onClick={() => resetErrorBoundary("Mensaje desde ErrorComponent")}
      >
        Volver a intentar
      </button>
    </div>
  );
};

export default ErrorComponent;
