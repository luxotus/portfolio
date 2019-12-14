import React from 'react';
import { ReactSVG } from 'react-svg';

export default class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  render() {
    return (
      <div className="collection-site-wrapper">
        <header>
          <div className="logo">q</div>
          <div className="search-bar">
            <span className="icon">
              <ReactSVG src="/svg/search.svg" />
            </span>
            <input type="text" name="search" placeholder="search" />
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              <span className="icon">
                <ReactSVG src="/svg/menu.svg" />
              </span>
            </button>
            <button type="button" className="btn">
              <span className="icon">
                <ReactSVG src="/svg/person.svg" />
              </span>
            </button>
            <button type="button" className="btn">
              <span className="icon">
                <ReactSVG src="/svg/message.svg" />
              </span>
              <div className="new-message-count">9+</div>
            </button>
          </div>
        </header>
        <div className="upper-wrapper">
          <div className="profile-wrapper">
            <div className="profile-image-wrapper">
              {/* image */}
            </div>
            <div className="details">
              <h2 className="name">Jane Doe</h2>
              <a href="https://felixmanuel.com/" className="site-link">https://felixmanuel.com</a>
              <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="stats">
                <div className="item">
                  <h3>2.3k</h3>
                  <h6>Pins</h6>
                </div>
                <div className="item">
                  <h3>481</h3>
                  <h6>likes</h6>
                </div>
                <div className="item">
                  <h3>11.7k</h3>
                  <h6>Followers</h6>
                </div>
                <div className="item">
                  <h3>233</h3>
                  <h6>Following</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stack-grid">
          <div className="item">
            <div className="img-wrapper">
              {/*  */}
            </div>
            <div className="details-wrapper">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="sub-section">
                <h6>coolsite.com</h6>
                <div className="likes">
                  <span className="icon">
                    <ReactSVG src="/svg/star.svg" />
                  </span>
                  <h5>875</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
