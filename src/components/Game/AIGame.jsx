import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const choices = ['rock', 'paper', 'scissors'];

const AIGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ player: 0, ai: 0 });
  const { isDarkMode } = useTheme();

  const getAIChoice = useCallback(() => {
    // Simple AI that learns from player's previous choices
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  }, []);

  const determineWinner = useCallback((player, ai) => {
    if (player === ai) return 'draw';
    if (
      (player === 'rock' && ai === 'scissors') ||
      (player === 'paper' && ai === 'rock') ||
      (player === 'scissors' && ai === 'paper')
    ) {
      return 'player';
    }
    return 'ai';
  }, []);

  const handleChoice = (choice) => {
    const aiMove = getAIChoice();
    setPlayerChoice(choice);
    setAiChoice(aiMove);

    const gameResult = determineWinner(choice, aiMove);
    if (gameResult === 'player') {
      setResult('You win! 🎉');
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
    } else if (gameResult === 'ai') {
      setResult('AI wins! 🤖');
      setScore(prev => ({ ...prev, ai: prev.ai + 1 }));
    } else {
      setResult("It's a draw! 🤝");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Rock Paper Scissors</h2>
      <div className="flex justify-center gap-4 mb-6">
        {choices.map((choice) => (
          <motion.button
            key={choice}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChoice(choice)}
            className={`px-4 py-2 rounded-md ${
              isDarkMode
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </motion.button>
        ))}
      </div>
      
      {playerChoice && aiChoice && (
        <div className="text-center">
          <p className="mb-2">Your choice: {playerChoice}</p>
          <p className="mb-2">AI's choice: {aiChoice}</p>
          <p className="text-xl font-bold mb-4">{result}</p>
        </div>
      )}
      
      <div className="text-center mt-4">
        <p className="font-bold">Score</p>
        <p>You: {score.player} - AI: {score.ai}</p>
      </div>
    </motion.div>
  );
};

export default AIGame;
