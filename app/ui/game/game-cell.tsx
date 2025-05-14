"use client";

import { useState } from "react";

export default function GameCell({
  item,
  onClick,
  startTimer,
  disabled,
}: {
  item: string;
  onClick: () => void;
  startTimer: () => void;
  disabled: boolean;
}) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (!isRevealed && !disabled) {
      setIsRevealed(true);
      onClick();
      startTimer();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`w-16 h-16 flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer md:w-24 md:h-24 ${
        isRevealed
          ? "bg-[var(--accent-color)] text-white"
          : "bg-[var(--light-accent-color)]"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {isRevealed ? item : "❓"}
    </div>
  );
}
