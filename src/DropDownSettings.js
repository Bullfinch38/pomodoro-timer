import React, { useState, useContext } from "react";
import { BiCog } from "react-icons/bi";
import { TiTickOutline } from "react-icons/ti";
import SettingsContext from "./SettingsContext";

function PomodoroTimer() {
  const [showSettings, setShowSettings] = useState(false);

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleSaveSettings = () => {
    setShowSettings(false);
  };

  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <button className="btn" onClick={handleToggleSettings}>
        {showSettings ? "" : ""}
        <i>
          <BiCog className="cog-button" />
        </i>
      </button>
      {showSettings && (
        <div className="popup-container-full">
          <div className="popup-container">
            <div className="popup-content">
              <h3>Time Settings</h3>
              <label>Work: {settingsInfo.workMinutes} minutes</label>
              <input
                type="range"
                id="pomodoro-slider"
                min={1}
                max={60}
                value={settingsInfo.workMinutes}
                onChange={(event) =>
                  settingsInfo.setWorkMinutes(event.target.value)
                }
              />
              <label>Break: {settingsInfo.breakMinutes} minutes</label>
              <input
                type="range"
                id="break-slider"
                min={1}
                max={60}
                value={settingsInfo.breakMinutes}
                onChange={(event) =>
                  settingsInfo.setBreakMinutes(event.target.value)
                }
              />
              <button className='btn' onClick={handleSaveSettings}>
                <i>
                  <TiTickOutline className="save-button"/>
                </i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PomodoroTimer;
