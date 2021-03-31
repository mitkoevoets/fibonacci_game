export type AppActions =
  | {
  type: 'CLICK_CELL';
  row: number;
  cell: number;
}
  | { type: 'CLEAR_GRID' };
