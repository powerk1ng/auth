export const startTimer = (remainingTime, setRemainingTime) => {
    const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
        clearInterval(interval);
    }

    return () => clearInterval(interval);
};
