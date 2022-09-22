import styles from "./Card.module.scss";
import { useState } from "react";
import clsx from "clsx";

function Card({ index }: { index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      data-card={`card-${index}`}
      className={clsx(styles.card, styles[`card${index}`])}
      onClick={handleFlip}
    >
      <div
        className={clsx(styles.card__inner, {
          [styles.isFlipped]: isFlipped,
        })}
      >
        <div className={clsx(styles.card__face, styles.card__faceFront)}>
          <h2>?</h2>
        </div>
        <div className={clsx(styles.card__face, styles.card__faceBack)}>
          <div className={styles.card__content}></div>
        </div>
      </div>
    </div>
  );
}

export default Card;