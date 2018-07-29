import React from 'react';
import './index.css';

export default class Minimal extends React.Component {
  render() {
    return (
      <div id="minimal-layout-container">
        <div className="bread-crumbs-holder">
          <ul>
            <li>
              <div className="bread-crumb" />
              <div className="crumb-line" />
            </li>
            <li>
              <div className="bread-crumb" />
            </li>
            <li>
              <div className="bread-crumb" />
            </li>
          </ul>
        </div>
        <div className="content-holder">
          <section>
            <a href="/lab">
              <h2>
                {'Some Title'}
              </h2>
              <img src="/images/land.jpg" alt="" />
            </a>
          </section>
        </div>
      </div>
    );
  }
}
