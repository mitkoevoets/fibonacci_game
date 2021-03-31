import * as React from 'react';
import { useStore } from "../../../store";
import { ClearIcon } from "../ClearIcon"
import { FibonacciCell, FibonacciRow, gridCountX, gridCountY } from '../../../store/rootState/fibonacciGame';
import styled from "styled-components";

const gridWidth = 800;
const gridHeight = 600;

const gridMarginX = gridWidth / 16;
const gridMarginY = gridHeight / 16;
const innerGridWidth = gridWidth - (gridMarginX * 2);
const innerGridHeight = gridHeight - (gridMarginY * 2);

const padding = 1;
const cellSizeX = (innerGridWidth / gridCountX) - padding;
const cellSizeY = (innerGridHeight / gridCountY) - padding;

const Container = styled.div`
  width: ${gridWidth}px;
  height: ${gridHeight}px;
  background-color: #373737;
`

const Wrapper = styled.div`
  background-color: #c529cf;
`

interface CellProps {
  width: number; height: number; padding: number; color: string
}

const RowWrapper = styled.div`
  text-align: center;
  line-height: 0.1;
  height: ${(props: { height: number }) => props.height}px;
`

const Cell = styled.span`
  display: inline-block;
  width: ${(props: CellProps) => props.width}px;
  height: ${(props: CellProps) => props.height}px;
  margin: ${(props: CellProps) => props.padding}px;
  background-color: ${(props: CellProps) => props.color};
`

const drawRow = (row: FibonacciRow) => {
  return row.cells.map((cell: FibonacciCell, indexX: number) => {
    return <Cell
      width={cellSizeX}
      height={cellSizeY}
      padding={padding}
      color={cell.activeColor || 'white'}
    >{cell.activeNumber || ''}</Cell>
  })
}

const drawGrid = (grid: FibonacciRow[]) => {
  return grid.map((row: FibonacciRow, indexY: number) => {
    return (
      <RowWrapper height={cellSizeY + (padding * 2)}>
        {drawRow(row)}
      </RowWrapper>
    )
    return row.cells.map((cell: FibonacciCell, indexX: number) => {
      return <Cell
        width={cellSizeX}
        height={cellSizeY}
        padding={padding}
        color={cell.activeColor || 'white'}
      >{cell.activeNumber || ''}</Cell>
    })
  })
}

export function Grid(props) {
  const { state, dispatch } = useStore();
  const { fibonacciGame } = state;

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
