import {
  createEmptyBoard,
  getEmptyCells,
  addRandomTile,
  slideRowLeft,
  slideLeft,
  slideRight,
  slideUp,
  slideDown,
  canMove,
  hasWon,
  isGameOver
} from '../gameLogic';

describe('Game Logic Functions', () => {
  describe('createEmptyBoard', () => {
    test('creates a 4x4 empty board', () => {
      const board = createEmptyBoard(4);
      expect(board).toHaveLength(4);
      expect(board[0]).toHaveLength(4);
      expect(board.flat().every(cell => cell === 0)).toBe(true);
    });

    test('creates a 3x3 empty board', () => {
      const board = createEmptyBoard(3);
      expect(board).toHaveLength(3);
      expect(board[0]).toHaveLength(3);
    });
  });

  describe('getEmptyCells', () => {
    test('finds empty cells in a board', () => {
      const board = [
        [2, 0, 4, 0],
        [0, 0, 2, 4],
        [2, 4, 0, 0],
        [0, 2, 4, 2]
      ];
      const emptyCells = getEmptyCells(board);
      expect(emptyCells).toHaveLength(6);
    });

    test('returns empty array for full board', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ];
      const emptyCells = getEmptyCells(board);
      expect(emptyCells).toHaveLength(0);
    });
  });

  describe('slideRowLeft', () => {
    test('slides and merges tiles correctly', () => {
      const row = [2, 2, 4, 0];
      const result = slideRowLeft(row);
      expect(result.row).toEqual([4, 4, 0, 0]);
      expect(result.score).toBe(4);
    });

    test('handles multiple merges', () => {
      const row = [2, 2, 2, 2];
      const result = slideRowLeft(row);
      expect(result.row).toEqual([4, 4, 0, 0]);
      expect(result.score).toBe(8);
    });

    test('handles no merges', () => {
      const row = [2, 4, 8, 16];
      const result = slideRowLeft(row);
      expect(result.row).toEqual([2, 4, 8, 16]);
      expect(result.score).toBe(0);
    });
  });

  describe('slideLeft', () => {
    test('slides entire board left', () => {
      const board = [
        [2, 2, 0, 0],
        [4, 0, 4, 0],
        [0, 0, 0, 0],
        [8, 8, 8, 8]
      ];
      const result = slideLeft(board);
      expect(result.board[0]).toEqual([4, 0, 0, 0]);
      expect(result.board[1]).toEqual([8, 0, 0, 0]);
      expect(result.board[3]).toEqual([16, 16, 0, 0]);
      expect(result.score).toBe(28); // 4 + 8 + 16 + 16
      expect(result.moved).toBe(true);
    });
  });

  describe('canMove', () => {
    test('returns true when empty cells exist', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 0, 4],
        [4, 2, 4, 2]
      ];
      expect(canMove(board)).toBe(true);
    });

    test('returns true when merges are possible', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 2, 2]
      ];
      expect(canMove(board)).toBe(true);
    });

    test('returns false when no moves are possible', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ];
      expect(canMove(board)).toBe(false);
    });
  });

  describe('hasWon', () => {
    test('returns true when 2048 tile exists', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2048, 4],
        [4, 2, 4, 2]
      ];
      expect(hasWon(board)).toBe(true);
    });

    test('returns false when no 2048 tile exists', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ];
      expect(hasWon(board)).toBe(false);
    });
  });

  describe('isGameOver', () => {
    test('returns true when no moves are possible', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ];
      expect(isGameOver(board)).toBe(true);
    });

    test('returns false when moves are possible', () => {
      const board = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 0, 4],
        [4, 2, 4, 2]
      ];
      expect(isGameOver(board)).toBe(false);
    });
  });
});
