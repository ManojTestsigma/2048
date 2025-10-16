/**
 * Pure functions for 2048 game logic
 * Following functional programming principles
 */

/**
 * Creates an empty board of specified size
 * @param {number} size - Board size (e.g., 4 for 4x4)
 * @returns {Array<Array<number>>} Empty board
 */
export const createEmptyBoard = (size) => 
  Array(size).fill().map(() => Array(size).fill(0));

/**
 * Gets all empty cells from the board
 * @param {Array<Array<number>>} board - Game board
 * @returns {Array<{row: number, col: number}>} Array of empty cell positions
 */
export const getEmptyCells = (board) => {
  const emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        emptyCells.push({ row: i, col: j });
      }
    }
  }
  return emptyCells;
};

/**
 * Adds a random tile (2 or 4) to the board
 * @param {Array<Array<number>>} board - Game board
 * @returns {Array<Array<number>>} New board with random tile added
 */
export const addRandomTile = (board) => {
  const emptyCells = getEmptyCells(board);
  if (emptyCells.length === 0) return board;

  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const newBoard = board.map(row => [...row]);
  newBoard[randomCell.row][randomCell.col] = Math.random() < 0.9 ? 2 : 4;
  
  return newBoard;
};

/**
 * Slides a row to the left and merges equal adjacent tiles
 * @param {Array<number>} row - Row to slide
 * @returns {{row: Array<number>, score: number}} New row and score gained
 */
export const slideRowLeft = (row) => {
  // Remove zeros
  const nonZeroTiles = row.filter(val => val !== 0);
  const merged = [];
  let score = 0;
  let i = 0;

  while (i < nonZeroTiles.length) {
    if (i < nonZeroTiles.length - 1 && nonZeroTiles[i] === nonZeroTiles[i + 1]) {
      // Merge tiles
      const mergedValue = nonZeroTiles[i] * 2;
      merged.push(mergedValue);
      score += mergedValue;
      i += 2; // Skip the next tile as it's merged
    } else {
      merged.push(nonZeroTiles[i]);
      i++;
    }
  }

  // Pad with zeros
  while (merged.length < row.length) {
    merged.push(0);
  }

  return { row: merged, score };
};

/**
 * Slides the entire board to the left
 * @param {Array<Array<number>>} board - Game board
 * @returns {{board: Array<Array<number>>, score: number, moved: boolean}} Result
 */
export const slideLeft = (board) => {
  let totalScore = 0;
  let moved = false;
  const newBoard = [];

  for (let i = 0; i < board.length; i++) {
    const { row, score } = slideRowLeft(board[i]);
    newBoard.push(row);
    totalScore += score;
    
    // Check if row changed
    if (JSON.stringify(board[i]) !== JSON.stringify(row)) {
      moved = true;
    }
  }

  return { board: newBoard, score: totalScore, moved };
};

/**
 * Slides the entire board to the right
 * @param {Array<Array<number>>} board - Game board
 * @returns {{board: Array<Array<number>>, score: number, moved: boolean}} Result
 */
export const slideRight = (board) => {
  // Reverse each row, slide left, then reverse back
  const reversedBoard = board.map(row => [...row].reverse());
  const { board: slidBoard, score, moved } = slideLeft(reversedBoard);
  const finalBoard = slidBoard.map(row => [...row].reverse());
  
  return { board: finalBoard, score, moved };
};

/**
 * Transposes the board (swaps rows and columns)
 * @param {Array<Array<number>>} board - Game board
 * @returns {Array<Array<number>>} Transposed board
 */
export const transpose = (board) => {
  const size = board.length;
  const transposed = createEmptyBoard(size);
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      transposed[i][j] = board[j][i];
    }
  }
  
  return transposed;
};

/**
 * Slides the entire board up
 * @param {Array<Array<number>>} board - Game board
 * @returns {{board: Array<Array<number>>, score: number, moved: boolean}} Result
 */
export const slideUp = (board) => {
  const transposedBoard = transpose(board);
  const { board: slidBoard, score, moved } = slideLeft(transposedBoard);
  const finalBoard = transpose(slidBoard);
  
  return { board: finalBoard, score, moved };
};

/**
 * Slides the entire board down
 * @param {Array<Array<number>>} board - Game board
 * @returns {{board: Array<Array<number>>, score: number, moved: boolean}} Result
 */
export const slideDown = (board) => {
  const transposedBoard = transpose(board);
  const { board: slidBoard, score, moved } = slideRight(transposedBoard);
  const finalBoard = transpose(slidBoard);
  
  return { board: finalBoard, score, moved };
};

/**
 * Checks if the player can make any moves
 * @param {Array<Array<number>>} board - Game board
 * @returns {boolean} True if moves are possible
 */
export const canMove = (board) => {
  // Check for empty cells
  if (getEmptyCells(board).length > 0) return true;

  // Check for possible merges horizontally
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] === board[i][j + 1]) return true;
    }
  }

  // Check for possible merges vertically
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === board[i + 1][j]) return true;
    }
  }

  return false;
};

/**
 * Checks if the player has won (reached 2048)
 * @param {Array<Array<number>>} board - Game board
 * @returns {boolean} True if player has won
 */
export const hasWon = (board) => {
  return board.some(row => row.some(cell => cell === 2048));
};

/**
 * Checks if the game is over
 * @param {Array<Array<number>>} board - Game board
 * @returns {boolean} True if game is over
 */
export const isGameOver = (board) => {
  return !canMove(board);
};

/**
 * Gets the maximum tile value on the board
 * @param {Array<Array<number>>} board - Game board
 * @returns {number} Maximum tile value
 */
export const getMaxTile = (board) => {
  return Math.max(...board.flat());
};

/**
 * Counts the number of tiles on the board
 * @param {Array<Array<number>>} board - Game board
 * @returns {number} Number of non-zero tiles
 */
export const getTileCount = (board) => {
  return board.flat().filter(tile => tile > 0).length;
};
