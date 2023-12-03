const cubeCountRules: Record<CubeColor, number> = {
  "red": 12,
  "green": 13,
  "blue": 14,
}

type CubeColor = "red" | "green" | "blue";

export const isAllowedCube = (cubeColor: CubeColor, cubeCount: number) => {
  const cubeColorCountRule = cubeCountRules[cubeColor];

  return cubeCount <= cubeColorCountRule;
}

export const isPossibleGame = (gameInput: string): boolean => {
  const [_, gameRounds] = gameInput.split(":");
  const rounds: string[] = gameRounds.split(";").map((round) => round.trim());
  const cubesCorrectness: boolean[] = []

  rounds.forEach((round) => {
    const cubes = round.split(",").map((cube) => cube.trim())

    cubes.forEach((cube) => {
      const [cubeCount, cubeColor]: { cubeCount: string, cubeColor: CubeColor } = cube.split(" ");
      const allowedCube = isAllowedCube(cubeColor, Number(cubeCount));
      cubesCorrectness.push(allowedCube);
    })
  });

  return cubesCorrectness.every(Boolean)
}

export const sumAllPossibleGames = (gamesInput: string): number => {
  const games = gamesInput.split("\n");

  return games.reduce((sum: number, gameInput: string) => {
    const possibleGame = isPossibleGame(gameInput);
    if (possibleGame) {
      const [gameTitle, gameRounds] = gameInput.split(":");
      const gameId = getGameIdFromTitle(gameTitle);

      return sum + gameId;
    }
    return sum;
  }, 0);
}

export const getGameIdFromTitle = (gameTitle: string) => {
  const [_, gameId] = gameTitle.split(" ");
  return Number(gameId);
}