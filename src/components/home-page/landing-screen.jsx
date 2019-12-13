import React from 'react';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <div className="landing-screen-wrapper">
        <div className="text-flex-section">
          <div className="text-grid-section">
            <h1>
              I Create
              <br />
              Interactive
              <br />
              Experiences.
            </h1>
            <p>
              Web developer that uses JavaScript and CSS to build high-end interactive sites,
              applications and tools.
            </p>
          </div>
        </div>
        <div className="visual-section">
          <div className="lg-diamond" />
          <div className="sm-diamond top-left" />
          {/* <div className="sm-diamond top-right" /> */}
          <div className="sm-diamond bottom-left" />
          <div className="sm-diamond bottom-right" />
        </div>
      </div>
    );
  }
}
