import { useEffect } from "react";
import { startTimer } from "@/utils/reusableFunctions";
import ProgressBar from "./ProgressBar";

const ProgressBarContainer = (props) => {
  const { size, totalSeconds, secondsLeft, setSecondsLeft } = props;

  const radius = size / 2;
  const circumference = size * Math.PI;
  const strokeDashoffset =
    circumference - (secondsLeft / totalSeconds) * circumference;

  useEffect(() => {
    const cleanup = startTimer(secondsLeft, setSecondsLeft);
    return () => cleanup();
  }, [secondsLeft, setSecondsLeft]);

  return (
    <ProgressBar
      radius={radius}
      circumference={circumference}
      strokeDashoffset={strokeDashoffset}
      {...props}
    />
  );
};

export default ProgressBarContainer;
