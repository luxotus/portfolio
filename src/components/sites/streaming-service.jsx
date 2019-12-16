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
                  <li key={`list-item-${this.getKey()}`} className={activeSection === secKey && activeItem === index ? 'active' : ''}>
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
        </div>
      </div>
    );
  }
}
