import React from 'react';
import { Link } from 'react-router-dom';
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
      <li
        key={this.getKey()}
        data-id={crumb.id}
        role="presentation"
        onClick={() => this.scrollToElement()}
        onKeyDown={() => this.scrollToElement()}
      >
        <div className="bread-crumb" />
        <div className={(crumb.id === this.state.activeID) ? 'crumb-line active' : 'crumb-line'} />
      </li>
    ));
  }

  content() {
    return this.props.data.map(item => (
      <div
        key={this.getKey()}
        className="content-wrapper"
        id={`content-wrapper-${item.id}`}
      >
        <section>
          <Link to={item.link}>
            <h2>
              {item.title}
            </h2>
            <img src={item.images.lg} alt="" />
          </Link>
        </section>
      </div>
    ));
  }

  scrollToElement() {
    let i = 10;
    const holderToBeScrolled = document.querySelector('.content-holder');
    const milSec = 20;
    const step = 10;
    const interval = setInterval(() => {
      holderToBeScrolled.scrollTo(0, i);
      i += step;
      if (i >= 200) clearInterval(interval);
    }, milSec);
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
          {this.content()}
        </div>
      </div>
    );
  }
}
