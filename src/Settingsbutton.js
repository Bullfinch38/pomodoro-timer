import React from "react";
import { BiCog } from "react-icons/bi";

const Settingsbutton = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <i>
        <BiCog className="cog-button" />
      </i>
    </button>
  );
};

export default Settingsbutton;
