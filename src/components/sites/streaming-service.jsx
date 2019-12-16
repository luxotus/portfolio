import React from 'react';
import { ReactSVG } from 'react-svg';

export default class StreamingService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };

    this.updateMobileMenuStatus = this.updateMobileMenuStatus.bind(this);
  }

  updateMobileMenuStatus(isMobileMenuOpen) {
    if (typeof isMobileMenuOpen === 'boolean') {
      this.setState({ isMobileMenuOpen });
    }
  }

  render() {
    const { isMobileMenuOpen } = this.state;

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
          <div className="list-wrapper active">
            <h4>Browse</h4>
            <ul>
              <li>
                <p>History</p>
              </li>
              <li className="active">
                <p>Recommendations</p>
              </li>
              <li>
                <p>Popular</p>
              </li>
              <li>
                <p>Recently added</p>
              </li>
            </ul>
          </div>
          <div className="list-wrapper">
            <h4>Categories</h4>
            <ul>
              <li>
                <p>Action</p>
              </li>
              <li>
                <p>Comedy</p>
              </li>
              <li>
                <p>Documentary</p>
              </li>
              <li>
                <p>Drama</p>
              </li>
              <li>
                <p>Horror</p>
              </li>
              <li>
                <p>Kids</p>
              </li>
              <li>
                <p>Musicals</p>
              </li>
              <li>
                <p>Thriller</p>
              </li>
              <li>
                <p>TV Shows</p>
              </li>
            </ul>
          </div>
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
