import React from 'react';
import './index.css';

export default class Blog extends React.Component {
  render() {
    return (
      <div id="blog-container">
        <div id="blog-left-section" className="blog-sections">
          <div className="pad">
            <h1>
              {'Showcase'}
            </h1>
            <p>
              {'Using the interactive showcase elements and amazing portfolio sliders in Assemble, you can easily highlight your top portfolio projects in a variety of captivating, innovative, and creative ways.'}
            </p>
            <a href="https://github.com/luxotus">
              {'View Article'}
            </a>
          </div>
        </div>
        <div id="blog-right-section" className="blog-sections" />
      </div>
    );
  }
}
