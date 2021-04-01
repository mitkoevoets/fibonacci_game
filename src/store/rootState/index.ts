import { FibonacciGame, fibonacciGameRootState } from './fibonacciGame';

export interface RootState {
  fibonacciGame: FibonacciGame;
}

export const rootState: RootState = {
  fibonacciGame: fibonacciGameRootState,
};
