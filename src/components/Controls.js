import React from 'react';
import { Controls as StyledControls, Button, Select } from '../styles/GlobalStyles';

/**
 * Game controls component
 * @param {Object} props
 * @param {Function} props.onNewGame - Callback for new game button
 * @param {Function} props.onSizeChange - Callback for size change
 * @param {number} props.currentSize - Current board size
 * @param {Array<number>} props.availableSizes - Available board sizes
 */
const Controls = ({ 
  onNewGame, 
  onSizeChange, 
  currentSize, 
  availableSizes = [3, 4, 5, 6] 
}) => {
  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    onSizeChange(newSize);
  };

  return (
    <StyledControls>
      <Button onClick={onNewGame}>
        New Game
      </Button>
      <Select value={currentSize} onChange={handleSizeChange}>
        {availableSizes.map(size => (
          <option key={size} value={size}>
            {size}x{size}
          </option>
        ))}
      </Select>
    </StyledControls>
  );
};

export default Controls;
