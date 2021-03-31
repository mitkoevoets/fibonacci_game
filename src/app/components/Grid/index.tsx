import * as React from 'react';
import { useStore } from "../../../store";
import { ClearIcon } from "../ClearIcon"
import { FibonacciCell, FibonacciRow } from "../../../store/rootState/fibonacciGame";
import styled from "styled-components";

const drawGrid = (grid: FibonacciRow[]) => {
  return grid.map((row: FibonacciRow) => {
    return row.cells.map((cell: FibonacciCell) => {
      return <span> TEST </span>
    })
  })
}

export const gridWidth = 800;
export const gridHeight = 600;

export const gridMarginX = gridWidth / 16;
export const gridMarginY = gridHeight / 16;
export const innerGridWidth = gridWidth - gridMarginX * 2;
export const innerGridHeight = gridHeight - gridMarginY * 2;

const Container = styled.div`
  width: ${gridWidth}px;
  height: ${gridHeight}px;
  background-color: #c529cf;
`

export function Grid(props) {
  const { state, dispatch } = useStore();
  const { fibonacciGame } = state;
  console.log(state.fibonacciGame)

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="font-weight-bold text-primary">TEXT</h6>
        <ClearIcon />
      </div>
      <Container className="card-body">
        {drawGrid(fibonacciGame.grid)}
      </Container>
    </div>
  );
}
