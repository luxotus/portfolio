import React from 'react';
import './index.css';

export default class Blog extends React.Component {
  render() {
    return (
      <div id="blog-container">
        <div className="title">
          <h1>
            <a href="/blog">
              {'Blog'}
            </a>
          </h1>
        </div>
        <div id="blog-left-section" className="blog-sections">
          <div className="arrow-section left">
            <div className="arrow" />
          </div>
          <div className="pad">
            <h1>
              {'Showcase'}
            </h1>
            <p>
              {'Using the interactive showcase elements and amazing portfolio sliders in Assemble, you can easily highlight your top portfolio projects in a variety of captivating, innovative, and creative ways.'}
            </p>
            <a href="https://github.com/luxotus">
              <button type="button">
                {'View Article'}
              </button>
            </a>
          </div>
        </div>
        <div id="blog-right-section" className="blog-sections">
          <div className="arrow-section right">
            <div className="arrow" />
          </div>
          <div className="pad">
            <a href="https://github.com/luxotus">
              <img src="/images/blog-example-01.png" alt="" />
            </a>
          </div>
        </div>
        <div className="bread-crumbs">
          <div className="dot-section">
            <div className="dot" />
            <div className="dot active" />
            <div className="dot" />
          </div>
        </div>
      </div>
    );
  }
}
