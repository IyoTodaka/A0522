// const { test, it, expect } = require('vitest')
import { test, it, expect } from 'vitest'

test("two plus two is four", () => {
  expect(2 + 2).toBe(4); //matchers
});

//toBe --> Object
//toEqual --> {} === {}

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  //{ one: 1, two: 2}
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// falsy values --- undefined, null, false

test("null", () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;

  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//numbers

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("string", () => {
  expect("t").toBe("t");
  expect("A").toEqual("A");
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

const shoppingList = [
  "orange",
  "veggies",
  "diapers",
  "chocolates",
  "ham",
  "pineapple"
];

test("the shopping list has ham in it", () => {
    expect(shoppingList).toContain("ham")
    expect(new Set(shoppingList)).toContain("chocolates")
})

function compileWithError(){

    throw new Error("Error: Something went wrong on purpose.")
}

test("compile and throw unexpected error", () => {
    expect(() => compileWithError()).toThrow(Error)

    // use the exact error message or a regexp
    expect(() => compileWithError()).toThrow(/wrong/)
})


import { add } from '../math'

it('should yield the expected sum of two numbers', () => {
  const num1 = 1
  const num2 = 2

  const result = add(num1, num2)
  expect(result).toBe(3)
})