import { useState, useEffect } from 'react';

const useGameState = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const initializeGame = () => {
    const cardValues = [...Array(8).keys()];
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value, isFlipped: false }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  const flipCard = (index) => {
    if (flippedCards.length < 2) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].value === cards[second].value) {
        setMatches((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              i === first || i === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }
      setMoves((prev) => prev + 1);
      setFlippedCards([]);
    }
  }, [flippedCards, cards]);

  return { cards, moves, matches, initializeGame, flipCard };
};

export default useGameState;
