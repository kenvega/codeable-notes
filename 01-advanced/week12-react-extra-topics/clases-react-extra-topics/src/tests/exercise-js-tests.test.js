import { test, expect, describe } from "vitest";

const calculateAreas = function (radiuses) {
  const output = [];

  for (let i = 0; i < radiuses.length; i++) {
    output.push(Math.PI * radiuses[i] * radiuses[i]);
  }

  return output;
};

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

describe("calculateAreas", () => {
  test("calculates the area of a circle given its radius", () => {
    const radiuses = [1, 2, 3, 4, 5];
    const expectedAreas = [
      Math.PI * 1 * 1,
      Math.PI * 2 * 2,
      Math.PI * 3 * 3,
      Math.PI * 4 * 4,
      Math.PI * 5 * 5,
    ];

    const actualAreas = calculateAreas(radiuses);
    expect(actualAreas).toEqual(expectedAreas);
  });

  test("returns an empty array when given an empty array", () => {
    const radiuses = [];
    const expectedAreas = [];

    const actualAreas = calculateAreas(radiuses);
    expect(actualAreas).toEqual(expectedAreas);
  });
});

describe("users array", () => {
  test("contains 5 users", () => {
    expect(users.length).toBe(5);
  });

  test("all users are at least 18 years old", () => {
    const allAdults = users.every((user) => user.age >= 18);
    expect(allAdults).toBe(true);
  });

  test("users is an instance of array", () => {
    expect(users).toBeInstanceOf(Array);
  });

  test("there is no user with the first name 'Alice'", () => {
    const hasAlice = users.find((user) => user.firstName === "Alice");
    expect(hasAlice).toBeUndefined(); // find returns undefined if not found
  });
});

// other tests
test.fails("decimals are not equal in javascript", () => {
  expect(0.2 + 0.1).toBe(0.3); // 0.2 + 0.1 is 0.30000000000000004
});

test("decimals are rounded to 5 after the point", () => {
  // 0.2 + 0.1 is 0.30000 | "000000000004" removed
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
  // nothing from 0.30000000000000004 is removed
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50);
});
