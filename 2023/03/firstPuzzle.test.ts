import { expect, test } from "bun:test";
import { findCharIndexes } from "./firstPuzzle.ts";

test("find char in line", () => {
  const withoutChar = findCharIndexes('467..114..');
  expect();

  const withSingleChar = findCharIndexes('...*......');
})