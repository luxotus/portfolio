import React from 'react';
import './index.css';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="carousel-container">
        <div className="carousel">
          <div id="left-hidden-item" className="floating-item hidden-item left" />
          <div id="left-shown-item" className="floating-item side-item left" />
          <div id="middle-shown-item" className="floating-item main-item">
            <div id="details">
              <h1>
                {'Arkade'}
                <br />
                {'London'}
              </h1>
              <p>
                {'- Audio Reactive Art'}
              </p>
            </div>
          </div>
          <div id="right-shown-item" className="floating-item side-item right" />
          <div id="right-hidden-item" className="floating-item hidden-item right" />
        </div>
        <div className="bread-crumbs">
          <div className="hexagon">
            <div className="triangle top" />
            <div className="square middle" />
            <div className="triangle bottom" />
          </div>
        </div>
      </div>

    );
  }
}