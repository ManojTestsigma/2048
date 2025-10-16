import React from 'react';
import { Tile as StyledTile } from '../styles/GlobalStyles';

/**
 * Individual tile component
 * @param {Object} props
 * @param {number} props.value - Tile value (0 for empty)
 * @param {number} props.size - Board size for responsive sizing
 */
const Tile = ({ value, size }) => {
  return (
    <StyledTile value={value} size={size}>
      {value > 0 ? value : ''}
    </StyledTile>
  );
};

export default Tile;
