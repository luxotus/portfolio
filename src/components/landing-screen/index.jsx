import React from 'react';
import './index.css';
import BackgroundParticles from '../background-particles';
import Header from '../header';
import Sites from '../sites';
import Lab from '../lab';
import OpenSourceProjects from '../open-source-projects';

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
        <Sites />
        <Lab />
        <OpenSourceProjects />
      </div>
    );
  }
}
