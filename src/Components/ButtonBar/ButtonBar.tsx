import styles from "./ButtonBar.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ButtonPropsT } from "../../types/ButtonPropsT";

function ButtonBar({
  url,
  isLeft,
  action,
  secBtnColor,
  className,
}: ButtonPropsT) {
  return (
    <div
      className={clsx(styles.buttons, className, {
        [styles.left]: isLeft,
      })}
    >
      {action ? (
        <button className={styles.button} onClick={action}>
          {"Zagraj ponownie"}
        </button>
      ) : (
        <Link to={url ?? "/"}>
          <button className={styles.button}>{"Rozpocznij grę"}</button>
        </Link>
      )}
      <Link to="/">
        <button
          className={clsx(styles.button, styles.secondary)}
          style={{
            color: secBtnColor,
            borderColor: secBtnColor,
          }}
        >
          Wróć do menu
        </button>
      </Link>
    </div>
  );
}

export default ButtonBar;
