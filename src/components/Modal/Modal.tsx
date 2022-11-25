import styles from "./Modal.module.scss";
import ReactDom from "react-dom";
import ButtonBar from "../ButtonBar/ButtonBar";
import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  children?: ReactNode;
  game: string;
  isLeft?: boolean;
  score: number;
  time?: number;
  onClick?: () => void;
  placeInRanking?: number;
  players?: number;
}

function Modal({
  children,
  open,
  game,
  isLeft,
  score,
  time,
  onClick,
  placeInRanking,
  players,
}: ModalProps) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <h2 className={styles.title}>Koniec!</h2>
        <div className={styles.content}>
          Dobra robota, projekt zakończony!
          <br />
          <br />
          {game === "dobble" ? (
            <>
              Twój wynik to: <strong>{score}pkt </strong>
              {time ? (
                <>
                  w czasie <strong> {time} sek</strong>
                </>
              ) : null}
            </>
          ) : (
            <>
              Udzieliłeś <strong>{score}/5</strong> poprawnych odpowiedzi
              {placeInRanking ? (
                <>
                  <br />
                  Twój wynik umieścił Cię na{" "}
                  <strong>{placeInRanking} miejscu</strong> w rankingu pośród{" "}
                  {players} graczy
                </>
              ) : null}
            </>
          )}
          <br />
          Czy chcesz zagrać jeszcze raz?
        </div>
        <ButtonBar url={`/${game}/restart`} action={onClick} isLeft={isLeft} />
      </div>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
}

export default Modal;
