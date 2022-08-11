import React from "react";
import './MultiStepProgressBar.css';

export default function MultiStepProgressBar() {
  return (
    <div className="form-header d-flex mb-4">
      <span className="stepIndicator"></span>
      <span className="stepIndicator"></span>
      <span className="stepIndicator"></span>
      <span className="stepIndicator"></span>
      <span className="stepIndicator"></span>
    </div>
  );
}
