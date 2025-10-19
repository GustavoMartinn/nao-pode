import { useState, useCallback, useMemo } from 'react';
import { allGameCards, getCardsByCategory, type Card } from '../data/cards';

export const useGameLogic = (category?: string) => {
  const [usedCardIndices, setUsedCardIndices] = useState<Set<number>>(new Set());
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  // Filtrar cartas baseado na categoria
  const cards = useMemo(() => {
    if (!category || category === 'Todas') {
      return allGameCards;
    }
    return getCardsByCategory(category);
  }, [category]);

  const getRandomUnusedCard = useCallback(() => {
    const availableIndices = cards
      .map((_, index) => index)
      .filter(index => !usedCardIndices.has(index));

    if (availableIndices.length === 0) {
      setIsComplete(true);
      return null;
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const newCard = cards[randomIndex];
    
    setUsedCardIndices(prev => new Set(prev).add(randomIndex));
    setCurrentCard(newCard);
    setIsComplete(false);
    
    return newCard;
  }, [usedCardIndices, cards]);

  const nextCard = useCallback(() => {
    return getRandomUnusedCard();
  }, [getRandomUnusedCard]);

  const resetDeck = useCallback(() => {
    setUsedCardIndices(new Set());
    setIsComplete(false);
    setCurrentCard(null);
  }, []);

  const startGame = useCallback(() => {
    resetDeck();
    return getRandomUnusedCard();
  }, [resetDeck, getRandomUnusedCard]);

  const getRemainingCards = useCallback(() => {
    return cards.length - usedCardIndices.size;
  }, [usedCardIndices]);

  return {
    currentCard,
    nextCard,
    resetDeck,
    startGame,
    isComplete,
    remainingCards: getRemainingCards(),
    totalCards: cards.length,
  };
};
