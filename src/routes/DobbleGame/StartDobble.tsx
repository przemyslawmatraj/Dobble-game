import Card from "../../components/Cards/Card/Card";
import styles from "./StartDobble.module.scss";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState, useRef } from "react";
import Timer from "../../features/Timer/Timer";
import generateCards from "../../helpers/generateCards";

// generate array wich contains 18 cards with names from 1 to 9

interface CardT {
  id: number;
  name: string;
  isFlipped: boolean;
  matched: boolean;
}

function StartDobble() {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState<CardT[]>([...generateCards]);
  const [pair, setPair] = useState<CardT[]>([]);
  const [score, setScore] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<any>(null);

  // shuffle cards on start
  useEffect(() => {
    const cardsCopy = [...cards];
    const shuffledCards = cardsCopy.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setIsTimerActive(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // check if cards are matched
  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setIsTimerActive(false);
      setTime(timerRef.current.textContent);
      setOpen(true);
    }
  }, [cards]);

  const flipCard = (card: CardT, isFlipped: boolean) => {
    const cardsCopy = [...cards];
    const cardIndex = cardsCopy.findIndex((c) => c.id === card.id);
    cardsCopy[cardIndex].isFlipped = isFlipped;
    return cardsCopy;
  };

  const flipPair = (pair: CardT[], isFlipped: boolean) => {
    const cardsCopy = [...cards];
    pair.forEach((card) => {
      const cardIndex = cardsCopy.findIndex((c) => c.id === card.id);
      cardsCopy[cardIndex].isFlipped = isFlipped;
    });
    return cardsCopy;
  };

  const matchPair = (pair: CardT[]) => {
    const cardsCopy = [...cards];
    pair.forEach((card) => {
      const cardIndex = cardsCopy.findIndex((c) => c.id === card.id);
      cardsCopy[cardIndex].matched = true;
    });
    return cardsCopy;
  };

  const handleClick = (card: CardT) => {
    if (pair.length === 2) {
      return;
    }
    if (pair.length === 0) {
      const flippedCards = flipCard(card, true);
      setCards(flippedCards);
      setPair([card]);
    }
    if (pair.length === 1) {
      // check if clicked card is the same as the first one and flip it back and clear pair
      if (pair[0].id === card.id) {
        const flippedCards = flipCard(card, false);
        setCards(flippedCards);
        setPair([]);
        return;
      }
      const flippedCards = flipCard(card, true);
      setCards(flippedCards);
      checkPair(card);
      setPair([]);
    }
  };

  const checkPair = (cardSecond: CardT) => {
    if (pair[0].name === cardSecond.name) {
      const matchedCards = matchPair([pair[0], cardSecond]);
      setCards(matchedCards);
      setScore(score + 1);
      setPair([]);
    } else {
      // flip all cards after 1s
      setTimeout(() => {
        const flippedCards = flipPair([pair[0], cardSecond], false);
        setCards(flippedCards);
      }, 500);

      setPair([]);
    }
  };

  return (
    <div className={styles.dobble}>
      <div className={styles.counters}>
        <div className={styles.timer}>
          <Timer isActive={isTimerActive} ref={timerRef} />
        </div>
        <div className={styles.score}>{score}</div>
      </div>
      <h1 className={styles.heading}>Sprawdź swoją spostrzegawczość!</h1>
      <div className={styles.container}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            isFlipped={card.isFlipped}
            onClick={() => handleClick(card)}
            matched={card.matched}
          />
        ))}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        game="dobble"
        isLeft
        score={score}
        time={time}
        onClick={() => window.location.reload()}
      ></Modal>
    </div>
  );
}

export default StartDobble;
