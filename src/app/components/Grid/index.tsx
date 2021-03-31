import * as React from 'react';
import { useStore } from "../../../store";
import { ClearIcon } from "../ClearIcon"
import { FibonacciCell, FibonacciRow, gridCountX, gridCountY } from '../../../store/rootState/fibonacciGame';
import styled from "styled-components";

const gridWidth = 800;
const gridHeight = 600;

const gridMarginX = gridWidth / 16;
const gridMarginY = gridHeight / 16;
const innerGridWidth = gridWidth - gridMarginX * 2;
const innerGridHeight = gridHeight - gridMarginY * 2;

const padding = 2;
const cellSizeX = (innerGridWidth / gridCountX) - padding;
const cellSizeY = (innerGridHeight / gridCountY) - padding;

const Container = styled.div`
  width: ${gridWidth}px;
  height: ${gridHeight}px;
  background-color: #c529cf;
`

const Wrapper = styled.div`
  position: relative;
`

interface CellProps {
  x: number; y: number; width: number; height: number; color: string
}

const Cell = styled.span`
  position: absolute;
  left: ${(props: CellProps) => props.x}px;
  top: ${(props: CellProps) => props.y}px;
  width: ${(props: CellProps) => props.width}px;
  height: ${(props: CellProps) => props.height}px;
  background-color: ${(props: CellProps) => props.color};
`

const drawGrid = (grid: FibonacciRow[]) => {
  return grid.map((row: FibonacciRow, indexY: number) => {
    return row.cells.map((cell: FibonacciCell, indexX: number) => {
      return <Cell
        x={(cellSizeX + padding) * indexX}
        y={(cellSizeY + padding) * indexY}
        width={cellSizeX}
        height={cellSizeY}
        color={cell.activeColor || 'white'}
      >{cell.activeNumber || ''}</Cell>
    })
  })
}

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
        <Wrapper>
          {drawGrid(fibonacciGame.grid)}
        </Wrapper>
      </Container>
    </div>
  );
}
