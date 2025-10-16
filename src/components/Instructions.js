import React from 'react';
import { Instructions as InstructionsStyled, FocusIndicator } from '../styles/GlobalStyles';

/**
 * Instructions component
 * @param {Object} props
 * @param {boolean} props.showFocusIndicator - Whether to show focus indicator
 */
const Instructions = ({ showFocusIndicator = false }) => {
  return (
    <>
      <InstructionsStyled>
        Use arrow keys or WASD to move tiles
      </InstructionsStyled>
      {showFocusIndicator && (
        <FocusIndicator>
          ✓ Page is focused - arrow keys are active!
        </FocusIndicator>
      )}
    </>
  );
};

export default Instructions;
