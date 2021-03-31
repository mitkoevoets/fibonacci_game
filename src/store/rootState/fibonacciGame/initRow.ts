import { FibonacciCell, FibonacciRow } from "./index";

export const initRow = (gridCountX: number): FibonacciRow => {
  let cells: FibonacciCell[] = [];

  for (let i = 0; i < gridCountX; i++) {
    cells.push({ activeNumber: undefined, activeColor: undefined });
  }

  return { cells };
}
