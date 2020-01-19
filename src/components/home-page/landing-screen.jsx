import React from 'react';
import animatedBlobs from '../../general/blob';

export default class LandingScreen extends React.Component {
  componentDidMount() {
    animatedBlobs.init();
  }

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
          {/* <div className="dark-line" /> */}
          <div className="dark-bkg">
            <div className="blob-wrapper" />
          </div>
        </div>
      </div>
    );
  }
}
