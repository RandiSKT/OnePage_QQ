import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css"

function ProgressBar({ title, current, goal }) {
  const percentage = (current / goal) * 100;
  const progressBarWidth = percentage <= 100 ? `${percentage}%` : "100%";

  return (
    <div className="progress-container">
      <h2>{title}</h2>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className="progress-details">
        <p><strong>{`Meta: ${goal}`}</strong></p>
        <p><strong>{`Concluído: ${current}`}</strong></p>
        <p><strong>{`Faltam: ${goal - current}`}</strong></p>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
};

export default ProgressBar;
