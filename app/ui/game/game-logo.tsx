import { IoEgg } from "react-icons/io5";

export default function GameLogo() {
  return (
    <>
      <span className="flex items-center justify-center space-x-2">
        <IoEgg className="text-4xl text-(--accent-color)" />
        <h2 className="text-3xl">EggHuntFun</h2>
      </span>
    </>
  );
}
