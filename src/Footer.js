import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="pomodoro-instructions">
        <ul>
          <li>Set a specific task or goal to work on.</li>
          <li>
            Set a timer for 25 minutes, which is called a "Pomodoro" interval.
          </li>
          <li>Focus solely on the task until the timer goes off.</li>
          <li>Take a short 5-minute break after each Pomodoro interval.</li>
          <li>
            During the break, step away from your work area and engage in a
            different activity.
          </li>
          <li>
            After completing four Pomodoro intervals, take a longer break of
            around 15-30 minutes.
          </li>
          <li>Repeat the process by starting another Pomodoro interval.</li>
          <li>Keep track of the number of completed Pomodoro intervals.</li>
          <li>
            If interrupted during a Pomodoro interval, make note of the
            interruption and resume where you left off, or restart the interval
            if necessary.
          </li>
          <li>
            Use a timer or a Pomodoro app to assist with tracking the time
            intervals.
          </li>
          <li>
            Adjust the length of the Pomodoro intervals and breaks to suit your
            preferences and concentration span.
          </li>
        </ul>
      </div>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/konstantin-snigirev-4a197410b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Bullfinch38" target="_blank">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
