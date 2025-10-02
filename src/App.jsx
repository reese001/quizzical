import {useState, useEffect} from 'react'
import StartScreen from './components/StartScreen'
import QuestionsScreen from './components/QuestionsScreen'



export default function App() {
  const [data, setData] = useState([])
  const [triviaQuestions, setTriviaQuestions] = useState()
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
        .then(response => response.json())
        .then(data => {
          setData(data);
          const processedQuestions = data.results.map(question => {
            const allAnswers = [...question.incorrect_answers]
            const randomIndex = Math.floor(Math.random() * allAnswers.length + 1)
            allAnswers.splice(randomIndex, 0, question.correct_answer);
            return {
              ...question,
              allAnswers: allAnswers
            };
          })
          setTriviaQuestions(processedQuestions)
        });
  }, []);

  function startGame() {
    setGameStarted(true)
    console.log(gameStarted)
  }

  return (
    <>
    {gameStarted ? <QuestionsScreen questions={triviaQuestions}/> : <StartScreen startGame={startGame} />
  }
    </>
  )
  
}

