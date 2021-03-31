export type AppActions =
  | {
  type: 'CLICK_CELL';
  row: number;
  cell: number;
}
  | {
  type: 'RUN_FIBONACCI';
}
  | { type: 'CLEAR_GRID' };
