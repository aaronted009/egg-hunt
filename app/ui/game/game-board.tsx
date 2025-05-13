"use client";

import { useState } from "react";
import GameCell from "./game-cell";

const items = [
  "🧐",
  "🤠",
  "🥚",
  "👀",
  "🙌🏽",
  "🏃🏽‍♀️‍➡️",
  "🌝",
  "🌚",
  "🥚",
  "🎱",
  "🐣",
  "🐥",
  "🍗",
  "🔍",
  "🥚",
  "🥚",
  "🏃🏽‍♂️",
  "🏃🏽‍♀️",
  "🥚",
  "🏃🏾‍♂️‍➡️",
  "🤷🏽‍♂️",
  "🤷🏽‍♀️",
  "🤔",
  "🐔",
  "🔜",
];

function shuffleArray(array: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

export default function GameBoard({
  onGameCellClick,
  handleCellClick,
  gameOver,
  score,
}: {
  onGameCellClick: () => void;
  handleCellClick: (item: string) => void;
  gameOver: boolean;
  score: number;
}) {
  const [gameBoard] = useState(() =>
    shuffleArray(items).map((item) => ({ item, isRevealed: false }))
  );

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {gameBoard.map((cell, index) => (
          <GameCell
            key={index}
            item={cell.item}
            onClick={handleCellClick.bind(null, cell.item)}
            startTimer={onGameCellClick}
            disabled={gameOver || cell.isRevealed} // Disable cell if game is over or already revealed
          />
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-bold">Score: {score}</p>
        {gameOver && (
          <p className="text-xl font-bold text-green-500">
            Congratulations! You found all the eggs!
          </p>
        )}
      </div>
    </div>
  );
}
