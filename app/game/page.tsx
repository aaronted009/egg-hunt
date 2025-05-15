"use client";

import GameHeader from "../ui/game/game-header";
import GameBoard from "../ui/game/game-board";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Game() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isTimerRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isTimerRunning && timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning]);

  const [score, setScore] = useState(2500);
  const [eggsFound, setEggsFound] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (item: string) => {
    if (gameOver) return; // Prevent further clicks if the game is over

    if (item === "🥚") {
      setScore((prevScore) => prevScore + 100);
      setEggsFound((prevEggsFound) => prevEggsFound + 1);
    } else {
      setScore((prevScore) => prevScore - 100);
    }
  };

  useEffect(() => {
    if (!gameOver && time > 0) {
      setScore((prevScore) => prevScore - 2); // Decrease score over time
    }
  }, [gameOver, time]);

  const router = useRouter();
  useEffect(() => {
    if (eggsFound === 5) {
      setGameOver(true); // End the game when all 5 eggs are found
      setIsTimerRunning(false); // Stop the timer
      // Save data to local storage
      localStorage.setItem(
        "gameData",
        JSON.stringify({ score, timeTaken: time })
      );
      // Navigate to the score page
      router.push("/score");
    }
  }, [eggsFound]);

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  return (
    <>
      <GameHeader timer={time} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        <h1 className="text-4xl font-bold mb-4">Egg Hunt Game</h1>
        <p className="text-lg mb-8">Uncover all the 5 hidden eggs in the grid!</p>
        <GameBoard
          onGameCellClick={handleStart}
          handleCellClick={handleCellClick}
          gameOver={gameOver}
        />
      </div>
    </>
  );
}
