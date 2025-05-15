"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { IoEgg } from "react-icons/io5";
import Link from "next/link";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50 && currentIndex < 1) {
        // Swipe left
        setCurrentIndex(currentIndex + 1);
      } else if (distance < -50 && currentIndex > 0) {
        // Swipe right
        setCurrentIndex(currentIndex - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < 1) {
        setCurrentIndex((i) => i + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      tabIndex={0}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="w-full flex-shrink-0 flex min-h-screen flex-col items-center p-10 md:p-24">
          <Image
            src="/assets/eggs.jpg"
            alt="Eggs"
            width={500}
            height={500}
            priority
            className="w-96 h-96 sm:w-96 sm:h-96 object-contain mb-16 md:mb-auto"
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
          <Link
            href="/game"
            className="mt-4 px-4 py-2 bg-[var(--accent-color)] text-white font-bold rounded-full shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-75"
          >
            Start Egg Hunt
          </Link>
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
