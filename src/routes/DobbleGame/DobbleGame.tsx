import Tutorial from "../../components/Tutorial/Tutorial";
import dobbleImg from "../../assets/images/tutorialDobble.png";

function DobbleGame() {
  return (
    <Tutorial
      description="
      Podejmij <strong style='color: var(--cl-primary)'>#wyzwanieZgłową</strong> i sprawdź swoją spostrzegawczość, dobierając w pary odpowiednio symbole związane z naszą uczelnią. 
      <strong>Czy chcesz rozpocząć grę?</strong>"
      url="/dobble/start"
    >
      <img src={dobbleImg} alt="dobble" />
    </Tutorial>
  );
}

export default DobbleGame;
