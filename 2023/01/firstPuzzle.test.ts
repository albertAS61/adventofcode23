import { expect, test } from "bun:test";
import findSantaDestinationFloor from "./firstPuzzle";

test("first day, first puzzle", () => {
  const groundFloor = findSantaDestinationFloor("(())");
  expect(groundFloor).toBe(0);

  const thirdFloor = findSantaDestinationFloor("(((");
  expect(thirdFloor).toBe(3);

  const thirdFloorAnotherApproach = findSantaDestinationFloor("(()(()(");
  expect(thirdFloorAnotherApproach).toBe(3);

  const minusThirdFloor = findSantaDestinationFloor(")())())");
  expect(minusThirdFloor).toBe(-3);
})