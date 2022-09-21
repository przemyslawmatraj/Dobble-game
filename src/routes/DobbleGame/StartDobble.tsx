import Card from "../../components/Cards/Card/Card";
import styles from "./StartDobble.module.scss";

function StartDobble() {
  return (
    <>
      <h1 className={styles.heading}>Sprawdź swoją spostrzegawczość!</h1>
      <div className={styles.container}>
        {Array.from({ length: 18 }).map((_, index) => (
          <Card key={index} index={(index % 9) + 1} />
        ))}
      </div>
    </>
  );
}

export default StartDobble;
