import { useEffect, useCallback } from 'react';

/**
 * Custom hook for handling keyboard controls
 * @param {Function} onMove - Callback function for moves
 * @param {boolean} enabled - Whether keyboard controls are enabled
 */
export const useKeyboard = (onMove, enabled = true) => {
  const handleKeyPress = useCallback((event) => {
    if (!enabled) return;

    const keyMap = {
      'ArrowLeft': 'left',
      'ArrowRight': 'right',
      'ArrowUp': 'up',
      'ArrowDown': 'down',
      'a': 'left',
      'd': 'right',
      'w': 'up',
      's': 'down',
      'A': 'left',
      'D': 'right',
      'W': 'up',
      'S': 'down'
    };

    const direction = keyMap[event.key];
    if (direction) {
      event.preventDefault();
      event.stopPropagation();
      onMove(direction);
    }
  }, [onMove, enabled]);

  useEffect(() => {
    if (enabled) {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [handleKeyPress, enabled]);

  // Focus the document body to ensure keyboard events are captured
  useEffect(() => {
    if (enabled) {
      document.body.focus();
      document.body.setAttribute('tabindex', '0');
    }
  }, [enabled]);
};
