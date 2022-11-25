import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

interface OwnProps {
  socket: Socket;
  currentQuestion: number;
  showScore: boolean;
  score: number;
}

const useRanking = ({
  socket,
  currentQuestion,
  showScore,
  score,
}: OwnProps) => {
  const [placeInRanking, setPlaceInRanking] = useState(0);
  const [countOfPlayers, setCountOfPlayers] = useState(0);

  useEffect(() => {
    socket.emit("restartTimer");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("scores", (yourPlace: number) => {
      console.log(yourPlace);
      setPlaceInRanking(yourPlace);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("userscount", (count: number) => {
      console.log(count);
      setCountOfPlayers(count);
    });
  }, [socket]);

  useEffect(() => {
    if (currentQuestion === 4 && showScore) {
      socket.emit("message", { score });
    }
  }, [showScore, currentQuestion, score, socket]);

  const restartTimer = () => {
    socket.emit("restartTimer");
  };
  return { placeInRanking, countOfPlayers, restartTimer };
};

export default useRanking;
