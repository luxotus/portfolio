import React from 'react';
import './index.css';

export default class Minimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
    };

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.breadCrumbs = this.breadCrumbs.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  breadCrumbs() {
    return this.props.data.map(crumb => (
      <li key={this.getKey()} data-id={crumb.id}>
        <div className="bread-crumb" />
        <div className={(crumb.id === this.state.activeID) ? 'crumb-line active' : 'crumb-line'} />
      </li>
    ));
  }

  render() {
    return (
      <div id="minimal-layout-container">
        <div className="bread-crumbs-holder">
          <ul>
            {this.breadCrumbs()}
          </ul>
        </div>
        <div className="content-holder">
          <div className="content-wrapper">
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
      </div>
    );
  }
}
