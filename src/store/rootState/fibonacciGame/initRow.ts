import { FibonacciCell, FibonacciRow } from "./index";

export const initRow = (gridCountX: number, rowNumber): FibonacciRow => {
  let cells: FibonacciCell[] = [];

  for (let i = 0; i < gridCountX; i++) {
    cells.push({ activeNumber: undefined, activeColor: undefined, rowNumber, cellNumber: i });
  }

  return { cells };
}
