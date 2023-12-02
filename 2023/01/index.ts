import findSantaDestinationFloor from "./firstPuzzle.ts";

const inputFile = Bun.file("2023/01/firstPuzzleInput.txt");
const inputText = await inputFile.text();

const firstPuzzleResult = findSantaDestinationFloor(inputText);
console.log(firstPuzzleResult);