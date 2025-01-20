# Memory Card Game

A fun memory card matching game built using React.js and styled with Tailwind CSS. The objective of the game is to match pairs of cards by flipping them over. This project demonstrates the use of React hooks, state management, and animations.

## Demo

You can play the game live here: [Memory Game](https://your-netlify-url.com)

## Features

- **Game Board**: A 4x4 grid of cards (8 pairs).
- **Card Flip Animation**: Smooth animation when flipping cards.
- **Matching Logic**: Cards flip back if they don't match, and matched pairs stay face-up.
- **Game State**:
  - Tracks the number of moves made.
  - Tracks the number of matches found.
  - Displays a win message when all pairs are matched.
- **Timer**: Tracks the game duration.
- **Restart Button**: Allows the user to restart the game.

## Tech Stack

- **React.js**: For building the user interface and game logic.
- **Tailwind CSS**: For styling and responsive design.
- **React Hooks**: `useState`, `useEffect`, `useCallback` for state management and side effects.

## Installation

### Clone the repository

```bash
git clone https://github.com/AkshayKumarGaurav/memory-card-game.git
cd memory-card-game

Install dependencies:-
npm install
Start the development server:-
npm start

This will start the React development server, and you can view the game in your browser at http://localhost:3000.

Deployment
This project is deployed on Netlify. You can view the live version of the game at (https://your-netlify-u.com).
