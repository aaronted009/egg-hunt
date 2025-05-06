export default function GameTimer({ time }: { time: number }) {
    return (
        <div className="text-lg font-bold">
            Timer: {new Date(time * 1000).toISOString().substring(11, 19)}
        </div>
    );
}