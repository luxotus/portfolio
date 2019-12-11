import React from 'react';

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
        title: 'Color Blindness Tool',
        description: 'Tool to help you view your site as a user with a color deficiency. Giving you confidence that your site is readable for all users.',
        link: 'https://github.com/luxotus/color-blindness',
      },
      {
        title: 'Color Contrast Tool',
        description: 'Tool to get the contrast between text and background color. Includes WCAG20 G18 validation, to ensure that your site is accessible.',
        link: 'https://github.com/luxotus/color-contrast',
      },
      {
        title: 'Color Converter',
        description: 'A simple tool to colors to different formats. Such as RGB to hex and vice-versa. Also included support for shorthand hex colors.',
        link: 'https://github.com/luxotus/color-converter',
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
          <span className="icon-github" />
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
