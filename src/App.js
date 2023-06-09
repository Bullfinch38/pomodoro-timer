import React from "react";
import "./App.css";
import Timer from "./Timer";
import { useState } from "react";
import SettingsContext from "./SettingsContext";

const App = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(10);

  return (
    <SettingsContext.Provider
      value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}
    >
      <Timer />
    </SettingsContext.Provider>
  );
};

export default App;
