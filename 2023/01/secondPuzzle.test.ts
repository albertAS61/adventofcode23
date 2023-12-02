import { expect, test } from "bun:test"
import { readCalibrationInput, parseNumberWordToDigit } from "./secondPuzzle.ts"

test("first day, second puzzle", () => {
  const calibrationValue12 = readCalibrationInput("1abc2a");
  expect(calibrationValue12).toBe(12);

  const calibrationValue38 = readCalibrationInput("pqr3stu8vwx");
  expect(calibrationValue38).toBe(38);

  const calibrationValue15 = readCalibrationInput("a1b2c3d4e5f");
  expect(calibrationValue15).toBe(15);

  const calibrationValue77 = readCalibrationInput("treb7uchet");
  expect(calibrationValue77).toBe(77);

  const calibrationValue35 = readCalibrationInput("three2six8two5");
  expect(calibrationValue35).toBe(35);

  const calibrationValue88 = readCalibrationInput("8four488");
  expect(calibrationValue88).toBe(88);

  const calibrationValue = readCalibrationInput("twoonesevenonesix77");
  expect(calibrationValue).toBe(27);

  const nineTo9 = parseNumberWordToDigit("nine");
  expect(nineTo9).toBe(9);

  const sixTo6 = parseNumberWordToDigit("six");
  expect(sixTo6).toBe(6);
});