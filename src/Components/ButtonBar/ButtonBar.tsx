import styles from "./ButtonBar.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ButtonPropsT } from "../../types/ButtonPropsT";

function ButtonBar({ url, isTryAgain, isLeft }: ButtonPropsT) {
  return (
    <div
      className={clsx(styles.buttons, {
        [styles.left]: isLeft,
      })}
    >
      <Link to={url}>
        <button className={styles.button}>
          {isTryAgain ? "Zagraj ponownie" : "Rozpocznij grę"}
        </button>
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
