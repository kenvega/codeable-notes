// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import Counter from "../../components/components_clase3/Counter";
import { fireEvent, render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// se puede usar cleanup para desmontar automaticamente despues de cada test
// pero cambiando una configuracion global de vitest se logra el mismo efecto
// import { cleanup } from "@testing-library/react";
// import { afterEach } from "vitest";
// afterEach(() => {
//   cleanup();
// });

describe("Counter", () => {
  test("start with the counter on 0", () => {
    render(<Counter />);

    const message = document.body.querySelector("h1");

    expect(message.textContent).toBe("Counter: 0");
  });

  test("increments by one when increment button is clicked", () => {
    render(<Counter />);

    const message = document.body.querySelector("h1");
    const buttons = document.body.querySelectorAll("button");
    const incrementButton = buttons[2];

    // React 18 exige que los eventos que cambian de estado y generan un re-render estén envueltos en la función act
    // incrementButton.click(); // por eso solo con esta funciona no funciona el test
    act(() => incrementButton.click()); // pero de esta manera si funciona
    expect(message.textContent).toBe("Counter: 1");
    // incrementButton.click();
    // act(() => incrementButton.click()); // tambien en lugar de usar act aqui se puede usar fireEvent
    fireEvent.click(incrementButton); // asi funciona igual y es mas legible
    expect(message.textContent).toBe("Counter: 2");
  });

  test("decrements by one when decrement button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const message = document.body.querySelector("h1");
    const buttons = document.body.querySelectorAll("button");
    const decrementButton = buttons[0];

    // se usara para este caso userEvent en lugar de fireEvent porque simula mejor las interacciones del usuario real
    await user.click(decrementButton);
    expect(message.textContent).toBe("Counter: -1");
    await user.click(decrementButton);
    expect(message.textContent).toBe("Counter: -2");
  });

  test("resets to 0 when reset button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    screen.debug(); // con esto se puede hacer debug del test y ver el HTML renderizado

    // se puede usar screen para seleccionar elementos en lugar de document.body.querySelector
    // asi se puede hacer de manera mas general y no depender tanto de la estructura del HTML
    const message = screen.getByText("Counter", { exact: false }); // exact false significa que contenga Counter (en este ejemplo)
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });
    const resetButton = screen.getByRole("button", {
      name: "Reset",
    });

    await user.click(incrementButton);
    expect(message.textContent).toBe("Counter: 1");

    await user.click(resetButton);
    expect(message.textContent).toBe("Counter: 0");
  });
});
