import { useState } from 'react';
import { TRIVIA_QUESTIONS } from '../data/trivia';

export default function useTrivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [triviaScore, setTriviaScore] = useState(0);
  const [triviaFinished, setTriviaFinished] = useState(false);

  const handleAnswerTrivia = (index) => {
    setSelectedAnswer(index);
    if (index === TRIVIA_QUESTIONS[currentQuestion].correct) setTriviaScore(triviaScore + 1);
  };

  const handleNextTrivia = () => {
    if (currentQuestion + 1 < TRIVIA_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setTriviaFinished(true);
    }
  };

  const resetTrivia = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setTriviaScore(0);
    setTriviaFinished(false);
  };

  return { currentQuestion, selectedAnswer, triviaScore, triviaFinished, handleAnswerTrivia, handleNextTrivia, resetTrivia };
}
