import React from 'react';
import './index.css';

export default class OpenSource extends React.Component {
  render() {
    return (
      <div id="osp-container">
        <header>
          <h1>
            <a href="/open-source">
              {'Open Source Projects'}
            </a>
          </h1>
        </header>
        <div id="osp-wrapper">
          <div className="item">
            <h3>
              {'Color Blindness Tool'}
            </h3>
            <p>
              {'Tool to help you view your site as a user with a color deficiency. Giving you confidence that your site is readable for all users.'}
            </p>
            <a href="https://github.com/luxotus/color-blindness" className="icon-github" />
          </div>
          <div className="item">
            <h3>
              {'Color Contrast Tool'}
            </h3>
            <p>
              {'Tool to get the contrast between text and background color. Includes WCAG20 G18 validation, to ensure that your site is accessible.'}
            </p>
            <a href="https://github.com/luxotus/color-contrast" className="icon-github" />
          </div>
          <div className="item">
            <h3>
              {'Color Converter'}
            </h3>
            <p>
              {'A simple tool to colors to different formats. Such as RGB to hex and vice-versa. Also included support for shorthand hex colors.'}
            </p>
            <a href="https://github.com/luxotus/color-converter" className="icon-github" />
          </div>

          <div className="item">
            <h3>
              {'Portfolio'}
            </h3>
            <p>
              {'My portfolio that your currently viewing is open source. So if your curious how I built it or want to use it, feel free!'}
            </p>
            <a href="https://github.com/luxotus/portfolio" className="icon-github" />
          </div>
        </div>
      </div>
    );
  }
}
