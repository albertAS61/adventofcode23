import findSantaDestinationFloor from "./firstPuzzle.ts";
import { resolveCalibration } from './secondPuzzle.ts';

const firstInputFile = Bun.file("firstPuzzleInput.txt");
const firstInputText = await firstInputFile.text();

const firstPuzzleResult = findSantaDestinationFloor(firstInputText);
console.log(firstPuzzleResult);

const secondInputFile = Bun.file("secondPuzzleInput.txt");
const secondInputText = await secondInputFile.text();
const secondPuzzleResult = await resolveCalibration(secondInputText);
console.log(secondPuzzleResult);
