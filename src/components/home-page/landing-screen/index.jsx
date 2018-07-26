import React from 'react';
import './index.css';
import BackgroundParticles from '../background-particles';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <div id="landing-screen">
        <div id="landing-text-holder">
          <h1>
            {'I create'}
            <br />
            {'interactive'}
            <br />
            {'experiences.'}
          </h1>
          <p>
            {'Web developer that uses JavaScript and CSS to build high-end interactive sites, applications and tools.'}
          </p>
        </div>
        <BackgroundParticles colors={{ general: '#a9a9a9', points: '#000000', line: '#bdbdbd' }} />
      </div>
    );
  }
}
