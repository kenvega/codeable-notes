// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Login from "../components/components_clase5/Login";

describe("Login", () => {
  // con las herramientas que tenemos hasta ahora se puede probar el componente de Login de esta manera:
  test("submit the form calls onSubmitForm with username and password", async () => {
    const user = userEvent.setup();

    // Create a 'mock' function that make sure that handleSubmit is called with the correct arguments
    let submittedData;
    const handleSubmit = (data) => {
      submittedData = data;
    };

    render(<Login onFormSubmit={handleSubmit} />);
    const userData = { username: "Testino", password: "secret" };

    // Type into the input fields
    await user.type(screen.getByLabelText(/username/i), userData.username);
    await user.type(screen.getByLabelText(/password/i), userData.password);

    // Click submit button
    await user.click(screen.getByRole("button", { name: /login/i }));

    // Assert that the submittedData is the same as the input fields
    expect(submittedData).toEqual(userData);
  });
});
