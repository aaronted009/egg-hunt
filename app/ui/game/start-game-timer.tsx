import { FaPlay } from "react-icons/fa";

export default function StartGameTimer({ onStart }: { onStart: () => void }) {
  return (
    <button
      onClick={onStart}
      className="w-16 h-16 flex items-center justify-center bg-[var(--accent-color)] text-white rounded-full cursor-pointer shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-75"
    >
      <FaPlay size={25} />
    </button>
  );
}
