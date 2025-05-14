import { IoEgg } from "react-icons/io5";
import Link from "next/link";

export default function GameLogo() {
  return (
    <Link href="/">
      <span className="flex items-center justify-center space-x-1/2">
        <IoEgg className="text-3xl text-(--accent-color)" />
        <h2 className="text-2xl font-normal">EggHuntFun</h2>
      </span>
    </Link>
  );
}
