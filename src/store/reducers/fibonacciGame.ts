import { fibonacciCheck, getNeighbours } from '../../utils/fibonacciCheck';
import {
  FibonacciCell,
  FibonacciGame,
  gridCountX,
  gridCountY,
} from '../rootState/fibonacciGame';
import { initGrid } from '../rootState/fibonacciGame/initGrid';

const cellChangeColor = '#f1ee39';
const cellMatchedColor = '#3ff139';

export default (state: FibonacciGame, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'CLICK_CELL':
      /**
       * Adjust numbers
       */

      newState.grid[action.row].cells = newState.grid[action.row].cells.map(
        cell => {
          cell.activeNumber = cell.activeNumber ? cell.activeNumber + 1 : 1;
          cell.activeColor = cellChangeColor;

          return cell;
        },
      );

      newState.grid = newState.grid.map((row, index) => {
        if (index !== action.row) {
          const activeNumber = row.cells[action.cell].activeNumber || 0;
          row.cells[action.cell].activeNumber = activeNumber + 1;
          row.cells[action.cell].activeColor = cellChangeColor;
        }

        return row;
      });

      return newState;
    case 'TRIGGER_COOLDOWN':
      newState.grid = newState.grid.map((row, index) => {
        row.cells = row.cells.map(
          (cell): FibonacciCell => {
            if (cell.activeColor === cellChangeColor) {
              cell.activeColor = undefined;
            }

            return cell;
          },
        );

        return row;
      });

      return newState;
    case 'TRIGGER_FIBONACCI':
      let fibonacciMatches: FibonacciCell[] = [];
      let fibonacciMatched: FibonacciCell[] | undefined = undefined;

      newState.grid = newState.grid.map((row, rowIndex) => {
        row.cells = row.cells.map(
          (cell: FibonacciCell): FibonacciCell => {
            const verticalRow: FibonacciCell[] = state.grid.map(
              (row, rowIndex): FibonacciCell => {
                return row.cells[cell.cellNumber];
              },
            );

            /**
             * Check forward
             */
            fibonacciMatched = fibonacciCheck(
              cell,
              getNeighbours(cell.cellNumber, row),
            );
            if (fibonacciMatched) {
              fibonacciMatches = [...fibonacciMatches, ...fibonacciMatched];
            }

            /**
             * Check backward
             */
            fibonacciMatched = fibonacciCheck(
              cell,
              getNeighbours(cell.cellNumber, row, 'backward'),
            );
            if (fibonacciMatched) {
              fibonacciMatches = [...fibonacciMatches, ...fibonacciMatched];
            }

            /**
             * Check up
             */
            fibonacciMatched = fibonacciCheck(
              cell,
              getNeighbours(rowIndex, row, 'up', verticalRow),
            );
            if (fibonacciMatched) {
              fibonacciMatches = [...fibonacciMatches, ...fibonacciMatched];
            }

            /**
             * Check down
             */
            fibonacciMatched = fibonacciCheck(
              cell,
              getNeighbours(rowIndex, row, 'down', verticalRow),
            );
            if (fibonacciMatched) {
              fibonacciMatches = [...fibonacciMatches, ...fibonacciMatched];
            }

            return cell;
          },
        );

        return row;
      });

      fibonacciMatches.forEach(cell => {
        newState.grid[cell.rowNumber].cells[
          cell.cellNumber
        ].activeColor = cellMatchedColor;
        newState.score++;
      });

      return newState;
    case 'TRIGGER_FIBONACCI_COOLDOWN':
      newState.grid = newState.grid.map((row, index) => {
        row.cells = row.cells.map(
          (cell): FibonacciCell => {
            if (cell.activeColor === cellMatchedColor) {
              cell.activeColor = undefined;
              cell.activeNumber = undefined;
            }

            return cell;
          },
        );

        return row;
      });

      return newState;
    case 'CLEAR_GRID':
      newState = { grid: initGrid(gridCountX, gridCountY), score: 0 };

      return newState;
    default:
      return state;
  }
};
