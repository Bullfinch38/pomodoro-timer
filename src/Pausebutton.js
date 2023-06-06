import React from "react";
import { BsPause } from "react-icons/bs";

const Pausebutton = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <i>
        <BsPause className="pause-button" />
      </i>
    </button>
  );
};

export default Pausebutton;
