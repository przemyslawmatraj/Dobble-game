import styles from "./Menu.module.scss";
import Games from "../../components/Games/Games";

function Menu() {
  return (
    <div>
      <h1 className={styles.heading}>
        <span>WSEI</span> Games
      </h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <Games />
    </div>
  );
}

export default Menu;
