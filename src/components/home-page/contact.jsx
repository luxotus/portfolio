import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundParticles from './background-particles';

export default class Contact extends React.Component {
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

  detectWhenSectionNotVisible(selector) {
    const el = document.getElementById(selector);
    const { showParticles } = this.state;

    if (el !== null) {
      const height = parseInt(window.getComputedStyle(el).height, 10);
      const buffer = 300;
      const offsetTop = document.getElementById(selector).offsetTop - (height + buffer);

      if (showParticles && window.scrollY < offsetTop) {
        this.updateParticleState(false);
      } else if (!showParticles && window.scrollY > offsetTop) {
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
      <div id="contact-container">
        <div className="title">
          <h2>
            <Link to="/contact">
              Get in Touch
            </Link>
          </h2>
          <p>
            Any feedback or inquiries is much appreciated!
          </p>
        </div>
        <h1>
          <a href="mailto:hello@felixmanuel.com">
            hello@felixmanuel.com
          </a>
        </h1>
        {showParticles ? this.addParticles() : ''}
      </div>
    );
  }
}
