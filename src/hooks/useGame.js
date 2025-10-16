import { useState, useEffect, useCallback } from 'react';
import {
  createEmptyBoard,
  addRandomTile,
  slideLeft,
  slideRight,
  slideUp,
  slideDown,
  canMove,
  hasWon,
  isGameOver
} from '../utils/gameLogic';

/**
 * Custom hook for managing 2048 game state
 * @param {number} initialSize - Initial board size
 * @returns {Object} Game state and actions
 */
export const useGame = (initialSize = 4) => {
  const [board, setBoard] = useState(() => createEmptyBoard(initialSize));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => 
    parseInt(localStorage.getItem('2048-best-score') || '0', 10)
  );
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [size, setSize] = useState(initialSize);

  // Initialize game with two random tiles
  const initializeGame = useCallback(() => {
    let newBoard = createEmptyBoard(size);
    newBoard = addRandomTile(newBoard);
    newBoard = addRandomTile(newBoard);
    
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
    setWon(false);
  }, [size]);

  // Initialize game on mount and when size changes
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Update best score in localStorage when score changes
  useEffect(() => {
    if (score > bestScore) {
      const newBestScore = score;
      setBestScore(newBestScore);
      localStorage.setItem('2048-best-score', newBestScore.toString());
    }
  }, [score, bestScore]);

  // Check win condition after each move
  useEffect(() => {
    if (hasWon(board) && !won) {
      setWon(true);
    }
  }, [board, won]);

  // Check game over condition after each move
  useEffect(() => {
    if (isGameOver(board) && !gameOver) {
      setGameOver(true);
    }
  }, [board, gameOver]);

  // Make a move in the specified direction
  const makeMove = useCallback((direction) => {
    if (gameOver) return false;

    let result;
    switch (direction) {
      case 'left':
        result = slideLeft(board);
        break;
      case 'right':
        result = slideRight(board);
        break;
      case 'up':
        result = slideUp(board);
        break;
      case 'down':
        result = slideDown(board);
        break;
      default:
        return false;
    }

    if (result.moved) {
      setBoard(result.board);
      setScore(prevScore => prevScore + result.score);
      
      // Add new random tile after a successful move
      setTimeout(() => {
        setBoard(prevBoard => addRandomTile(prevBoard));
      }, 100);
      
      return true;
    }

    return false;
  }, [board, gameOver]);

  // Reset the game
  const resetGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  // Change board size
  const changeSize = useCallback((newSize) => {
    setSize(newSize);
  }, []);

  // Get game status
  const getGameStatus = useCallback(() => {
    if (won) return 'won';
    if (gameOver) return 'gameOver';
    return 'playing';
  }, [won, gameOver]);

  return {
    // State
    board,
    score,
    bestScore,
    size,
    gameStatus: getGameStatus(),
    
    // Actions
    makeMove,
    resetGame,
    changeSize,
    
    // Computed values
    canMove: canMove(board),
    hasWon: hasWon(board),
    isGameOver: isGameOver(board)
  };
};
