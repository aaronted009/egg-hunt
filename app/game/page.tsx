import GameHeader from "../ui/game/game-header";
import GameBoard from "../ui/game/game-board";

export default function Game() {
    return (
        <>
            <GameHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Egg Hunt Game</h1>
                <p className="text-lg mb-8">Uncover hidden eggs in the grid!</p>
                <GameBoard />
            </div>
        </>
    );
}