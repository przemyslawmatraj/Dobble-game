import styles from "./Games.module.scss";
import { Link } from "react-router-dom";
import GamePropsT from "../../types/GamesPropsT";

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
    <div className={styles.games}>
      <Game name="Memory" image="https://picsum.photos/200" link="/dobble" />
      <Game name="Quiz" image="https://picsum.photos/201" link="/quiz" />
    </div>
  );
}

export default Games;
