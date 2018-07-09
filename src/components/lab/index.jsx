import React from 'react';
import './index.css';
import Carousel from '../carousel';

export default class Lab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="lab-container">
        <header>
          <h1>
            <a href="/lab">
              {'Experimental Lab'}
            </a>
          </h1>
        </header>
        <Carousel />
      </div>
    );
  }
}
