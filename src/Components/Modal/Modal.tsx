import styles from "./Modal.module.scss";
import ReactDom from "react-dom";
import ButtonBar from "../ButtonBar/ButtonBar";

export interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  game: string;
  isLeft?: boolean;
}

function Modal({ children, open, onClose, game, isLeft }: ModalProps) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <h2 className={styles.title}>Koniec!</h2>
        <div className={styles.content}>
          Dobra robota, projekt zakończony!
          <br />
          <br /> Twój wynik to: <strong>XYZ</strong> Zajmujesz{" "}
          <strong>xyz</strong> miejsce w rankingu! <br />
          <br />
          Czy chcesz zagrać jeszcze raz?
        </div>
        <ButtonBar url={`/${game}/restart`} isTryAgain isLeft={isLeft} />
      </div>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
}

export default Modal;
