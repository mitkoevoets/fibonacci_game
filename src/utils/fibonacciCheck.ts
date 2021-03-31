import { FibonacciCell } from '../store/rootState/fibonacciGame';
import { fibonacciGenerator } from './fibonacciGenerator';

export interface CellToCompare {
  row: number;
  cell: number;
  activeNumber: number;
}

function compareRange(fibonacciRange: number[], cellRange: number[]): boolean{
  return fibonacciRange[0] === cellRange[0] &&
    fibonacciRange[1] === cellRange[1] &&
    fibonacciRange[2] === cellRange[2] &&
    fibonacciRange[3] === cellRange[3] &&
    fibonacciRange[4] === cellRange[4]
}

export function fibonacciCheck(cell: FibonacciCell, cellsToCompare: CellToCompare[]): boolean {
  /**
   * Check if cell has active number
   */
  if(!cell.activeNumber){
    return false;
  }

  /**
   * Find if cell number is in fibonacci
   */
  const fibonacci = fibonacciGenerator();


  const fibonacciIndex = fibonacci.indexOf(cell.activeNumber);

  if(!fibonacciIndex) {
    return false
  }

  /**
   * Check adjected cells for fibonacci match
   */
    /**
     * Forward
     */
    // compareRange()

    /**
     * Backward
     */

  return false;
}
