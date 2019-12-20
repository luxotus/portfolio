import React from 'react';
import { Link } from 'react-router-dom';

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

  fadingEffect(elHide, milSec) {
    const element = elHide;
    const minVal = 0;
    const OpStep = 0.1;
    let op = parseFloat(window.getComputedStyle(element, null).getPropertyValue('opacity'));
    op = (op === 0) ? OpStep : op;

    const timer = setInterval(() => {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
        element.style.opacity = minVal;
        element.style.filter = `alpha(opacity=${minVal})`;
      } else {
        element.style.opacity = op;
        element.style.filter = `alpha(opacity=${op * 100})`;
        op -= op * OpStep;
      }
    }, milSec);
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
    const { activeCategory } = this.state;

    siteItems.forEach((el) => {
      const matchFound = (activeCategory === 'all') ? true : el.getAttribute('data-types').split(',').includes(activeCategory);

      if (matchFound) {
        this.showElement(el);
      } else {
        this.fadingEffect(el, 25);
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
        title: 'blog',
      },
      {
        id: 2,
        title: 'shop',
      },
      {
        id: 3,
        title: 'app',
      },
      {
        id: 4,
        title: 'landing page',
      },
    ];
    const { activeCategory } = this.state;

    return (
      listTypes.sort(this.compareTitle).map((item) => (
        <li key={item.id} className={activeCategory === item.title ? 'active' : ''} data-types={item.title}>
          <button type="button" onClick={(e) => this.categoryClick(e, this)} onKeyDown={(e) => this.categoryClick(e, this)}>
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
        name: 'Luxotus',
        link: 'luxotus-blog',
        types: [
          'blog',
        ],
        imageSrc: '/images/sites/screens/luxotus-sm.png',
      },
      {
        id: 1,
        name: 'Tea Shop',
        link: 'tea-shop',
        types: [
          'shop',
          'landing page',
        ],
        imageSrc: '/images/sites/screens/tea-shop-sm.png',
      },
      {
        id: 2,
        name: 'Pinterest Redesign',
        link: 'pinterest-redesign',
        types: [
          'app',
        ],
        imageSrc: '/images/sites/screens/pinterest-redesign-sm.png',
      },
      {
        id: 3,
        name: 'Streaming Service',
        link: 'streaming-service',
        types: [
          'app',
        ],
        imageSrc: '/images/sites/screens/streaming-service-sm.png',
      },
      {
        id: 4,
        name: 'Online Store',
        link: 'online-store',
        types: [
          'shop',
        ],
        imageSrc: '/images/sites/screens/online-store-sm.png',
      },
    ];

    return (
      listSites.map((item) => (
        <Link
          key={item.id}
          to={`/sites/${item.link}`}
        >
          <div className="sites-item" key={item.id} data-types={item.types.join(',')}>
            <div className="item-overlay">
              {item.name}
            </div>
            <div className="item-image">
              <img src={item.imageSrc} alt={item.name} />
            </div>
          </div>
        </Link>
      ))
    );
  }

  render() {
    return (
      <div id="sites-container">
        <h1>
          <Link to="/sites">
            Sites
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
