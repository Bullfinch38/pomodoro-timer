import React from "react";
import { VscDebugRestart } from "react-icons/vsc";

const Restartbutton = ({ onRestart }) => {
  return (
    <button className="btn" onClick={onRestart}>
      <i>
        <VscDebugRestart className="back-button" />
      </i>
    </button>
  );
};

export default Restartbutton;
