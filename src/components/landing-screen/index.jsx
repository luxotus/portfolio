import React from 'react';
import './index.css';
import BackgroundParticles from '../background-particles';
import Header from '../header';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <div id="landing-screen">
        <Header />
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
        <BackgroundParticles />
      </div>
    );
  }
}
