import React from 'react';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <div className="landing-screen-wrapper">
        <div className="text-flex-section">
          <div className="text-grid-section" style={{ color: '#ffffff' }}>
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
          <div className="dark-bkg">
            <div className="blob-wrapper" />
          </div>
        </div>
      </div>
    );
  }
}
