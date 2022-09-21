import styles from "./ButtonBar.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

function ButtonBar({ url }: { url: string }) {
  return (
    <div className={styles.buttons}>
      <Link to={url}>
        <button className={styles.button}>Rozpocznij grę</button>
      </Link>
      <Link to="/">
        <button className={clsx(styles.button, styles.secondary)}>
          Wróć do menu
        </button>
      </Link>
    </div>
  );
}

export default ButtonBar;
