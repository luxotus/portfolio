import React from 'react';
import './index.css';

export default class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.subMenuItems = this.subMenuItems.bind(this);
    this.siteItems = this.siteItems.bind(this);
  }

  subMenuItems() {
    const listTypes = [
      'React',
      'Vue',
      'Sass',
      'Php',
      'JQuery',
    ];

    return (
      listTypes.map(item => (
        <li key={item}>
          <button type="button">
            {item}
          </button>
        </li>
      ))
    );
  }

  siteItems() {
    const listSites = [
      {
        name: 'Main Home',
        types: [
          'React',
          'Sass',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        name: 'Simple Slide',
        types: [
          'React',
          'Sass',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        name: 'Team Gold',
        types: [
          'React',
          'Sass',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        name: 'Main Home2',
        types: [
          'React',
          'Sass',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        name: 'Simple Slide2',
        types: [
          'React',
          'Sass',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        name: 'Team Gold2',
        types: [
          'React',
          'Sass',
        ],
        imageSrc: '/images/test.jpg',
      },
    ];

    return (
      listSites.map(item => (
        <div className="sites-item" key={item.name}>
          <div className="item-overlay">
            {item.name}
          </div>
          <div className="item-image">
            <img src={item.imageSrc} alt={item.name} />
          </div>
        </div>
      ))
    );
  }

  part() {
    return (
      <div id="sites-container">
        <h1>
          <a href="/sites">
            {'Sites'}
          </a>
        </h1>
        <ul>
          {React.createElement(this.subMenuItems)}
        </ul>
        <div className="sites-section">
          {React.createElement(this.siteItems)}
        </div>
      </div>
    );
  }

  whole() {
    return <div id="lab-screen" />;
  }

  displayElement(props) {
    const displaySize = props.displaySize;

    if (displaySize === 'part') {
      return this.part();
    }

    return this.whole();
  }

  render() {
    return (this.displayElement(this.props));
  }
}
