import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '../components/Card';
import { Timer } from '../components/Timer';
import { Button } from '../components/Button';
import { useGameLogic } from '../hooks/useGameLogic';

export const Game: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const timerDuration = (location.state as any)?.timerDuration || 60;
  const selectedCategory = (location.state as any)?.category || 'Todas';
  
  const {
    currentCard,
    nextCard,
    resetDeck,
    startGame,
    isComplete,
    remainingCards,
    totalCards,
  } = useGameLogic(selectedCategory);

  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextCard = () => {
    const newCard = nextCard();
    if (newCard) {
      setIsTimerActive(false);
      setTimerKey(prev => prev + 1);
    }
  };

  const handleResetDeck = () => {
    resetDeck();
    startGame();
    setIsTimerActive(false);
    setTimerKey(prev => prev + 1);
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  };

  const handleToggleTimer = () => {
    setIsTimerActive(prev => !prev);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800 rounded-3xl shadow-2xl p-10 text-center border-2 border-emerald-700">
          <div className="text-7xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-5xl font-bold text-emerald-400 mb-4">
            Parabéns!
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-medium">
            Você completou todas as {totalCards} cartas!
          </p>
          
          <div className="space-y-3">
            <Button onClick={handleResetDeck} className="w-full text-base py-4">
              🔄 Jogar Novamente
            </Button>
            <Button 
              variant="secondary"
              onClick={() => navigate('/')}
              className="w-full text-base py-4"
            >
              🏠 Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex flex-col items-center justify-between p-3 py-4 overflow-hidden">
      <div className="w-full max-w-md flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="text-gray-300 hover:text-blue-400 transition-colors font-semibold flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md border border-gray-700 text-sm"
        >
          ← Voltar
        </button>
        <div className="text-sm font-bold text-gray-300 bg-gray-800 px-3 py-1.5 rounded-lg shadow-sm border border-gray-700">
          Cartas: <span className="text-blue-400">{remainingCards}</span>/{totalCards}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full max-w-md min-h-0">
        {currentCard && <Card card={currentCard} />}
      </div>

      <div className="w-full max-w-md flex justify-center mb-2">
        <Timer
          key={timerKey}
          duration={timerDuration}
          isActive={isTimerActive}
          onTimeUp={handleTimeUp}
          onToggle={handleToggleTimer}
        />
      </div>

      <div className="w-full max-w-md space-y-2 pb-2">
        <Button 
          onClick={handleNextCard}
          className="w-full text-sm py-3"
          disabled={!currentCard}
        >
          ➡️ Nova Carta
        </Button>
        
        <Button 
          variant="secondary"
          onClick={handleResetDeck}
          className="w-full text-sm py-3"
        >
          🔄 Reiniciar Baralho
        </Button>
      </div>
    </div>
  );
};
