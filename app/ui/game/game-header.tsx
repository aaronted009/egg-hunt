import GameLogo from "./game-logo";
import GameTimer from "./game-timer";

export default function GameHeader({ timer }: { timer: number }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <GameLogo />
        <GameTimer time={timer} />
      </div>
    </div>
  );
}
