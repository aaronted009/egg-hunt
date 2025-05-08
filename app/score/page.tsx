import Link from "next/link"

export default function Score({ score, timeTaken }: { score: number, timeTaken: number }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-(--accent-color)">Congratulations !</h1>
            <p className="text-xl mb-2">You've completed the Egg Hunt!</p>
            <div className="w-1/6 rounded-[15] bg-white flex flex-col p-5 shadow-lg my-10">
                <div className="flex flex-row justify-between"><span> Score:</span> <span className="text-2xl font-bold mb-2 text-(--accent-color)">1000{score}</span></div>
                <div className="flex flex-row justify-between"><span>Time taken:</span> <span className="text-2xl font-bold mb-2 text-(--accent-color)">1000{timeTaken}</span></div>
            </div>
            <Link href="/game" className="px-4 py-2 bg-(--accent-color) text-white rounded">
                Play Again
            </Link>
        </div>
    )
}