import GameLogo from "./game-logo";
import GameTimer from "./game-timer";

export default function GameHeader({ timer }: { timer: number }) {
  return (
    <div className="flex items-center justify-between p-4">
        <GameLogo />
        <GameTimer time={timer} />
    </div>
  );
}
