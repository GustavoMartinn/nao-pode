import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { allGameCards, getCategories, getCardsByCategory } from '../data/cards';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [timerDuration, setTimerDuration] = useState(60);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  
  const categories = ['Todas', ...getCategories()];
  
  const getCategoryIcon = (category: string): string => {
    const icons: { [key: string]: string } = {
      'Lugares': '🌴',
      'Comidas': '🍕',
      'Animais': '🐶',
      'Objetos': '🎭',
      'Entretenimento': '🎉',
      'Profissões': '👩‍⚕️',
      'Conceitos': '💡',
      'Filmes': '🎬',
      'Internet': '💻',
      'Música': '🎶',
      'Mitologia': '🧙‍♂️',
      'Infantil': '🧒',
      'Anos 2000': '📺',
      'Brasil': '🇧🇷',
    };
    return icons[category] || '🎲';
  };
  
  const getCardCount = () => {
    if (selectedCategory === 'Todas') {
      return allGameCards.length;
    }
    return getCardsByCategory(selectedCategory).length;
  };

  const handleStartGame = () => {
    navigate('/game', { state: { timerDuration, category: selectedCategory } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 text-center border-2 border-gray-700">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">
            Não Pode!
          </h1>
          <div className="h-2 w-32 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg font-medium">
            Explique a palavra sem usar as palavras proibidas!
          </p>
        </div>

        <div className="mb-6 bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
          <label className="block text-gray-200 font-bold mb-4 text-base">
            📂 Categoria:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-gray-800 text-gray-200 px-4 py-3 rounded-xl border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-semibold"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'Todas' ? '🎲 Todas as Categorias' : `${getCategoryIcon(cat)} ${cat}`}
              </option>
            ))}
          </select>
          <div className="mt-3 text-sm text-gray-400">
            {getCardCount()} cartas disponíveis
          </div>
        </div>

        <div className="mb-6 bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
          <label className="block text-gray-200 font-bold mb-4 text-base">
            ⏱️ Tempo por rodada:
          </label>
          <div className="flex items-center gap-4 justify-center">
            <button
              onClick={() => setTimerDuration(Math.max(15, timerDuration - 15))}
              className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              -
            </button>
            <span className="text-4xl font-bold text-blue-400 w-24">
              {timerDuration}s
            </span>
            <button
              onClick={() => setTimerDuration(Math.min(180, timerDuration + 15))}
              className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              +
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={handleStartGame}
            className="w-full text-lg py-4"
          >
            🎮 INICIAR JOGO
          </Button>
          
          <Button 
            variant="secondary"
            onClick={() => navigate('/rules')}
            className="w-full text-base py-3"
          >
            📖 COMO JOGAR
          </Button>
        </div>
      </div>
    </div>
  );
};
