import React from "react";
import { GiTomato } from "react-icons/gi";

const Playbutton = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <i>
        <GiTomato className="pomodoro-button" />
      </i>
    </button>
  );
};

export default Playbutton;
