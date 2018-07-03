import React from 'react';
import BackgroundParticles from '../background-particles/index.jsx';
import Header from '../header/index.jsx';
import './index.css';

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
