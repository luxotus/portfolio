import React from 'react';
import { ReactSVG } from 'react-svg';

export default class StreamingService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
      activeSection: 'browse',
      activeItem: 0,
    };

    this.sections = {
      browse: [
        'home',
        'recommendations',
        'popular',
        'recently added',
      ],
      categories: [
        'action',
        'animation',
        'comedy',
        'crime',
        'documentary',
        'drama',
        'horror',
        'Sci-Fi',
        'thriller',
        'TV shows',
      ],
    };
    this.movies = {
      'continue watching': [
        {
          imagePath: '/images/sites/streaming-service/1.jpg',
          title: 'Pulp Fiction',
          category: 'Drama',
          parentalRating: 'R',
          duration: '2h 34min',
          releaseDate: '1994',
        },
        {
          imagePath: '/images/sites/streaming-service/2.jpg',
          title: 'Alien',
          category: 'Sci-Fi',
          parentalRating: 'R',
          duration: '1h 57min',
          releaseDate: '1979',
        },
        {
          imagePath: '/images/sites/streaming-service/3.jpg',
          title: 'Avengers: Endgame',
          category: 'Action',
          parentalRating: 'PG-13',
          duration: '3h 1min',
          releaseDate: '2019',
        },
        {
          imagePath: '/images/sites/streaming-service/4.jpg',
          title: 'Joker',
          category: 'Thriller',
          parentalRating: 'R',
          duration: '2h 2min',
          releaseDate: '2019',
        },
        {
          imagePath: '/images/sites/streaming-service/5.jpg',
          title: 'Jaws',
          category: 'Thriller',
          parentalRating: 'PG',
          duration: '2h 4min ',
          releaseDate: '1975',
        },
        {
          imagePath: '/images/sites/streaming-service/6.jpg',
          title: 'Toy Story',
          category: 'Animation',
          parentalRating: 'PG',
          duration: '1h 21min',
          releaseDate: '1995',
        },
        {
          imagePath: '/images/sites/streaming-service/7.jpg',
          title: 'A Christmas Story',
          category: 'Comedy',
          parentalRating: 'PG',
          duration: '1h 34min',
          releaseDate: '1983',
        },
      ],
    };
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.updateMobileMenuStatus = this.updateMobileMenuStatus.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  updateMobileMenuStatus(isMobileMenuOpen) {
    if (typeof isMobileMenuOpen === 'boolean') {
      this.setState({ isMobileMenuOpen });
    }
  }

  updateActiveSection(activeSection) {
    if (activeSection === 'browse' || activeSection === 'categories') {
      this.setState({ activeSection });
    }
  }

  updateActiveItem(activeItem) {
    const { activeSection } = this.state;
    if (activeItem >= 0 && activeItem < this.sections[activeSection].length) {
      this.setState({ activeItem });
    }
  }

  handleListItemClick(event) {
    const { activeSection, activeItem } = this.state;
    const el = event.currentTarget;

    if (activeSection !== el.getAttribute('data-section')) {
      this.updateActiveSection(el.getAttribute('data-section'));
    }

    if (!Number.isNaN(parseInt(el.getAttribute('data-index'), 10)) && activeItem !== parseInt(el.getAttribute('data-index'), 10)) {
      this.updateActiveItem(parseInt(el.getAttribute('data-index'), 10));
    }
  }

  render() {
    const { isMobileMenuOpen, activeSection, activeItem } = this.state;

    return (
      <div className="streaming-service-wrapper">
        <div className={`side-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          <button
            type="button"
            className="btn close-btn mobile-btn"
            onClick={() => this.updateMobileMenuStatus(false)}
          >
            <span className="icon">
              <ReactSVG src="/svg/close.svg" />
            </span>
          </button>
          <div className="logo">
            <h2>Logi</h2>
          </div>
          {Object.keys(this.sections).map((secKey) => (
            <div key={`list-wrapper-${this.getKey()}`} className={`list-wrapper ${activeSection === secKey ? 'active' : ''}`}>
              <h4>{secKey}</h4>
              <ul>
                {this.sections[secKey].map((item, index) => (
                  <li
                    role="presentation"
                    key={`list-item-${this.getKey()}`}
                    data-index={index}
                    data-section={secKey}
                    className={activeSection === secKey && activeItem === index ? 'active' : ''}
                    onClick={(event) => this.handleListItemClick(event)}
                    onKeyDown={(event) => this.handleListItemClick(event)}
                  >
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="content-wrapper">
          <button
            type="button"
            className="btn menu-btn mobile-btn"
            onClick={() => this.updateMobileMenuStatus(true)}
          >
            <span className="icon">
              <ReactSVG src="/svg/menu.svg" />
            </span>
          </button>
          <header>
            <div className="nav-buttons-wrapper">
              <button type="button" className="back-btn btn">
                <span className="icon">
                  <ReactSVG src="/svg/arrow-left.svg" />
                </span>
              </button>
              <button type="button" className="forward-btn btn active">
                <span className="icon">
                  <ReactSVG src="/svg/arrow-right.svg" />
                </span>
              </button>
            </div>
            <div className="search-profile-wrapper">
              <div className="search-wrapper">
                <button type="button" className="btn search-btn">
                  <span className="icon">
                    <ReactSVG src="/svg/search.svg" />
                  </span>
                </button>
                <input type="text" name="search" />
              </div>
              <div className="profile-wrapper">
                <div className="notification-btn-wrapper">
                  <div className="dot" />
                  <button type="button" className="notification-btn btn">
                    <span className="icon">
                      <ReactSVG src="/svg/bell.svg" />
                    </span>
                  </button>
                </div>
                <div className="image-wrapper">
                  <img src="/images/sites/streaming-service/14.jpg" alt="" />
                </div>
                <div className="name-account-wrapper">
                  <h3>Jane Smith</h3>
                  <a href="felixmanuel.com">Manage Account</a>
                </div>
              </div>
            </div>
          </header>
          <div className="content">
            <div className="large-preview">
              {/*  */}
            </div>
            <div className="small-column-preview">
              <div className="preview-item">
                {/*  */}
              </div>
              <div className="preview-item">
                {/*  */}
              </div>
              <div className="preview-item">
                {/*  */}
              </div>
            </div>
          </div>
          <div className="content-rows">
            {Object.keys(this.movies).map((key) => (
              <div key={`row-wrapper-${this.getKey()}`} className="row-wrapper">
                <h2>{key}</h2>
                <div className="row">
                  {this.movies[key].map((item) => (
                    <div key={`movie-item-${this.getKey()}`} className="item">
                      <div className="row-image-wrapper">
                        <img src={item.imagePath} alt="" />
                      </div>
                      <h5>{item.title}</h5>
                      <h6>{`${item.category} • ${item.duration} • ${item.releaseDate}`}</h6>
                      <p>{item.parentalRating}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
