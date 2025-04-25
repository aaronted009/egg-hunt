"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* Slide 1 */}
                <div className="w-full flex-shrink-0 flex min-h-screen flex-col items-center justify-between p-24">
                    <Image
                        src="/assets/eggs.jpg"
                        alt="Eggs"
                        width={500}
                        height={500}
                        priority
                    />
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">EggHunt</h1>
                        <p className="mt-4 text-lg">Uncover hidden eggs in the grid</p>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="w-full flex-shrink-0 flex items-center justify-center bg-green-500 text-white">
                    <h1 className="text-4xl font-bold">This is Slide 2</h1>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[0, 1].map((index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={clsx(
                            "w-6 h-2",
                            "rounded-full",
                            currentIndex === index ? "bg-(--accent-color)" : "bg-gray-400"
                        )}
                    ></button>
                ))}
            </div>
        </div>
    );
}