import React from 'react';
import { GameBoard as StyledGameBoard, Grid } from '../styles/GlobalStyles';
import Tile from './Tile';

/**
 * Game board component that renders the grid of tiles
 * @param {Object} props
 * @param {Array<Array<number>>} props.board - 2D array representing the game board
 * @param {number} props.size - Board size (e.g., 4 for 4x4)
 */
const GameBoard = ({ board, size }) => {
  return (
    <StyledGameBoard>
      <Grid size={size}>
        {board.flat().map((value, index) => (
          <Tile key={index} value={value} size={size} />
        ))}
      </Grid>
    </StyledGameBoard>
  );
};

export default GameBoard;
