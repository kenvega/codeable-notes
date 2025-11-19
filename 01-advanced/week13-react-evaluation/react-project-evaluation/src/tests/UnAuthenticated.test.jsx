// @vitest-environment jsdom

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Unauthenticated from "../components/Unauthenticated";
import "@testing-library/jest-dom/vitest";

describe("Unauthenticated", () => {
  test("should render login form", async () => {
    const user = userEvent.setup();
    render(<Unauthenticated />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
