import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Button from "./Button";
import "../styles/App.css";
import rockImg from "../assets/rock.png";
import paperImg from "../assets/paper.png";
import scissorsImg from "../assets/scissors.png";

const choices = [
  { name: "Rock", img: rockImg },
  { name: "Paper", img: paperImg },
  { name: "Scissors", img: scissorsImg },
];

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const determineWinner = (user, computer) => {
    if (user.name === computer.name) return "It's a Draw!";
    if (
      (user.name === "Rock" && computer.name === "Scissors") ||
      (user.name === "Paper" && computer.name === "Rock") ||
      (user.name === "Scissors" && computer.name === "Paper")
    ) {
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
      return "You Win!";
    } else {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      return "You Lose!";
    }
  };

  const handleUserChoice = (choice) => {
    const computerMove = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(computerMove);
    setResult(determineWinner(choice, computerMove));
  };

  return (
    <div className="game-container">
      <Scoreboard score={score} />
      <div className="choices">
        {choices.map((choice) => (
          <Button key={choice.name} choice={choice} onClick={() => handleUserChoice(choice)} />
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="results">
          <h3>You chose:</h3>
          <img src={userChoice.img} alt={userChoice.name} />
          <h3>Computer chose:</h3>
          <img src={computerChoice.img} alt={computerChoice.name} />
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default Game;
