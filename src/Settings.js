import React from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="settings">
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="slider-1"
        thumbClassName="thumb-1"
        trackClassName="track-1"
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className="slider-2"
        thumbClassName="thumb-2"
        trackClassName="track-2"
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
    </div>
  );
};

export default Settings;
