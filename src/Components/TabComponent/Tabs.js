import React from "react";

export default function Tabs(props) {
  return (
    <div className="container mt-5 shadow">
      <div className="card border-0">
        {/* <div className="card-title">
          <h1 className="m-4">Account Setup</h1>
        </div> */}
        <div className="card-body">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" style={{color:'black', fontWeight:'600'}} aria-current="page" href="/">
                Individual Holder
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'black', fontWeight:'600'}} href="/">
                Account Configuration
              </a>
            </li>
          </ul>
          <div className="card-text">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
