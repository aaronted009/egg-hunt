"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Score() {
  const [gameData, setGameData] = useState<{
    score: number;
    timeTaken: number;
  } | null>(null);

  useEffect(() => {
    // Retrieve data from local storage
    const data = localStorage.getItem("gameData");
    if (data) {
      setGameData(JSON.parse(data));
    }
  }, []);

  if (!gameData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-(--accent-color)">Error</h1>
        <p className="text-xl mb-2">No game data found!</p>
        <Link
          href="/game"
          className="mt-4 px-4 py-2 bg-(--accent-color) text-white rounded"
        >
          Play
        </Link>
      </div>
    );
  }
  const { score, timeTaken } = gameData;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-(--accent-color)">
        Congratulations !
      </h1>
      <p className="text-xl mb-2">You've completed the Egg Hunt!</p>
      <div className="w-xs rounded-[15] bg-white flex flex-col p-5 shadow-lg my-10 md:w-sm lg:w-1/4">
        <div className="flex flex-row justify-between">
          <span> Score:</span>{" "}
          <span className="text-2xl font-bold mb-2 text-(--accent-color)">
            {score}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Time taken:</span>{" "}
          <span className="text-2xl font-bold mb-2 text-(--accent-color)">
            {timeTaken}
          </span>
        </div>
      </div>
      <Link
        href="/game"
        className="px-4 py-2 bg-(--accent-color) text-white rounded"
      >
        Play Again
      </Link>
    </div>
  );
}
