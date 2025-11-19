// @vitest-environment jsdom

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import ColorGame from "../components/ColorGame";
import "@testing-library/jest-dom/vitest";

describe("ColorGame", () => {
  test("should render more boxes when input of colors is changed to higher number", async () => {
    const user = userEvent.setup();
    render(<ColorGame />);

    // note: inputs with type='number' have their role called 'spinbutton'
    const input = screen.getByRole("spinbutton");
    expect(input.value).toBe("6");

    // select the colors which are buttons with no text in it which translates to -> name: ""
    let boxes = screen.getAllByRole("button", { name: "" });
    expect(boxes).toHaveLength(6);

    // I wasn't able to change value with userEvent so used fireEvent
    fireEvent.change(input, { target: { value: "9" } });
    expect(input.value).toBe("9");

    boxes = screen.getAllByRole("button", { name: "" });
    expect(boxes).toHaveLength(9);
  });
});
