import { useEffect, useState, forwardRef } from "react";

function Timer({ isActive = false }: { isActive: boolean }, ref: any) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return <span ref={ref}>{time}</span>;
}

export default forwardRef(Timer);
