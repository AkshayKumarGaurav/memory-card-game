import React, { useEffect } from 'react'
import Card from './Card';
import useGameState from '../hooks/useGameState';

const MemoryGame = () => {
    const { cards, moves, matches, initializeGame, flipCard} = useGameState();

    useEffect(() => {
        initializeGame();
    }, []);

  return (
    <div className="p-4">
        <h1 className="text-2x1 font-bold mb-4">Memory Card Game</h1>
        <div className='grid grid-cols-4 gap-4'>
         {cards.map((card, index) => (
            <Card
                key={card.id}
                value={card.value}
                isFlipped={card.isFlipped}
                onClick={() => flipCard(index)}
            />
         )
         )}

        </div>
        <div class='mt-4'>
         <p>Moves: {moves}</p>
         <p>Matches: {matches}</p>
         {matches === 8 && <p classNmae='text-green-500'>You Win!</p>}
         <button
         onClick={initializeGame}
         className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
         >
            Restart Game
         </button>
        </div>
    </div>
  )
}

export default MemoryGame;