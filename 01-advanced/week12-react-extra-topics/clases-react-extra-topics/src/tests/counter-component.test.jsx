// @vitest-environment jsdom

// aqui solo se prueba que el componente renderiza correctamente con el estado inicial

import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { describe, expect, test } from "vitest";
import Counter from "../components/components_clase3/Counter";

describe("Counter", () => {
  test("start with the counter on 0", async () => {
    // jsdom inicia con el body vacío
    const rootDiv = document.createElement("div");
    document.body.append(rootDiv);

    const root = createRoot(rootDiv);

    // renderiza el componente en el documento
    await act(async () => {
      root.render(<Counter />);
    });

    // seleccionamos el elemento que nos interesa
    const message = document.body.querySelector("h1");

    // realizamos la(s) afirmaciones (asegurarse de que el título comience con "Counter: 0")
    expect(message.textContent).toBe("Counter: 0");

    // root.unmount();
    // rootDiv.remove();
  });
});
