import styles from "./Tutorial.module.scss";
import TutorialPropsT from "../../types/TutorialPropsT";
import clsx from "clsx";
import ButtonBar from "../ButtonBar/ButtonBar";

function Tutorial({
  children,
  description,
  url,
  shorterWidth,
}: TutorialPropsT) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Witaj w wirtualnym świecie <span>WSEI!</span>
      </h1>
      <p
        className={clsx(styles.description, {
          [styles.shorterWidth]: shorterWidth,
        })}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {children}
      <ButtonBar url={url} />
    </div>
  );
}

export default Tutorial;
