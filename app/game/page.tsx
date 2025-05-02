'use client';

import GameHeader from "../ui/game/game-header";
import GameBoard from "../ui/game/game-board";
import StartGameTimer from "../ui/game/start-game-timer";
import { useState } from "react";

export default function Game() {
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const handleStart = () => {
        setIsTimerRunning(true);
    };
    return (
        <>
            <GameHeader timerIsRunning={isTimerRunning} />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Egg Hunt Game</h1>
                <p className="text-lg mb-8">Uncover hidden eggs in the grid!</p>
                <GameBoard />
                <StartGameTimer onStart={handleStart} />
            </div>
        </>
    );
}