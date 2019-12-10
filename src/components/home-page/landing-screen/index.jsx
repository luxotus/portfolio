import React from 'react';
import './index.css';
import BackgroundParticles from '../background-particles';

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showParticles: true,
    };
    this.data = {
      color: {
        general: '#a9a9a9',
        points: '#000000',
        line: '#bdbdbd',
      },
      number: {
        value: 10,
      },
    };

    this.updateParticleState = this.updateParticleState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.detectWhenSectionNotVisible('#landing-screen'); });
  }

  detectWhenSectionNotVisible(selector) {
    const el = document.querySelector(selector);
    const { showParticles } = this.state;

    if (el !== null) {
      const height = parseInt(window.getComputedStyle(el).height, 10);
      const topBufferSpace = 50;

      if (showParticles && window.scrollY + topBufferSpace > height) {
        this.updateParticleState(false);
      } else if (!showParticles && window.scrollY + topBufferSpace < height) {
        this.updateParticleState(true);
      }
    }
  }

  updateParticleState(show) {
    this.setState({ showParticles: show });
  }

  addParticles() {
    return (
      <BackgroundParticles data={this.data} />
    );
  }

  render() {
    const { showParticles } = this.state;

    return (
      <div id="landing-screen">
        <div id="landing-text-holder">
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
        {showParticles ? this.addParticles() : ''}
      </div>
    );
  }
}
