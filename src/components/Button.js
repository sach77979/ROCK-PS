import React from "react";

const Button = ({ choice, onClick }) => {
  return (
    <button className="choice-btn" onClick={onClick}>
      <img src={choice.img} alt={choice.name} />
      {choice.name}
    </button>
  );
};

export default Button;
