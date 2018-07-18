import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'all',
    };
    this.subMenuItems = this.subMenuItems.bind(this);
    this.siteItems = this.siteItems.bind(this);
    this.itemEffect = this.itemEffect.bind(this);
    this.updateActiveCategory = this.updateActiveCategory.bind(this);
  }

  updateActiveCategory(category) {
    this.setState({ activeCategory: category }, () => {
      this.itemEffect();
    });
  }

  categoryClick(e) {
    document.querySelector('#sites-container li.active').classList.remove('active');
    e.target.parentElement.classList.add('active');
    this.updateActiveCategory(e.target.parentElement.getAttribute('data-types'));
  }

  showElement(el) {
    const elDisplay = window.getComputedStyle(el, null).getPropertyValue('display');
    const elOpacity = parseFloat(window.getComputedStyle(el, null).getPropertyValue('opacity'));
    const element = el;

    if (elDisplay === 'none') {
      element.style.display = 'block';
    }

    if (elOpacity < 1) {
      element.style.opacity = 1;
      element.style.filter = 'alpha(opacity=1)';
    }
  }

  itemEffect() {
    const siteItems = document.querySelectorAll('.sites-section .sites-item');

    siteItems.forEach((el) => {
      const matchFound = (this.state.activeCategory === 'all') ? true : el.getAttribute('data-types').split(',').includes(this.state.activeCategory);

      if (matchFound) {
        this.showElement(el);
      } else {
        this.props.fadingEffect(el, null, 25);
      }
    });
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
        title: 'all',
      },
      {
        id: 1,
        title: 'restaurants',
      },
      {
        id: 2,
        title: 'landing page',
      },
      {
        id: 3,
        title: 'shops',
      },
      {
        id: 4,
        title: 'social media',
      },
      {
        id: 5,
        title: 'news',
      },
    ];

    return (
      listTypes.sort(this.compareTitle).map(item => (
        <li key={item.id} className={this.state.activeCategory === item.title ? 'active' : ''} data-types={item.title}>
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
          <Link
            to="/sites"
            onClick={() => this.props.onClick('/sites')}
            onKeyDown={() => this.props.onClick('/sites')}
          >
            {'Sites'}
          </Link>
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
