import { sumAllSpottedNumbers } from "./firstPuzzle.ts";
import { sumPartNumbers } from "./chatGPTPuzzle.ts";

const chatGPTInput = Bun.file("chatGPTInput.txt");
const chatGPTText = await chatGPTInput.text();
const chatGPTResult = sumPartNumbers(chatGPTText);
console.log(chatGPTResult);

const firstInputFile = Bun.file("firstPuzzleInput.txt");
const firstInputText = await firstInputFile.text();

const firstPuzzleResult = sumAllSpottedNumbers(firstInputText);
console.log(firstPuzzleResult);