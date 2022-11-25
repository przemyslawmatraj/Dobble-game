import { useState } from "react";
import styles from "./StartQuiz.module.scss";
import questions from "./qa";
import Modal from "../../components/Modal/Modal";
import useRanking from "../../hooks/useRanking";

import io from "socket.io-client";
const socket = io("http://192.166.219.118:5001");

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
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const random = Math.floor(Math.random() * 2) + 1;

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
          // setAttempt(attempt + 1);
        }}
        game="quiz"
        score={score}
      ></Modal>
      <div className={styles.container}>
        <div className={styles.questionCounter}>
          Pytanie {currentQuestion + 1} / 5
        </div>
        <h3 className={styles.question}>
          {questions[currentQuestion].question}
        </h3>
        {!showScore && (
          <div className={styles.answers}>
            {random === 1 ? (
              <>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(true)}
                >
                  {questions[currentQuestion].correct_answer}
                </button>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(false)}
                >
                  {questions[currentQuestion].incorrect_answer}
                </button>
              </>
            ) : (
              <>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(false)}
                >
                  {questions[currentQuestion].incorrect_answer}
                </button>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(true)}
                >
                  {questions[currentQuestion].correct_answer}
                </button>
              </>
            )}
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
