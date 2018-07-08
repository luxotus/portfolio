import React from 'react';
import './index.css';

export default class OpenSourceProjects extends React.Component {
  render() {
    return (
      <div id="osp-container">
        <header>
          <h1>
            {'Open Source Projects'}
          </h1>
        </header>
        <div id="osp-wrapper">
          <div className="item">
            <h3>
              {'Color Blindness Tool'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>
          <div className="item" />
          <div className="item" />

          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
      </div>
    );
  }
}
