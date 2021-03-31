import { FibonacciGame, fibonacciGameRootState } from '../rootState/fibonacciGame';

export default (state: FibonacciGame, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'CLICK_CELL':
      newState.grid[action.row].cells[action.cell].activeNumber = 1;
      console.log('newState')
      console.log(newState)

      return newState;
    case 'CLEAR_GRID':
      return fibonacciGameRootState;
    default:
      return state;
  }
};
