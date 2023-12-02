const findSantaDestinationFloor = (input: string): number => {
  const matchForwardMove = input.match(/\(/g);
  const matchBackwardMove = input.match(/\)/g);

  const matchForwardMoveCount = matchForwardMove?.length ?? 0;
  const matchBackwardMoveCount = matchBackwardMove?.length ?? 0;

  return matchForwardMoveCount - matchBackwardMoveCount;
}

export default findSantaDestinationFloor;