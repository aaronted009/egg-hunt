'use client'

import { useState } from "react";
import GameCell from "./game-cell";

const items = [
    "🧐", "🤠", "🥚", "👀", "🙌🏽",
    "🏃🏽‍♀️‍➡️", "🌝", "🌚", "🥚", "🎱",
    "🐣", "🐥", "🍗", "🔍", "🥚",
    "🥚", "🏃🏽‍♂️", "🏃🏽‍♀️", "🥚", "🏃🏾‍♂️‍➡️",
    "🤷🏽‍♂️", "🤷🏽‍♀️", "🤔", "🐔", "🔜",
];

function shuffleArray(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
}

export default function GameBoard({ onGameCellClick }: { onGameCellClick: () => void }) {
    const [score, setScore] = useState(2500);
    const [gameBoard] = useState(() =>
        shuffleArray(items).map((item) => ({ item, isRevealed: false }))
    );
    const [eggsFound, setEggsFound] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleCellClick = (item: string) => {
        if (gameOver) return; // Prevent further clicks if the game is over

        if (item === "🥚") {
            setScore((prevScore) => prevScore + 100);
            setEggsFound((prevEggsFound) => {
                const newEggsFound = prevEggsFound + 1;
                if (newEggsFound === 5) {
                    setGameOver(true); // End the game when all 5 eggs are found
                }
                return newEggsFound;
            });
        } else {
            setScore((prevScore) => prevScore - 100);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-5 gap-4">
                {gameBoard.map((cell, index) => (
                    <GameCell
                        key={index}
                        item={cell.item}
                        onClick={() => handleCellClick(cell.item)}
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