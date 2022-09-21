import Tutorial from "../../components/Tutorial/Tutorial";

function Quiz() {
  return (
    <Tutorial
      description="Jak rozległa jest Twoja wiedza?<br/> 
  <strong>Rozwiąż quiz</strong> i przekonaj się, czy udzielanie
   poprawnych odpowiedzi to Twoja supermoc!"
      url="/quiz/start"
      shorterWidth
    />
  );
}

export default Quiz;
