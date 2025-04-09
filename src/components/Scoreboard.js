import React from "react";

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <p>You: {score.user}</p>
      <p>Computer: {score.computer}</p>
    </div>
  );
};

export default Scoreboard;
