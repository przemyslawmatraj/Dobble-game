import styles from "./Card.module.scss";
import clsx from "clsx";

function Card({
  id,
  name,
  isFlipped,
  onClick,
  matched,
}: {
  id: number;
  name: string;
  isFlipped: boolean;
  onClick: any;
  matched: boolean;
}) {
  return (
    <div
      data-card={`card-${id}`}
      className={clsx(styles.card, styles[name], {
        [styles.matched]: matched,
      })}
      onClick={matched ? null : onClick}
    >
      <div
        className={clsx(styles.card__inner, {
          [styles.isFlipped]: isFlipped,
        })}
      >
        <div className={clsx(styles.card__face, styles.card__faceFront)}></div>
        <div className={clsx(styles.card__face, styles.card__faceBack)}></div>
      </div>
    </div>
  );
}

export default Card;
