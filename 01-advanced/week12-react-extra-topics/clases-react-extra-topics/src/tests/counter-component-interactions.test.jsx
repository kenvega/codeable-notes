// @vitest-environment jsdom

import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { beforeEach, describe, expect, test } from "vitest";
import Counter from "../components/components_clase3/Counter";

let rootDiv;

beforeEach(() => {
  // limpiamos el body y volvemos a agregar un div vacío
  document.body.innerHTML = "";
  rootDiv = document.createElement("div");
  document.body.append(rootDiv);
});

describe("Counter", () => {
  test("start with the counter on 0", async () => {
    const root = createRoot(rootDiv);

    await act(async () => {
      root.render(<Counter />);
    });

    const message = document.body.querySelector("h1");

    expect(message.textContent).toBe("Counter: 0");

    // Unmount/cleanup at the end of each test (avoid test leakage)
    root.unmount();
    rootDiv.remove();
  });

  test("increments by one when increment button is clicked", async () => {
    const root = createRoot(rootDiv);
    await act(async () => {
      root.render(<Counter />);
    });

    const message = document.body.querySelector("h1");
    const buttons = document.body.querySelectorAll("button");
    const incrementButton = buttons[2];

    // flush any updates and effects triggered by this code before I assert
    await act(async () => {
      incrementButton.click();
    });
    expect(message.textContent).toBe("Counter: 1");

    // flush any updates and effects triggered by this code before I assert
    await act(async () => {
      incrementButton.click();
    });
    expect(message.textContent).toBe("Counter: 2");

    // Unmount/cleanup at the end of each test (avoid test leakage)
    root.unmount();
    rootDiv.remove();
  });

  test("decrements by one when decrement button is clicked", async () => {
    const root = createRoot(rootDiv);
    await act(async () => {
      root.render(<Counter />);
    });

    const message = document.body.querySelector("h1");
    const buttons = document.body.querySelectorAll("button");
    const decrementButton = buttons[0];

    // flush any updates and effects triggered by this code before I assert
    await act(async () => {
      decrementButton.click();
    });
    expect(message.textContent).toBe("Counter: -1");

    // flush any updates and effects triggered by this code before I assert
    await act(async () => {
      decrementButton.click();
    });
    expect(message.textContent).toBe("Counter: -2");
  });

  test("resets to 0 when reset button is clicked", async () => {
    const root = createRoot(rootDiv);
    await act(async () => {
      root.render(<Counter />);
    });

    const message = document.body.querySelector("h1");
    const buttons = document.body.querySelectorAll("button");

    // nota que si la estructura del componente cambiara estos tests se romperian
    const incrementButton = buttons[2];
    const resetButton = buttons[1];

    // flush any updates and effects triggered by this code before I assert
    await act(async () => {
      incrementButton.click();
      incrementButton.click();
      resetButton.click();
    });
    expect(message.textContent).toBe("Counter: 0");
  });
});
