import React, { useState, useEffect, useContext, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Playbutton from "./Playbutton";
import Pausebutton from "./Pausebutton";
import Restartbutton from "./Restartbutton";
import SettingsContext from "./SettingsContext";
import DropDownSettings from "./DropDownSettings";
import ring from "../src/bell2.mp3";
import { TiTickOutline } from "react-icons/ti"

const red = "#f54e4e";
const green = "#009b4d";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const Sound = () => {
    const audio = new Audio(ring);
    return audio.play();
  };

  function tick() {

    if (secondsLeftRef.current === 0) {
      if (modeRef.current === "work") {
        setShowPopup(true);
      } else {
        switchMode();
      }
      console.log("Tick stopped after time is out");
      return;
    } 

    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
    console.log("tick", secondsLeftRef.current);
  }

  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      (nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  useEffect(() => {
    
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      console.log("intervalTick");
      if (isPausedRef.current) {
        return;
      }

      tick();
    }, 1000);

    console.log("Interval created");

    return () => clearInterval(interval);
  }, [settingsInfo]);

  useEffect(() => {
    isPausedRef.current = isPaused;
    console.log("isPausedRef.current", isPausedRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (secondsLeftRef.current === 0) {
      Sound();
    }
  }, [secondsLeft]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  function restartTimer() {
    setIsPaused(true);
    setMode("work");
    setSecondsLeft(settingsInfo.workMinutes * 60);
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
  }

  function handleAnswerSubmit() {
    if (userAnswer.toLocaleLowerCase() === "yes") {
      switchMode();
    } else {
      restartTimer()
    }
    setShowPopup(false);
    setUserAnswer("");
    
  }

  return (
    <div>
      <div className="container">
        <CircularProgressbar
          value={percentage}
          text={`${minutes + ":" + seconds}`}
          styles={buildStyles({
            rotation: 1,
            strokeLinecap: "round",
            textColor: "white",
            pathColor: mode === "work" ? red : green,
            tailColor: "rgba(255,255,255,.2)",
          })}
        />
      </div>
      {showPopup && mode === "work" && ( // Render the popup message
        <div className="popup">
          <div className="popup-message">
          <p>Time's up! Ready for a break?</p>
          </div>

          <div className="popup-input">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type 'Yes' to switch to break!"
          />
          <button onClick={handleAnswerSubmit} className="input-button">
            <i>
              <TiTickOutline className="save-input-button"/>
            </i>
          </button>
          </div>
        </div>
      )}
        <div className="nav">
          {isPaused ? (
            <Playbutton
              onClick={() => {
                console.log("Play button clicked");
                setIsPaused(false);
              }}
            />
          ) : (
            <Pausebutton
              onClick={() => {
                console.log("Pause button clicked");
                setIsPaused(true);
              }}
            />
          )}
          <Restartbutton onRestart={restartTimer} />
          <DropDownSettings />
        </div>
    </div>
  );
}

export default Timer;
