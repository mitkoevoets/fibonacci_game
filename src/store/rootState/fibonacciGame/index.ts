import { initGrid } from "./initGrid";

export interface FibonacciCell {
  activeColor: string | undefined;
  activeNumber: number | undefined;
}

export interface FibonacciRow {
  cells: FibonacciCell[];
}

export interface FibonacciGame {
  grid: FibonacciRow[];
}

export const gridCountX = 50;
export const gridCountY = 50;

export const emptyGrid = initGrid(gridCountX, gridCountY);

export const fibonacciGameRootState: FibonacciGame = {
  grid: emptyGrid,
};
