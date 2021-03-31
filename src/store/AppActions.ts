export type AppActions =
  | {
  type: 'CLICK_CELL';
  row: number;
  cell: number;
}
  | {
  type: 'TRIGGER_COOLDOWN';
}
  | {
  type: 'TRIGGER_FIBONACCI';
}
  | { type: 'CLEAR_GRID' };
