import React from 'react';
import './index.css';

export default class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.subMenuItems = this.subMenuItems.bind(this);
    this.siteItems = this.siteItems.bind(this);
  }

  categoryClick(e) {
    document.querySelector('#sites-container li.active').classList.remove('active');
    e.target.parentElement.classList.add('active');
    this.itemEffect(e.target.parentElement.getAttribute('data-types'));
  }

  itemEffect(category) {
    console.log(`category: ${category}`);
  }

  compareTitle(a, b) {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  }

  subMenuItems() {
    const listTypes = [
      {
        id: 0,
        isActive: true,
        title: 'all',
      },
      {
        id: 1,
        isActive: false,
        title: 'restaurants',
      },
      {
        id: 2,
        isActive: false,
        title: 'landing page',
      },
      {
        id: 3,
        isActive: false,
        title: 'shops',
      },
      {
        id: 4,
        isActive: false,
        title: 'social media',
      },
      {
        id: 5,
        isActive: false,
        title: 'news',
      },
    ];

    return (
      listTypes.sort(this.compareTitle).map(item => (
        <li key={item.id} className={item.isActive ? 'active' : ''} data-types={item.title}>
          <button type="button" onClick={e => this.categoryClick(e, this)} onKeyDown={e => this.categoryClick(e, this)}>
            {item.title}
          </button>
        </li>
      ))
    );
  }

  siteItems() {
    const listSites = [
      {
        id: 0,
        name: 'Main Home',
        types: [
          'restaurants',
          'landing page',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        id: 1,
        name: 'Simple Slide',
        types: [
          'news',
          'landing page',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        id: 2,
        name: 'Team Gold',
        types: [
          'restaurants',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        id: 3,
        name: 'Main Home2',
        types: [
          'news',
          'landing page',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        id: 4,
        name: 'Simple Slide2',
        types: [
          'shops',
        ],
        imageSrc: '/images/test.jpg',
      },
      {
        id: 5,
        name: 'Team Gold2',
        types: [
          'social media',
        ],
        imageSrc: '/images/test.jpg',
      },
    ];

    return (
      listSites.map(item => (
        <div className="sites-item" key={item.id} data-types={item.types.join(',')}>
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

  render() {
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
}
