import React from 'react';
// import { Link } from 'react-router-dom';
import './index.css';

export default class Maximum extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.keyCount = 0;
  //   this.getKey = this.getKey.bind(this);
  // }

  // getKey() {
  //   this.keyCount += 1;
  //   return this.keyCount;
  // }

  render() {
    return (
      <div id="maximum-layout-container">
        <div className="content-holder">
          <div className="blog-image" style={{ backgroundImage: 'url(/images/blog-lg-01.jpg)' }} />
          <div className="blog-holder">
            <div className="blog-wrapper">
              <h1>
                {'The Great Debate: Vanilla JS or JQuery'}
              </h1>
              <div className="blog-content">
                <div className="description">
                  {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus, sit amet ultrices felis. Vestibulum accumsan neque in metus sodales ultrices. Morbi iaculis viverra nunc ac sodales. Donec vitae tempor tortor. Vivamus eget magna quis magna lacinia pharetra.'}
                </div>
                <div className="content">
                  {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus, sit amet ultrices felis. Vestibulum accumsan neque in metus sodales ultrices. Morbi iaculis viverra nunc ac sodales. Donec vitae tempor tortor. Vivamus eget magna quis magna lacinia pharetra.'}
                </div>
              </div>
              <button type="button">
                {'Read More'}
                <div />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
