import { IoEgg } from "react-icons/io5";

export default function GameLogo() {
  return (
    <>
      <span className="flex items-center justify-center space-x-1/2">
        <IoEgg className="text-3xl text-(--accent-color)" />
        <h2 className="text-2xl font-normal">EggHuntFun</h2>
      </span>
    </>
  );
}
