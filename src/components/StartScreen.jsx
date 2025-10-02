export default function StartScreen(props) {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-[#293264]">Quizzical</h1>
            <p className="text-[#293264] mt-4">A Trivia App</p>
            <button className="bg-[#4D5B9E] border-0 text-white rounded-md px-16 py-4 mt-10 cursor-pointer hover:bg-[#293264] transition-colors duration-100" onClick={props.startGame}>Start Quiz</button>
        </main>
    )
}