import { fibonacciGameRootState } from "../rootState/fibonacciGame";

export default (state: any, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'CLICK_GRID':
      return fibonacciGameRootState;
    case 'CLEAR_GRID':
      return fibonacciGameRootState;
    default:
      return state;
  }
};
