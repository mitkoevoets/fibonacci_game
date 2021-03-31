import { FibonacciCell, FibonacciRow } from "../../../store/rootState/fibonacciGame";

export function drawGrid(grid: FibonacciRow[]) {
  return grid.map((row: FibonacciRow) => {
    return row.cells.map((cell: FibonacciCell) => {
      return
    })
  })
}
