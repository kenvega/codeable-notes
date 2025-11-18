// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Login from "../../components/components_clase5/Login";
// usando mock functions de Vitest podemos simplificar el test del componente Login

describe("Login", () => {
  test("submit the form calls onSubmitForm with username and password", async () => {
    const user = userEvent.setup();

    // Vitest mock function:
    const handleSubmit = vi.fn();

    render(<Login onFormSubmit={handleSubmit} />);
    const userData = { username: "Testino", password: "secret" };

    await user.type(screen.getByLabelText(/username/i), userData.username);
    await user.type(screen.getByLabelText(/password/i), userData.password);

    await user.click(screen.getByRole("button", { name: /login/i }));

    // new matchers using the mocked function
    expect(handleSubmit).toHaveBeenCalledWith(userData);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
