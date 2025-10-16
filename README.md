# 2048 React Game

A modern, modular implementation of the popular 2048 puzzle game built with React and functional programming principles.

![2048 Game](https://img.shields.io/badge/Game-2048-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎮 Live Demo

[Play the game here](https://2048-20y0i9lyk-manojs-projects-f4db3f97.vercel.app/) 🎮

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Game](#running-the-game)
- [Gameplay Instructions](#gameplay-instructions)
- [Technical Implementation](#technical-implementation)
- [Project Structure](#project-structure)
- [Functional Programming Principles](#functional-programming-principles)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modular Architecture**: Clean separation of concerns with reusable components
- **Functional Programming**: Pure functions and immutable data structures
- **Configurable Board Size**: Play on 3x3, 4x4, 5x5, or 6x6 grids
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Controls**: Arrow keys or WASD for movement
- **Score Tracking**: Persistent best score storage
- **Smooth Animations**: CSS transitions for tile movements
- **Game States**: Win detection, game over handling, and restart functionality
- **Accessibility**: Focus indicators and keyboard navigation
- **Size Selection**: Dropdown menu for easy board size selection
- **Attribution**: Clean footer with developer contact information

## 🚀 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/2048-react-game.git
   cd 2048-react-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game.

## 🎯 Running the Game

### Development Mode
```bash
npm start
```
Runs the app in development mode with hot reloading.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 🎮 Gameplay Instructions

### Objective
Combine numbered tiles to reach the **2048** tile!

### How to Play
1. **Movement**: Use arrow keys or WASD to slide tiles
   - ↑/W: Move up
   - ↓/S: Move down
   - ←/A: Move left
   - →/D: Move right

2. **Merging**: Tiles with the same number merge when they collide
   - 2 + 2 = 4
   - 4 + 4 = 8
   - 8 + 8 = 16
   - And so on...

3. **Scoring**: Each merge adds points to your score
   - Merging two 4s gives you 8 points
   - Merging two 8s gives you 16 points

4. **New Tiles**: After each move, a new tile (2 or 4) appears randomly

5. **Game Over**: The game ends when:
   - You reach 2048 (You Win!)
   - No more moves are possible (Game Over)

### Controls
- **New Game**: Start a fresh game
- **Size Dropdown**: Select board size (3x3 to 6x6)
- **Keyboard**: Arrow keys or WASD for movement

## 🏗️ Technical Implementation

### Architecture Overview

The game follows a modular, component-based architecture with clear separation of concerns:

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── styles/             # Styled-components
├── utils/              # Pure game logic functions
└── App.js              # Main application component
```

### Key Design Patterns

1. **Functional Programming**
   - Pure functions for game logic
   - Immutable data structures
   - No side effects in core logic

2. **Custom Hooks**
   - `useGame`: Manages game state and logic
   - `useKeyboard`: Handles keyboard input

3. **Component Composition**
   - Small, focused components
   - Props-based communication
   - Reusable UI elements

### Data Flow

```
User Input → useKeyboard → useGame → Game Logic → State Update → UI Re-render
```

## 📁 Project Structure

```
2048-react-game/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   │   ├── Controls.js         # Game controls (New Game, Size)
│   │   ├── GameBoard.js        # Main game grid
│   │   ├── GameOverModal.js    # Win/Lose modal
│   │   ├── Instructions.js     # Game instructions
│   │   ├── Score.js            # Score display
│   │   └── Tile.js             # Individual tile component
│   ├── hooks/                  # Custom React hooks
│   │   ├── useGame.js          # Game state management
│   │   └── useKeyboard.js      # Keyboard event handling
│   ├── styles/                 # Styled-components
│   │   └── GlobalStyles.js     # All styled components
│   ├── utils/                  # Pure functions
│   │   └── gameLogic.js        # Core game logic
│   ├── App.js                  # Main application
│   └── index.js                # React entry point
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔧 Functional Programming Principles

### Pure Functions
All game logic functions are pure - they don't modify external state and always return the same output for the same input:

```javascript
// Example: Pure function for sliding a row
export const slideRowLeft = (row) => {
  // No side effects, returns new data
  return { row: newRow, score: gainedScore };
};
```

### Immutability
Game state is never mutated directly. Instead, new state objects are created:

```javascript
// Example: Creating new board state
const newBoard = board.map(row => [...row]);
newBoard[row][col] = newValue;
```

### Function Composition
Complex operations are built by composing simpler functions:

```javascript
// Example: Slide up = transpose + slide left + transpose
export const slideUp = (board) => {
  const transposedBoard = transpose(board);
  const { board: slidBoard } = slideLeft(transposedBoard);
  return transpose(slidBoard);
};
```

## 🎨 Customization

### Changing Board Sizes
Add new sizes to the `availableSizes` array in the Controls component:

```javascript
const availableSizes = [3, 4, 5, 6, 7, 8]; // Add 7x7 and 8x8
```

### Modifying Tile Colors
Update the styled-components in `GlobalStyles.js`:

```javascript
${props => props.value === 2048 && `
  background: #your-color;
  color: #your-text-color;
`}
```

### Adding New Features
The modular architecture makes it easy to add new features:

1. **New Components**: Add to `src/components/`
2. **New Hooks**: Add to `src/hooks/`
3. **New Logic**: Add pure functions to `src/utils/`

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/2048-react-game",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🧪 Testing

The project is set up with Jest and React Testing Library. Add tests to verify:

- Game logic functions
- Component rendering
- User interactions
- Keyboard controls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original 2048 game by Gabriele Cirulli
- React team for the amazing framework
- Styled-components for CSS-in-JS solution

## 📞 Support

If you have any questions or issues, please:

1. Check the [Issues](https://github.com/yourusername/2048-react-game/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Happy Gaming! 🎮**
