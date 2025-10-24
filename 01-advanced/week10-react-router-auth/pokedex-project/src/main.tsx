import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/index.js";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* es importante el orden. primero el reset y luego el global */}
    <Global styles={reset} />
    <Global styles={global} />
    {/* App heredera los estilos de reset y global */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
