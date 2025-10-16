import React from 'react';
import {
  GameOverOverlay,
  GameOverContent,
  GameOverTitle,
  GameOverMessage,
  GameOverButtons,
  Button
} from '../styles/GlobalStyles';

/**
 * Game over modal component
 * @param {Object} props
 * @param {boolean} props.show - Whether to show the modal
 * @param {string} props.title - Modal title
 * @param {string} props.message - Modal message
 * @param {number} props.score - Final score
 * @param {Function} props.onPlayAgain - Callback for play again button
 * @param {Function} props.onClose - Callback for close button
 */
const GameOverModal = ({ 
  show, 
  title, 
  message, 
  score, 
  onPlayAgain, 
  onClose 
}) => {
  if (!show) return null;

  return (
    <GameOverOverlay show={show}>
      <GameOverContent>
        <GameOverTitle>{title}</GameOverTitle>
        <GameOverMessage>
          {message}
          <br />
          Your score: <strong>{score.toLocaleString()}</strong>
        </GameOverMessage>
        <GameOverButtons>
          <Button onClick={onPlayAgain}>
            Play Again
          </Button>
          <Button onClick={onClose}>
            Close
          </Button>
        </GameOverButtons>
      </GameOverContent>
    </GameOverOverlay>
  );
};

export default GameOverModal;
