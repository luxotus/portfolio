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
        onClick={() => this.scrollToElement(crumb.id)}
        onKeyDown={() => this.scrollToElement(crumb.id)}
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

  breadCrumbAnimation(index) {
    const targetEl = document.querySelector(`.bread-crumbs-holder li[data-id="${index}"] .crumb-line`);
    const activeEl = document.querySelector('.bread-crumbs-holder li .crumb-line.active');
    const lineWidth = parseInt(window.getComputedStyle(activeEl).getPropertyValue('width'), 10);
    const step = 10;
    let i = lineWidth;
    const disappear = setInterval(() => {
      i -= step;
      activeEl.style.width = `${i}px`;
      if (i <= 0) {
        clearInterval(disappear);
        i = 0;
        targetEl.style.width = `${i}px`;
        const reappear = setInterval(() => {
          i += step;
          targetEl.style.width = `${i}px`;
          if (i >= lineWidth) {
            clearInterval(reappear);
            activeEl.classList.remove('active');
            targetEl.classList.add('active');
          }
        }, 20);
      }
    }, 20);
  }

  scrollToElement(index) {
    const step = 25;
    const holderToBeScrolled = document.querySelector('.content-holder');
    const targetEl = document.querySelectorAll('.content-wrapper')[index];
    const scrollPos = (parseInt(window.getComputedStyle(targetEl).getPropertyValue('height'), 10) * index) + step;
    const isIncreasing = (scrollPos > holderToBeScrolled.scrollTop);
    let i = holderToBeScrolled.scrollTop;

    const interval = setInterval(() => {
      holderToBeScrolled.scrollTo(0, i);

      if (isIncreasing) {
        i += step;
        if (i >= scrollPos) clearInterval(interval);
      } else {
        i -= step;
        if (i <= scrollPos) clearInterval(interval);
      }
    }, 20);

    this.breadCrumbAnimation(index);
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
