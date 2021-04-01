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
  | {
  type: 'TRIGGER_FIBONACCI_COOLDOWN';
}
  | { type: 'CLEAR_GRID' };
