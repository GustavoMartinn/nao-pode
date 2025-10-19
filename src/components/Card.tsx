import React from 'react';
import type { Card as CardType } from '../data/cards';

interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-gray-800 rounded-3xl shadow-2xl p-4 w-full max-w-[500px] border-2 border-gray-700 animate-fadeIn">
      <div className="text-center mb-3">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
          {card.word}
        </h2>
        <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-base font-bold text-gray-200 mb-2 flex items-center justify-center gap-2 bg-red-900/30 py-1.5 px-3 rounded-lg border border-red-800">
          <span className="text-xl">🚫</span>
          Não pode dizer:
        </h3>
        <ul className="space-y-1.5">
          {card.forbidden.map((word, index) => (
            <li 
              key={index}
              className="flex items-start gap-2 bg-red-900/20 p-2 rounded-xl border-l-4 border-red-500 hover:bg-red-900/30 transition-colors"
            >
              <span className="text-red-400 font-bold text-lg mt-0.5">×</span>
              <span className="text-base font-medium text-gray-200 flex-1">{word}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
