export function sumPartNumbers(schematic) {
  const symbols = new Set(['*', '#', '+', '$']);
  const rows = schematic.length;
  const cols = schematic[0].length;
  let sum = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!isNaN(schematic[i][j])) {
        let num = '';
        while (j < cols && !isNaN(schematic[i][j])) {
          num += schematic[i][j];
          j++;
        }
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            let nx = i + dx;
            let ny = j + dy;
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && symbols.has(schematic[nx][ny])) {
              sum += Number(num);
              break;
            }
          }
        }
      }
    }
  }
  return sum;
}