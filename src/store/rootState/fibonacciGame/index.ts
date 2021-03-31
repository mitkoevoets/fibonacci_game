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

export const gridWidth = 800;
export const gridHeight = 600;

export const gridMarginX = gridWidth / 16;
export const gridMarginY = gridHeight / 16;
export const gridCountX = 50;
export const gridCountY = 50;
export const innerGridWidth = gridWidth - gridMarginX * 2;
export const innerGridHeight = gridHeight - gridMarginY * 2;

export const fibonacciGameRootState: FibonacciGame = {
  grid: initGrid(gridCountX, gridCountY),
};
