import Tutorial from "../../components/Tutorial/Tutorial";
import dobbleImg from "../../assets/images/tutorialDobble.png";

function DobbleGame() {
  return (
    <Tutorial
      description="
      Witaj w wirtualnym świecie WSEI. Podejmij wyzwanie z głową i sprawdź swoją spostrzegawczość, dobierając w pary odpowiednio symbole związane z naszą uczelnią. 
      <strong>Czy chcesz rozpocząć grę?</strong>"
      url="/dobble/start"
    >
      <img src={dobbleImg} alt="dobble" />
    </Tutorial>
  );
}

export default DobbleGame;
