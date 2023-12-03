import { expect, test } from "bun:test";
import { isPossibleGame, isAllowedCube, getGameIdFromTitle } from "./firstPuzzle";

const possibleGameInput = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
const impossibleGameInput = "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";

test("second day, first puzzle", () => {
  const isCorrectGreenCubeCount = isAllowedCube("green", 10);
  expect(isCorrectGreenCubeCount).toBe(true);

  const isIncorrectGreenCubeCount = isAllowedCube("green", 20);
  expect(isIncorrectGreenCubeCount).toBe(false);

  const possibleGame = isPossibleGame(possibleGameInput);
  expect(possibleGame).toBe(true);

  const impossibleGame = isPossibleGame(impossibleGameInput);
  expect(impossibleGame).toBe(false);

  const gameId10 = getGameIdFromTitle("Game 10");
  expect(gameId10).toBe(10);
})