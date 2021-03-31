import * as React from 'react';
import { useStore } from "../../../store";
import { ClearIcon } from "../ClearIcon"
import { FibonacciCell, FibonacciRow, gridCountX, gridCountY } from '../../../store/rootState/fibonacciGame';
import styled from "styled-components";
import { timeout } from '../../../utils/timeout';

const gridWidth = 800;
const gridHeight = 600;

const gridMarginX = gridWidth / 16;
const gridMarginY = gridHeight / 16;
const innerGridWidth = gridWidth - (gridMarginX * 2);
const innerGridHeight = gridHeight - (gridMarginY * 2);

const padding = 1;
const cellSizeX = (innerGridWidth / gridCountX) - (padding*2);
const cellSizeY = (innerGridHeight / gridCountY) - (padding*2);

const Container = styled.div`
  width: ${gridWidth}px;
  height: ${gridHeight}px;
`

const Background = styled.div`
  background-color: #373737;
  position: absolute;
  z-index: 1;
  width: ${gridWidth}px;
  height: ${gridHeight}px;
`

const Pulsator = styled.div`
  background-color: #c529cf;
  animation:Pulsate 8s linear infinite;
  @keyframes Pulsate {
    from { opacity: 1; }
    50% { opacity: 0; }
    to { opacity: 1; }
  }
  position: absolute;
  z-index: 2;
  width: ${innerGridWidth}px;
  height: ${innerGridHeight}px;
  margin: ${gridMarginY}px ${gridMarginX}px;
`

const GridWrapper = styled.div`
  z-index: 3;
  position: relative;
  width: ${gridWidth}px;
  height: ${gridHeight}px ;
  padding: ${gridMarginY}px ${gridMarginX}px;
`

interface CellProps {
  width: number; height: number; padding: number; color: string
}

const RowWrapper = styled.div`
  opacity: 1;
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
  cursor: pointer;
  font-size: 10px;
  line-height: 0.8;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`


export function Grid(props) {
  const { state, dispatch } = useStore();
  const { fibonacciGame } = state;

  const onCellClick = async (indexY, indexX) => {
    await dispatch({ type: 'CLICK_CELL', row: indexY, cell: indexX })
    await timeout(2500);
    await dispatch({ type: 'TRIGGER_COOLDOWN' })
    await timeout(800);
    await dispatch({ type: 'TRIGGER_FIBONACCI' })
  }

  const drawRow = (row: FibonacciRow, indexY) => {
    return row.cells.map((cell: FibonacciCell, indexX: number) => {
      return <Cell
        key={indexX}
        width={cellSizeX - padding}
        height={cellSizeY}
        padding={padding}
        color={cell.activeColor || 'white'}
        onClick={() => onCellClick(indexY, indexX)}
      >{cell.activeNumber || ''}</Cell>
    })
  }

  const drawGrid = (grid: FibonacciRow[]) => {
    return grid.map((row: FibonacciRow, indexY: number) => {
      return (
        <RowWrapper key={indexY} height={cellSizeY + (padding * 2)}>
          {drawRow(row, indexY)}
        </RowWrapper>
      )
    })
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="font-weight-bold text-primary">TEXT</h6>
        <ClearIcon />
      </div>
      <Container className="card-body">
        <Background>
          <Pulsator />
        </Background>
        <GridWrapper>
          {drawGrid(fibonacciGame.grid)}
        </GridWrapper>
      </Container>
    </div>
  );
}
