import React from "react";
import TimeFetcher from "./components/TimeFetcher";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  return (
    <div style={styles.app}>
      <h1>System Time Fetch and Countdown App</h1>
      <TimeFetcher />
      <CountdownTimer />
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: "20px",
  },
};

export default App;
