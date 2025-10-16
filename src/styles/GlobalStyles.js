import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #faf8ef;
    color: #776e65;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  #root {
    width: 100%;
    max-width: 500px;
  }
`;

export const GameContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #776e65;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #776e65;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
`;

export const ScoreBox = styled.div`
  background: #bbada0;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const ScoreLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const ScoreValue = styled.div`
  font-size: 18px;
`;

export const GameBoard = styled.div`
  background: #bbada0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  display: inline-block;
`;

export const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(${props => props.size}, 1fr);
`;

export const Tile = styled.div`
  width: 80px;
  height: 80px;
  background: #cdc1b4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #776e65;
  transition: all 0.2s ease;
  
  ${props => props.value === 2 && `
    background: #eee4da;
  `}
  
  ${props => props.value === 4 && `
    background: #ede0c8;
  `}
  
  ${props => props.value === 8 && `
    background: #f2b179;
    color: #f9f6f2;
  `}
  
  ${props => props.value === 16 && `
    background: #f59563;
    color: #f9f6f2;
  `}
  
  ${props => props.value === 32 && `
    background: #f67c5f;
    color: #f9f6f2;
  `}
  
  ${props => props.value === 64 && `
    background: #f65e3b;
    color: #f9f6f2;
  `}
  
  ${props => props.value === 128 && `
    background: #edcf72;
    color: #f9f6f2;
    font-size: 20px;
  `}
  
  ${props => props.value === 256 && `
    background: #edcc61;
    color: #f9f6f2;
    font-size: 20px;
  `}
  
  ${props => props.value === 512 && `
    background: #edc850;
    color: #f9f6f2;
    font-size: 20px;
  `}
  
  ${props => props.value === 1024 && `
    background: #edc53f;
    color: #f9f6f2;
    font-size: 18px;
  `}
  
  ${props => props.value === 2048 && `
    background: #edc22e;
    color: #f9f6f2;
    font-size: 18px;
  `}
  
  ${props => props.value > 2048 && `
    background: #3c3a32;
    color: #f9f6f2;
    font-size: 16px;
  `}
`;

export const Controls = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: #8f7a66;
  color: #f9f6f2;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #9f8a76;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const Select = styled.select`
  background: #8f7a66;
  color: #f9f6f2;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
  min-width: 100px;
  
  &:hover {
    background: #9f8a76;
  }
  
  &:focus {
    outline: none;
    background: #9f8a76;
  }
  
  option {
    background: #8f7a66;
    color: #f9f6f2;
  }
`;

export const Instructions = styled.div`
  font-size: 12px;
  color: #776e65;
  margin-bottom: 10px;
`;

export const FocusIndicator = styled.div`
  font-size: 10px;
  color: #8f7a66;
  padding: 5px;
  background: #f0e6d2;
  border-radius: 3px;
  display: none;
  
  body:focus & {
    display: block;
  }
`;

export const GameOverOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const GameOverContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

export const GameOverTitle = styled.h2`
  margin-bottom: 20px;
  color: #776e65;
  font-size: 24px;
`;

export const GameOverMessage = styled.p`
  margin-bottom: 20px;
  color: #776e65;
  line-height: 1.5;
`;

export const GameOverButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Footer = styled.footer`
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #d6ccc2;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #776e65;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #8f7a66;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
  
  &:hover {
    color: #9f8a76;
    text-decoration: underline;
  }
`;
