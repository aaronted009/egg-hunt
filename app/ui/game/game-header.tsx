import GameLogo from "./game-logo"

export default function GameHeader() {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-2">
                <GameLogo />
            </div>
        </div>
    )
}