import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [inputSeconds, setInputSeconds] = useState("");
  const [remainingTime, setRemainingTime] = useState(null);
  const [isCounting, setIsCounting] = useState(false);

  // Converts seconds into HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer;
    if (isCounting && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsCounting(false);
      alert("Countdown finished!");
    }
    return () => clearTimeout(timer);
  }, [remainingTime, isCounting]);

  const startCountdown = () => {
    const seconds = parseInt(inputSeconds, 10);
    if (isNaN(seconds) || seconds <= 0) {
      alert("Please enter a valid positive number!");
      return;
    }
    setRemainingTime(seconds);
    setIsCounting(true);
  };

  const stopCountdown = () => {
    setIsCounting(false);
  };

  const resetCountdown = () => {
    setIsCounting(false);
    setRemainingTime(null);
    setInputSeconds("");
  };

  return (
    <div style={styles.container}>
      <h2>Countdown Timer</h2>
      <input
        type="number"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(e.target.value)}
        placeholder="Enter seconds"
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={startCountdown} disabled={isCounting}>
          Start
        </button>
        <button style={styles.button} onClick={stopCountdown} disabled={!isCounting}>
          Stop
        </button>
        <button style={styles.resetButton} onClick={resetCountdown}>
          &#x21bb; {/* Unicode symbol for a reset icon */}
        </button>
      </div>
      {remainingTime !== null && (
        <p style={styles.timer}>
          Time Remaining: <strong>{formatTime(remainingTime)}</strong>
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
    display: "inline-block",
  },
  input: {
    padding: "8px",
    margin: "-20px",
    width: "calc(100% - 16px)",
    fontSize: "14px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "10px 0",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",      
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resetButton: {
    padding: "10px 20px",
    backgroundColor: "#FF5733",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  timer: {
    fontSize: "18px",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default CountdownTimer;
