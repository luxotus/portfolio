import React from 'react';
import './index.css';

export default class Lab extends React.Component {
  render() {
    return (
      <div id="lab-container">
        <header>
          <h1>
            <a href="/lab">
              {'Experimental Lab'}
            </a>
          </h1>
        </header>
        <div id="carousel-container">
          <div className="carousel">
            <div id="left-hidden-item" className="floating-item hidden-item left" />
            <div id="left-shown-item" className="floating-item side-item left" />
            <div id="middle-shown-item" className="floating-item main-item">
              <div id="details">
                <h1>
                  {'Arkade'}
                  <br />
                  {'London'}
                </h1>
                <p>
                  {'- Audio Reactive Art'}
                </p>
              </div>
            </div>
            <div id="right-shown-item" className="floating-item side-item right" />
            <div id="right-hidden-item" className="floating-item hidden-item right" />
          </div>
          <div className="bread-crumbs">
            <div className="dot-section">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
