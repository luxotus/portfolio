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
          <div className="item" />
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
