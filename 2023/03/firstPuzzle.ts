const isNotDigitOrPeriod = (char: string) => /[^\d.]/.test(char);
const isDigit = (char: string) => /\d/.test(char);
const lookForNumber = (possibleNumber: string, engine: string[][], x: number, y: number) => {
  const dx = x - 1;

  if (dx === -1 || dx === 9) return possibleNumber;
  if (isDigit(engine[dx][y])) {
    const updatedPossibleNumber = engine[dx][y] + possibleNumber;
    return lookForNumber(updatedPossibleNumber, engine, dx, y);
  }

  return possibleNumber;
}

export const sumAllSpottedNumbers = (inputText: string) => {
  const engine = inputText.split('\n').map((line) => line.split(''));
  const specialCharVectors = [];
  const numbers = [];

  for (let i = 0; i < engine.length; i++) {
    for (let j = 0; j < engine.length; j++) {
      if (isNotDigitOrPeriod(engine[i][j])) specialCharVectors.push([i, j]);
    }
  }

  const directions = [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1],
  ]

  specialCharVectors.forEach(([x, y]) => {
    directions.forEach(([dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;

      if (isDigit(engine[newX][newY])) {
        const test = lookForNumber(engine[newX][newY], engine, newX, newY);
        console.log(test);
      }
    });
  })

  return 0;
}