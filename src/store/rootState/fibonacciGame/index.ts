import { initGrid } from "./initGrid";

export interface FibonacciCell {
  activeColor: string | undefined;
  activeNumber: number | undefined;
  cellNumber: number;
  rowNumber: number;
}

export interface FibonacciRow {
  cells: FibonacciCell[];
}

export interface FibonacciGame {
  grid: FibonacciRow[];
}

export const gridCountX = 10;
export const gridCountY = 10;

export const emptyGrid = initGrid(gridCountX, gridCountY);

export const fibonacciGameRootState: FibonacciGame = {
  grid: emptyGrid,
};
