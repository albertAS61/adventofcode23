const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numbers = [...digits, ...numberWords];

export const parseNumberWordToDigit = (numberWord: string) => {
  const digitIndex = numberWords.indexOf(numberWord);
  return Number(digits[digitIndex]);
}

export const readCalibrationValueOld = (calibrationText: string): number => {
  let firstDigit = [null, null];
  let secondDigit = [null, null];

  const iterableCalibrationText = Array.from(calibrationText);
  iterableCalibrationText.forEach((char, index) => {
    const parsedChar = parseInt(char);
    if (isNaN(parsedChar)) return;

    const [firstDigitIndex] = firstDigit;
    if (firstDigitIndex === null) {
      firstDigit = [index, parsedChar];
    }
    secondDigit = [index, parsedChar];
  })

  return Number(`${firstDigit[1]}${secondDigit[1]}`);
}

export const readCalibrationInput = (calibrationInput: string): number => {
  const numberOccurances = {};

  numbers.forEach((number, index) => {
    const firstNumberIndex = calibrationInput.indexOf(number);
    numberOccurances[firstNumberIndex] = number;

    const lastNumberIndex = calibrationInput.lastIndexOf(number);
    numberOccurances[lastNumberIndex] = number;
  });

  const numberOccuranceIndexes = Object.keys(numberOccurances).map((key) => parseInt(key)).filter((key) => key >= 0);
  const lowestIndex = Math.min(...numberOccuranceIndexes);
  const highestIndex = Math.max(...numberOccuranceIndexes);

  const firstDigit = numberOccurances[lowestIndex];
  const secondDigit = numberOccurances[highestIndex];

  console.log(numberOccurances)

  const formattedFirstDigit = isNaN(Number(firstDigit)) ? parseNumberWordToDigit(firstDigit) : firstDigit;
  const formattedSecondDigit = isNaN(Number(secondDigit)) ? parseNumberWordToDigit(secondDigit) : secondDigit;

  return Number(`${formattedFirstDigit}${formattedSecondDigit}`)
}

export const resolveCalibration = async (calibrationText: string) => {
  return calibrationText.split("\n").reduce((summary, calibrationInput) => {
    const calibrationValue = readCalibrationInput(calibrationInput);
    return summary + calibrationValue;
  }, 0)
}