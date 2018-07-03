import React from 'react';
import BackgroundParticles from '../background-particles/index.jsx';
import './index.css';

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="landing-screen">
        <BackgroundParticles />
      </div>
    );
  }
}
