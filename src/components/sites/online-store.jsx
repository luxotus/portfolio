import React from 'react';
import { ReactSVG } from 'react-svg';

export default class OnlineStore extends React.Component {
  render() {
    return (
      <div className="online-store-wrapper">
        <header>
          <div className="logo-nav-wrapper">
            <div className="mobile-menu-wrapper">
              <button type="button" className="menu-btn">
                <span className="icon">
                  <ReactSVG src="/svg/menu.svg" />
                </span>
              </button>
              <ul className="mobile-menu">
                <li>
                  <a className="active" href="/">Home</a>
                </li>
                <li>
                  <a href="/">Latest</a>
                </li>
                <li>
                  <a href="/">Gadgets</a>
                </li>
                <li>
                  <a href="/">Furniture</a>
                </li>
                <li>
                  <a href="/">Fashion</a>
                </li>
                <li>
                  <a href="/">Outdoors</a>
                </li>
              </ul>
            </div>
            <div className="logo">
              <h3>LQ</h3>
            </div>
            <nav>
              <a className="active" href="/">Home</a>
              <a href="/">Latest</a>
              <a href="/">Gadgets</a>
              <a href="/">Furniture</a>
              <a href="/">Fashion</a>
              <a href="/">Outdoors</a>
            </nav>
          </div>
          <div className="side">
            <div className="search-wrapper">
              <input type="text" name="" />
              <button type="button" className="search-btn btn">
                <span className="icon">
                  <ReactSVG src="/svg/search.svg" />
                </span>
              </button>
            </div>
            <button type="button" className="shop-btn btn">
              <span className="icon">
                <ReactSVG src="/svg/shopping-cart.svg" />
              </span>
            </button>
          </div>
        </header>
        <div className="upper-content">
          <div className="large-item item">
            {/* img */}
          </div>
          <div className="small-item item">
            {/* img */}
          </div>
          <div className="small-item item">
            {/* img */}
          </div>
        </div>
      </div>
    );
  }
}
