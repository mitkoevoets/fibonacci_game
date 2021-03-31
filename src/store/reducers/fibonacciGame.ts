import { FibonacciCell, FibonacciGame, gridCountX, gridCountY } from '../rootState/fibonacciGame';
import { initGrid } from '../rootState/fibonacciGame/initGrid';
import { fibonacciCheck, getNeighbours } from '../../utils/fibonacciCheck';

export default (state: FibonacciGame, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'CLICK_CELL':
      /**
       * Adjust numbers
       */
      const cellChangeColor = '#f1ee39';
      newState.grid[action.row].cells = newState.grid[action.row].cells.map((cell) => {
        cell.activeNumber = cell.activeNumber ? cell.activeNumber + 1 : 1;
        cell.activeColor = cellChangeColor;

        return cell
      })

      newState.grid = newState.grid.map((row, index) => {
        if(index !== action.row) {
          const activeNumber = row.cells[action.cell].activeNumber || 0;
          row.cells[action.cell].activeNumber = activeNumber + 1;
          row.cells[action.cell].activeColor = cellChangeColor;
        }

        return row
      })

      return newState;
    case 'TRIGGER_COOLDOWN':
      newState.grid = newState.grid.map((row, index) => {
        row.cells = row.cells.map((cell): FibonacciCell => {
          cell.activeColor = undefined;

          return cell;
        })

        return row;
      })

      return newState;
    case 'TRIGGER_FIBONACCI':
      let fibonacciMatches: FibonacciCell[] = [];
      let fibonacciMatched: FibonacciCell[] | undefined = undefined;

      newState.grid = newState.grid.map((row, rowIndex) => {
        row.cells = row.cells.map((cell: FibonacciCell): FibonacciCell => {
          /**
           * Check forward
           */
          fibonacciMatched = fibonacciCheck(
            cell, getNeighbours(cell.cellNumber, row)
          )
          if(fibonacciMatched){
            fibonacciMatches.concat(fibonacciMatched);
          }

          /**
           * Check backward
           */
          fibonacciMatched = fibonacciCheck(
            cell, getNeighbours(cell.cellNumber, row, 'backwards')
          )
          if(fibonacciMatched){
            fibonacciMatches.concat(fibonacciMatched);
          }

          /**
           * Check up
           */
          /**
           * Check down
           */

          return cell;
        })

        return row;
      })

      return newState;
    case 'CLEAR_GRID':
      newState = { grid: initGrid(gridCountX, gridCountY) };

      return newState;
    default:
      return state;
  }


};
