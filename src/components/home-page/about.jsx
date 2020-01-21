import React from 'react';
import { ReactSVG } from 'react-svg';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-me-section">
        <div className="image-wrapper">
          <img src="/images/blog/1.jpg" alt="" />
        </div>
        <div className="content-flex-wrapper">
          <div className="content-grid-wrapper">
            <div className="title-wrapper">
              <h1>About Me</h1>
              <h4>Felix Manuel - Front End Developer</h4>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Gaseab massa.
                Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </div>
            <div className="social-wrapper">
              <a href="https://github.com/luxotus">
                <span className="icon github">
                  <ReactSVG src="/svg/github.svg" />
                </span>
              </a>
              <a href="https://twitter.com/ManuelF_Dev">
                <span className="icon twitter">
                  <ReactSVG src="/svg/twitter.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
