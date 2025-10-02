import { decode } from 'html-entities'

export default function QuestionsScreen(props) {
    return (
        <main>
            {props.questions.map((question, index) => {
                return (
                    <div key={index} className="flex flex-column border-b-[#DBDEF0]-1">
                        <h3 className="text-2xl text-[#293264]">{decode(question.question)}</h3>
                        {question.allAnswers.map((answer) => {
                            return (
                                <button className=''>{answer}</button>
                            )
                        })}
                    </div>
                )
            })}
        </main>
    )
}