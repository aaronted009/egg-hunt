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

export default function GameBoard() {
    const [score, setScore] = useState(25);
    const [gameBoard] = useState(() =>
        shuffleArray(items).map((item) => ({ item, isRevealed: false }))
    );

    const handleCellClick = (item: string) => {
        if (item === "🥚") {
            console.log("Egg found!");
        } else {
            setScore((prevScore) => prevScore - 1);
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
                    />
                ))}
            </div>
            <div className="mt-4 text-center">
                <p className="text-lg font-bold">Score: {score}</p>
            </div>
        </div>
    );
}