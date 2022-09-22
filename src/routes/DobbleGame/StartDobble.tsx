import Card from "../../components/Cards/Card/Card";
import styles from "./StartDobble.module.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function StartDobble() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dobble}>
      <div className={styles.counters}>
        <div className={styles.timer}>00:00</div>
        <div className={styles.score}>0</div>
      </div>
      <h1 className={styles.heading}>Sprawdź swoją spostrzegawczość!</h1>
      <div className={styles.container}>
        {Array.from({ length: 18 }).map((_, index) => (
          <Card key={index} index={(index % 9) + 1} />
        ))}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        game="dobble"
        isLeft
      ></Modal>
    </div>
  );
}

export default StartDobble;
