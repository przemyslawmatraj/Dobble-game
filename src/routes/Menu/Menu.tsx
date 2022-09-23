import styles from "./Menu.module.scss";
import Games from "../../components/Games/Games";

function Menu() {
  return (
    <main>
      <h1 className={styles.heading}>
        Let's play <span>WSEI</span> Games!
      </h1>
      <p className={styles.description}>
        Podejmij <span>#wyzwanieZgłową</span>
      </p>
      <Games />
    </main>
  );
}

export default Menu;
