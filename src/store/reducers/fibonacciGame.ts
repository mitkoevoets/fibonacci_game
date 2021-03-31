import { FibonacciCell, FibonacciGame, gridCountX, gridCountY } from '../rootState/fibonacciGame';
import { initGrid } from '../rootState/fibonacciGame/initGrid';

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
          /**
           * Check forward
           */

          /**
           * Check backward
           */

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
    case 'TRIGGER_FIBONACCI':
      newState.grid = newState.grid.map((row, index) => {
        row.cells = row.cells.map((cell): FibonacciCell => {
          cell.activeColor = undefined;

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
