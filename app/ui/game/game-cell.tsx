'use client'

import { useState } from "react";

export default function GameCell({
    item,
    onClick,
}: {
    item: string;
    onClick: () => void;
}) {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleClick = () => {
        if (!isRevealed) {
            setIsRevealed(true);
            onClick();
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`w-24 h-24 flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer ${isRevealed
                    ? "bg-[var(--accent-color)] text-white"
                    : "bg-[var(--light-accent-color)]"
                }`}
        >
            {isRevealed ? item : "❓"}
        </div>
    );
}