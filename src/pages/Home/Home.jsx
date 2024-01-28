import ProgressBarContainer from "@/components/progressBar/ProgressBarContainer";
import { useState } from "react";
import { X } from "lucide-react";

const Home = () => {
  const size = 24;
  const totalSeconds = 5;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  // const percentage = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  return (
    <div className="p-4">
      <ProgressBarContainer
        totalSeconds={totalSeconds}
        size={size}
        strokeBgColor="orange"
        strokeColor="#dddddd"
        strokeWidth={4}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
      >
        <button disabled={secondsLeft > 0} style={{ fontSize: size * 0.4 }}>
          {secondsLeft > 0 ? secondsLeft : <X size={size * 0.6} />}
        </button>
      </ProgressBarContainer>
    </div>
  );
};

export default Home;
