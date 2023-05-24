import { useState } from "react";
import styles from "./StartQuiz.module.scss";
import questions from "./qa";
import Modal from "../../components/Modal/Modal";
import useRanking from "../../hooks/useRanking";

import io from "socket.io-client";
const socket = io("http://192.166.219.118:10001");

function StartQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const { placeInRanking, countOfPlayers, restartTimer } = useRanking({
    socket,
    currentQuestion,
    showScore,
    score,
  });

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 10) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Modal
        players={countOfPlayers}
        placeInRanking={placeInRanking}
        open={showScore}
        onClick={() => {
          setShowScore(false);
          setCurrentQuestion(0);
          setScore(0);
          restartTimer();
        }}
        game="quiz"
        score={score}
      ></Modal>
      <div className={styles.container}>
        <div className={styles.questionCounter}>
          Pytanie {currentQuestion + 1} / 10
        </div>
        <h3 className={styles.question}>
          {questions[currentQuestion].question}
        </h3>
        {!showScore && (
          <div className={styles.answers}>
            {[...questions][currentQuestion].answers.sort(
              () => Math.random() - 0.5
            ).map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className={styles.answer}
                key={answerOption.answer}
              >
                {answerOption.answer}
              </button>
            ))}

          </div>
        )}
        <img
          src={questions[currentQuestion].image}
          alt=""
          className={styles.sticker}
        />
      </div>
    </>
  );
}

export default StartQuiz;
