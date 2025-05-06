'use client'

import { useState, useEffect } from "react";

export default function GameTimer({ isRunning }: { isRunning: boolean }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && timer) {
            clearInterval(timer);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning]);

    return (
        <div className="text-lg font-bold">
            Timer: {new Date(time * 1000).toISOString().substr(11, 8)}
        </div>
    );
}