import styles from "./Games.module.scss";
import { Link } from "react-router-dom";
import GamePropsT from "../../types/GamesPropsT";
import dobbleImg from "../../assets/images/dobble.png";
import quizImg from "../../assets/images/quiz.png";
import sticker from "../../assets/images/sticker.png";

function Game({ name, image, link }: GamePropsT) {
  return (
    <Link to={link} className={styles.game}>
      <img className={styles.image} src={image} alt="game" />
      <h3 className={styles.name}>{name}</h3>
    </Link>
  );
}

function Games() {
  return (
    <div className={styles.container}>
      <div className={styles.games}>
        <Game
          name="Sprawdź swoją 
          spostrzegawczość!"
          image={dobbleImg}
          link="/dobble"
        />
        <Game name="Sprawdź swoją wiedzę!" image={quizImg} link="/quiz" />
      </div>
      <img className={styles.sticker} src={sticker} alt="" />
    </div>
  );
}

export default Games;
