import styles from "./Tutorial.module.scss";
import TutorialPropsT from "../../types/TutorialPropsT";
import clsx from "clsx";
import ButtonBar from "../ButtonBar/ButtonBar";
import quizMainImg from "../../assets/images/quizMain.png";

function Tutorial({ children, description, url, quiz }: TutorialPropsT) {
  return (
    <div
      className={clsx(styles.container, {
        [styles.quiz]: quiz,
      })}
    >
      <h1 className={styles.heading}>
        Witaj w wirtualnym świecie <span>WSEI!</span>
      </h1>
      <p
        className={clsx(styles.description, {
          [styles.shorterWidth]: quiz,
        })}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {children}
      {quiz && <img src={quizMainImg} alt="quiz" className={styles.quizImg} />}
      <ButtonBar
        url={url}
        isLeft={quiz}
        secBtnColor="#474F5B"
        className={styles.buttons}
      />
    </div>
  );
}

export default Tutorial;
