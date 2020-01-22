import React from 'react';
import { ReactSVG } from 'react-svg';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-me-section">
        <div className="image-wrapper">
          <ReactSVG src="/images/blob-shape.svg" />
        </div>
        <div className="content-flex-wrapper">
          <div className="content-grid-wrapper">
            <div className="title-wrapper">
              <h1>About Me</h1>
            </div>
            <div className="description">
              <p>
                I believe being a good front-end developer means being able to take good design
                principles and combine that with the knowledge and experience of web development,
                to create clean and effective UX & UI. I achieve this by reading and learning from
                experts in both design and web development, then I apply that knowledge through
                personal & work related projects. I have over 8 years of professional experience
                in web development. Building websites for small businesses to implementing
                redesigns and new features for a popular CMS and even working on apps.
              </p>
              <p>
                Using libraries and frameworks like React, JQuery, Angular and my personal
                favorite Vanilla Javascript. On the backend I have experience working with Laravel,
                Django. If your a business seeking to get a website built or your an employer
                looking to hire, you can get in touch with me
                <a href="mailto:hello@felixmanuel.com">here.</a>
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
