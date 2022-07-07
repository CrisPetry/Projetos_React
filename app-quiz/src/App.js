import { useState } from "react";
import './App.css';
import Score from "./components/score";


const questions = [
  {
    questionText: "Qual o nome do pai do Naruto?",
    answerOptions: [
      { answerText: 'Minato', isCorrect: true },
      { answerText: 'Jiraiya', isCorrect: false },
      { answerText: 'Sasuke', isCorrect: false },
      { answerText: 'Kakashi', isCorrect: false },
    ],
  },

  {
    questionText: "Qual o título dado ao 3º Hokage?",
    answerOptions: [
      { answerText: 'Shodai', isCorrect: false },
      { answerText: 'Nandaime', isCorrect: false },
      { answerText: 'Sandaime', isCorrect: true },
      { answerText: 'Yondaime', isCorrect: false },
    ],
  },

  {
    questionText: "Qual o nome do titã herdado pelo Eren?",
    answerOptions: [
      { answerText: 'Titã Bestial', isCorrect: false },
      { answerText: 'Titã de Ataque', isCorrect: true },
      { answerText: 'Titã Mandíbula', isCorrect: false },
      { answerText: 'Titã Carroceiro', isCorrect: false },
    ],
  },

  {
    questionText: "Qual o nome do filho mais novo de Son Goku?",
    answerOptions: [
      { answerText: 'Trunks', isCorrect: false },
      { answerText: 'Gohan', isCorrect: false },
      { answerText: 'Goten', isCorrect: true },
      { answerText: 'Pan', isCorrect: false },
    ],
  },

  {
    questionText: "Como é conhecido Guts em Berserk?",
    answerOptions: [
      { answerText: 'Espadachim negro', isCorrect: true },
      { answerText: 'Invencível', isCorrect: false },
      { answerText: 'Demônio', isCorrect: false },
      { answerText: 'Anjo Caído', isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} questions={questions} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>

  );
}

export default App;
