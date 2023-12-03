import { sumAllPossibleGames } from "./firstPuzzle.ts";

const firstInputFile = Bun.file("firstPuzzleInput.txt");
const firstInputText = await firstInputFile.text();

const firstPuzzleResult = sumAllPossibleGames(firstInputText);
console.log(firstPuzzleResult);