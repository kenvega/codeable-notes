import { expect, test } from "vitest";

// Funciones a probar
function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

async function sumAsync(a, b) {
  return a + b;
}

// Pruebas

// Prueba sum
test("sum suma 2 números", () => {
  const result = sum(3, 4);
  const expected = 7;
  expect(result).toBe(expected);
});

// Prueba substract
test("substract resta 2 números", () => {
  const result = substract(10, 6);
  const expected = 4;
  expect(result).toBe(expected);
});

// Prueba sumAsync
test("sum suma 2 números de manera asíncrona", async () => {
  const result = await sumAsync(3, 4);
  const expected = 7;
  expect(result).toBe(expected);
});
