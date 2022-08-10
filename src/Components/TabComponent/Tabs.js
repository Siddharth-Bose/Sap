import React from "react";

export default function Tabs(props) {
  return (
    <div className="container">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Individual Holder
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Account Configuration
              </a>
            </li>
          </ul>
          <div class="card-text">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
