import React from "react";

export default function Tabs(props) {
  return (
    <div className="container">
      <div class="card">
        <div className="card-title">
          <h1 className="mx-4">Account Setup</h1>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" style={{color:'black', fontWeight:'600'}} aria-current="page" href="/">
                Individual Holder
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color:'black', fontWeight:'600'}} href="/">
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
