// @vitest-environment jsdom

import { expect, test } from "vitest";

test("El objeto document debe existir", () => {
  // si no usara la directiva de jsdom no tendria acceso a la variable document
  expect(document).toBeDefined();
});
