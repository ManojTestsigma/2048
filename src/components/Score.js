import React from 'react';
import { ScoreContainer, ScoreBox, ScoreLabel, ScoreValue } from '../styles/GlobalStyles';

/**
 * Score display component
 * @param {Object} props
 * @param {number} props.score - Current score
 * @param {number} props.bestScore - Best score
 */
const ScoreComponent = ({ score, bestScore }) => {
  return (
    <ScoreContainer>
      <ScoreBox>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreValue>{score.toLocaleString()}</ScoreValue>
      </ScoreBox>
      <ScoreBox>
        <ScoreLabel>Best</ScoreLabel>
        <ScoreValue>{bestScore.toLocaleString()}</ScoreValue>
      </ScoreBox>
    </ScoreContainer>
  );
};

export default ScoreComponent;
