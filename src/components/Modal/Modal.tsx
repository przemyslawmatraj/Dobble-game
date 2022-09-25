import styles from "./Modal.module.scss";
import ReactDom from "react-dom";
import ButtonBar from "../ButtonBar/ButtonBar";
import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  children?: ReactNode;
  onClose: () => void;
  game: string;
  isLeft?: boolean;
  score: number;
  time?: number;
  onClick?: () => void;
}

function Modal({
  children,
  open,
  onClose,
  game,
  isLeft,
  score,
  time,
  onClick,
}: ModalProps) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <h2 className={styles.title}>Koniec!</h2>
        <div className={styles.content}>
          Dobra robota, projekt zakończony!
          <br />
          <br />
          {game === "dobble" ? (
            <>
              Twój wynik to: <strong>{score}pkt</strong>
              {time ? (
                <>
                  w czasie <strong> {time} sek</strong>
                </>
              ) : null}
            </>
          ) : (
            <>
              Udzieliłeś <strong>{score}/7</strong> poprawnych odpowiedzi
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
