import { useState } from "react";
import styles from "./StartQuiz.module.scss";
import questions from "./qa";
import Modal from "../../components/Modal/Modal";

function StartQuiz() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [attempt, setAttempt] = useState(0);

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

  // useEffect(() => {
  //   if (attempt === 2) {
  //     setAttempt(0);
  //   }
  // }, [open, attempt]);

  const random = Math.floor(Math.random() * 2) + 1;

  return (
    <>
      <Modal
        open={showScore}
        onClose={() => {
          setOpen(false);
        }}
        onClick={() => {
          setShowScore(false);
          setCurrentQuestion(0);
          setScore(0);
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
          {questions[currentQuestion + attempt * 7].question}
        </h3>
        {!showScore && (
          <div className={styles.answers}>
            {random === 1 ? (
              <>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(true)}
                >
                  {questions[currentQuestion + attempt * 7].correct_answer}
                </button>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(false)}
                >
                  {questions[currentQuestion + attempt * 7].incorrect_answer}
                </button>
              </>
            ) : (
              <>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(false)}
                >
                  {questions[currentQuestion + attempt * 7].incorrect_answer}
                </button>
                <button
                  className={styles.answer}
                  onClick={() => handleAnswerOptionClick(true)}
                >
                  {questions[currentQuestion + attempt * 7].correct_answer}
                </button>
              </>
            )}
          </div>
        )}
        <img
          src={questions[currentQuestion + attempt * 7].image}
          alt=""
          className={styles.sticker}
        />
      </div>
    </>
  );
}

export default StartQuiz;
