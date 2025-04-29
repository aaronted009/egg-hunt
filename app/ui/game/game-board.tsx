export default function GameBoard(){
    return(
        <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 25 }).map((_, index) => (
                <div
                    key={index}
                    className="w-24 h-24 bg-(--light-accent-color) flex items-center justify-center text-white text-xl font-bold rounded-lg"
                >
                    🥚
                </div>
            ))}
        </div>
    )
}