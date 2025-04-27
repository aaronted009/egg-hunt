"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { IoEgg } from "react-icons/io5";
import Link from "next/link";

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
                <div className="w-full flex-shrink-0 flex flex-col items-center justify-center space-y-4">
                    <span className="flex items-center justify-center space-x-2">
                        <IoEgg className="text-4xl text-(--accent-color)" />
                        <h2 className="text-3xl font-bold">EggHuntFun</h2>
                    </span>
                    <Link href="/game" className="mt-4 px-4 py-2 bg-[var(--accent-color)] text-white font-bold rounded-full shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-75">Start Egg Hunt</Link>
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