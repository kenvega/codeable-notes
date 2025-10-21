import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* es importante el orden. primero el reset y luego el global */}
    <Global styles={reset} />
    <Global styles={global} />
    {/* App heredera los estilos de reset y global */}
    <App />
  </StrictMode>
);
