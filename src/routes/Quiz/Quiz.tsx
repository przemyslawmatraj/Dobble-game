import Tutorial from "../../components/Tutorial/Tutorial";

function Quiz() {
  return (
    <Tutorial
      description="
      <strong>Rozwiąż quiz z głową</strong>
      Sprawdź jak rozległa jest Twoja wiedza? 
      Przekonaj się, czy udzielanie poprawnych
      odpowiedzi to Twoja <strong style='color: var(--cl-primary)'>#supermoc!</strong>"
      url="/quiz/start"
      quiz
    ></Tutorial>
  );
}

export default Quiz;
