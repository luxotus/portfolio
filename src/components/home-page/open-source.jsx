import React from 'react';
import { ReactSVG } from 'react-svg';

export default class OpenSource extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildItems() {
    const data = [
      {
        title: 'Portfolio',
        description: 'My portfolio that your currently viewing is open source. So if your curious about how I built it or want to use it, feel free!',
        link: 'https://github.com/luxotus/portfolio',
      },
      {
        title: 'General Stat Helper',
        description: 'Collection of statistical functions implemented in ES6, that are often used in machine learning applications.',
        link: 'https://github.com/luxotus/general-stat-helper',
      },
      {
        title: 'Text Summarizer',
        description: 'Research tool that uses NLTK for summarizing multiple articles at once and extracting their top keywords.',
        link: 'https://github.com/luxotus/mits',
      },
      {
        title: 'Color Blindness Tool',
        description: 'Tool to help you view your site as a user with a color deficiency. Giving you confidence that your site is readable for all users.',
        link: 'https://github.com/luxotus/color-blindness',
      },
      {
        title: 'Color Contrast Tool',
        description: 'Tool to get the contrast between text and background color. Using WCAG20 G18 validation, to ensure that your site is accessible.',
        link: 'https://github.com/luxotus/color-contrast',
      },
      {
        title: 'UI Components Library',
        description: 'A collection of UI components that are commonly used by many websites. All components use basic html, css and plain javascript.',
        link: 'https://github.com/luxotus/ui-components-library',
      },
    ];

    const items = data.map((item) => (
      <a href={item.link} key={this.getKey()}>
        <div className="item">
          <h3>
            {item.title}
          </h3>
          <p>
            {item.description}
          </p>
          <span className="icon">
            <ReactSVG src="/svg/github.svg" />
          </span>
        </div>
      </a>
    ));

    return items;
  }

  render() {
    return (
      <div id="osp-container">
        <header>
          <h1>
            Open Source Projects
          </h1>
        </header>
        <div id="osp-wrapper">
          {this.buildItems()}
        </div>
      </div>
    );
  }
}
