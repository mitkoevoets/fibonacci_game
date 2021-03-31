import { FibonacciGame, gridCountX, gridCountY } from '../rootState/fibonacciGame';
import { initGrid } from '../rootState/fibonacciGame/initGrid';

export default (state: FibonacciGame, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'CLICK_CELL':
      newState.grid[action.row].cells = newState.grid[action.row].cells.map((cell) => {
        cell.activeNumber = cell.activeNumber ? cell.activeNumber+1 : 1;

        return cell
      })
      // // newState.grid[action.row].cells[action.cell].activeNumber = clickedCell.activeNumber ? clickedCell.activeNumber+1 : 1;
      // if(clickedCell.activeNumber) {
      //   console.log(clickedCell.activeNumber)
      // } else {
      //   clickedCell.activeNumber
      // }

      return newState;
    case 'CLEAR_GRID':
      newState = { grid: initGrid(gridCountX, gridCountY) };

      return newState;
    default:
      return state;
  }


};
