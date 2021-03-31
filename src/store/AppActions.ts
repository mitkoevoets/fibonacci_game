import { ReactText } from 'react';

export type AppActions =
  | {
      type: 'CLICK_GRID';
    }
  | { type: 'CLEAR_GRID' };
