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
        'history',
        'recommendations',
        'popular',
        'recently added',
      ],
      categories: [
        'action',
        'comedy',
        'documentary',
        'drama',
        'horror',
        'kids',
        'musicals',
        'thriller',
        'TV shows',
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
        </div>
      </div>
    );
  }
}
