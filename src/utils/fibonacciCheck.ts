import { FibonacciCell, FibonacciRow } from '../store/rootState/fibonacciGame';
import { fibonacciGenerator } from './fibonacciGenerator';

function fibonacciMatch(fibonacciRange: number[], cellRange: FibonacciCell[]): boolean {
  if (cellRange.length < 5) {
    return false;
  }

  let match: boolean = true;

  cellRange.forEach((cell: FibonacciCell, index) => {
    if (fibonacciRange[index] !== cell.activeNumber) {
      match = false;
    }
  });

  return match;
}

export function fibonacciCheck(cell: FibonacciCell, cellsToCompare: FibonacciCell[]): FibonacciCell[] | undefined {
  /**
   * Check if cell has active number
   */
  if (!cell.activeNumber) {
    return undefined;
  }

  /**
   * Find if cell number is in fibonacci
   */
  const fibonacci = fibonacciGenerator();
  const fibonacciIndex = fibonacci.indexOf(cell.activeNumber);

  if (!fibonacciIndex) {
    return undefined;
  }

  /**
   * Check adjected cells for fibonacci match
   */
  if (fibonacciMatch(
    fibonacci.slice(fibonacciIndex, fibonacciIndex + cellsToCompare.length),
    cellsToCompare,
  )) {
    return cellsToCompare;
  }

  return undefined;
}

export function getNeighbours(index: number, row: FibonacciRow, direction: string = 'forward', verticalRow: FibonacciCell[] = [], count: number = 5): FibonacciCell[] {
  // const cells = direction === 'backward' ? row.cells.reverse() : row.cells;
  if(direction === 'forward') {
    return row.cells.slice(index, index + count);
  }

  if(direction === 'backward') {
    return row.cells.slice((index + 1) - count, index + 1).reverse()
  }

  if(direction === 'down') {
    return verticalRow.slice(index, index + count)
  }

  return verticalRow.slice((index + 1) - count, index + 1).reverse()
}
