import GameHeader from "../ui/game/game-header";

export default function Game() {
    return (
        <>
            <GameHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Egg Hunt Game</h1>
                <p className="text-lg mb-8">Uncover hidden eggs in the grid!</p>
                <div className="grid grid-cols-3 gap-4">
                    {/* Example grid items */}
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white text-xl font-bold rounded-lg"
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}