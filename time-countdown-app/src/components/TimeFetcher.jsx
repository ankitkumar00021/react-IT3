import React, { useState } from "react";

const TimeFetcher = () => {
  const [currentTime, setCurrentTime] = useState("");

  const fetchTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCurrentTime(formattedTime);
  };

  return (
    <div style={styles.container}>
      <h2>Fetch System Time</h2>
      <button style={styles.button} onClick={fetchTime}>
        Get Current Time
      </button>
      {currentTime && <p>Current Time: {currentTime}</p>}
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
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TimeFetcher;
