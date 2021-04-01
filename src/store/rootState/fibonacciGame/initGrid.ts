import { FibonacciRow } from './.';
import { initRow } from './initRow';

export const initGrid = (
  gridCountX: number,
  gridCountY: number,
): FibonacciRow[] => {
  let grid: FibonacciRow[] = [];

  for (var i = 0; i < gridCountY; i++) {
    grid.push(initRow(gridCountX, i));
  }

  return grid;
};
