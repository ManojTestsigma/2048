# Quick Demo Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎮 How to Play

- **Arrow Keys** or **WASD** to move tiles
- **New Game** button to restart
- **Size** button to change board size (3x3 to 6x6)
- Combine tiles with the same number to reach 2048!

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## 📁 Key Files to Explore

- `src/App.js` - Main application component
- `src/hooks/useGame.js` - Game state management
- `src/utils/gameLogic.js` - Pure game logic functions
- `src/components/` - Reusable UI components
- `src/styles/GlobalStyles.js` - Styled components

## 🔧 Architecture Highlights

- **Functional Programming**: Pure functions, immutable data
- **Custom Hooks**: `useGame` and `useKeyboard` for state management
- **Component Composition**: Small, focused, reusable components
- **Styled Components**: CSS-in-JS with theme support
- **Modular Design**: Easy to extend and maintain

Enjoy the game! 🎮
