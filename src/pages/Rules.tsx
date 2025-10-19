import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const Rules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-700">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          📖 Como Jogar
        </h1>
        
        <div className="space-y-6 text-gray-200">
          <div className="bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-3 text-blue-300">🎯 Objetivo</h2>
            <p className="text-lg">
              Faça seus amigos adivinharem a <strong>palavra principal</strong> sem usar nenhuma das <strong className="text-red-400">5 palavras proibidas</strong>!
            </p>
          </div>

          <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🕹️ Como Funciona</h2>
            <ol className="list-decimal list-inside space-y-3 text-lg">
              <li>Clique em <strong>"Iniciar Jogo"</strong> na tela inicial</li>
              <li>Uma carta será exibida com a palavra principal e as palavras proibidas</li>
              <li>Explique a palavra principal <strong className="text-red-400">SEM usar as palavras proibidas</strong></li>
              <li>Use o cronômetro para controlar o tempo (opcional)</li>
              <li>Clique em <strong>"Nova Carta"</strong> quando estiver pronto para a próxima</li>
              <li>Complete todas as cartas do baralho!</li>
            </ol>
          </div>

          <div className="bg-red-900/30 p-6 rounded-xl border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-red-300">
              <span>🚫</span> Regras Importantes
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>NÃO pode usar as 5 palavras marcadas com 🚫</li>
              <li>NÃO pode fazer gestos ou sons</li>
              <li>Apenas EXPLICAÇÕES verbais são permitidas</li>
              <li>Se usar uma palavra proibida, pule para a próxima carta</li>
            </ul>
          </div>

          <div className="bg-yellow-900/30 p-6 rounded-xl border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold mb-3 text-yellow-300">💡 Dicas</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Use sinônimos e descrições criativas</li>
              <li>Pense em características e contextos da palavra</li>
              <li>Mantenha a calma e seja criativo!</li>
              <li>O cronômetro é opcional - use se quiser mais desafio</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <Button 
            onClick={() => navigate('/game', { state: { timerDuration: 60 } })}
            className="w-full"
          >
            🎮 Começar a Jogar
          </Button>
          
          <Button 
            variant="secondary"
            onClick={() => navigate('/')}
            className="w-full"
          >
            🏠 Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  );
};
