export default function GameTimer({ time }: { time: number }) {
  return (
    <div className="text-2xl font-normal">
      {new Date(time * 1000).toISOString().substring(11, 19)}
    </div>
  );
}
