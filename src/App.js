import React, { useState, useCallback } from 'react';
import { GlobalStyle, GameContainer, Title, Subtitle } from './styles/GlobalStyles';
import { useGame } from './hooks/useGame';
import { useKeyboard } from './hooks/useKeyboard';
import GameBoard from './components/GameBoard';
import ScoreComponent from './components/Score';
import Controls from './components/Controls';
import GameOverModal from './components/GameOverModal';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

/**
 * Main App component
 */
const App = () => {
  const [showFocusIndicator, setShowFocusIndicator] = useState(false);
  
  const {
    board,
    score,
    bestScore,
    size,
    gameStatus,
    makeMove,
    resetGame,
    changeSize
  } = useGame(4);

  // Handle keyboard controls
  const handleMove = useCallback((direction) => {
    makeMove(direction);
  }, [makeMove]);

  useKeyboard(handleMove, gameStatus === 'playing');

  // Handle focus events
  const handleFocus = useCallback(() => {
    setShowFocusIndicator(true);
  }, []);

  const handleBlur = useCallback(() => {
    setShowFocusIndicator(false);
  }, []);

  // Handle new game
  const handleNewGame = useCallback(() => {
    resetGame();
  }, [resetGame]);

  // Handle size change
  const handleSizeChange = useCallback((newSize) => {
    changeSize(newSize);
  }, [changeSize]);

  // Handle game over modal
  const [showGameOver, setShowGameOver] = useState(false);
  const [gameOverData, setGameOverData] = useState({ title: '', message: '' });

  // Show game over modal when game ends
  React.useEffect(() => {
    if (gameStatus === 'won') {
      setGameOverData({
        title: 'You Win!',
        message: 'Congratulations! You reached 2048!'
      });
      setShowGameOver(true);
    } else if (gameStatus === 'gameOver') {
      setGameOverData({
        title: 'Game Over!',
        message: 'No more moves possible!'
      });
      setShowGameOver(true);
    }
  }, [gameStatus]);

  const handlePlayAgain = useCallback(() => {
    setShowGameOver(false);
    resetGame();
  }, [resetGame]);

  const handleCloseModal = useCallback(() => {
    setShowGameOver(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <GameContainer
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <Title>2048</Title>
        <Subtitle>Join the numbers and get to the 2048 tile!</Subtitle>
        
        <ScoreComponent score={score} bestScore={bestScore} />
        
        <GameBoard board={board} size={size} />
        
        <Controls
          onNewGame={handleNewGame}
          onSizeChange={handleSizeChange}
          currentSize={size}
        />
        
        <Instructions showFocusIndicator={showFocusIndicator} />
        
        <Footer />
      </GameContainer>

      <GameOverModal
        show={showGameOver}
        title={gameOverData.title}
        message={gameOverData.message}
        score={score}
        onPlayAgain={handlePlayAgain}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default App;
