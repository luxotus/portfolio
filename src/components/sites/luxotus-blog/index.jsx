import React from 'react';
import './index.css';

export default class LuxotusBlog extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildNavHolder() {
    return (
      <div className="row nav_holder">
        <div className="col-md-2 col-xl-2 nav_logo">
          <a href="/">
            {'Lux'}
            <span>
              {'otus'}
            </span>
          </a>
        </div>
        <div className="col-sm-6 col-xl-7 nav_main">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                {'Development'}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {'Gadgets'}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {'Tutorials'}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {'UX'}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-1 col-xl-1 search_container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="/" alt="">
                <i className="fas fa-search" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 col-xl-2 social_container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fab fa-google" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" alt="">
                <i className="fab fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  buildSearchHolder() {
    return (
      <div className="row search_holder">
        <div className="col-md-2 col-xl-2 pull-left nav_logo">
          <a href="/">
            {'Lux'}
            <span>
              {'otus'}
            </span>
          </a>
        </div>
        <div className="col-xl-8 pull-left search-input-wrapper">
          <div className="form-group">
            <input type="text" placeholder="Search..." className="form-control" id="search_input" />
          </div>
        </div>
        <div className="col-xl-1 pull-left">
          <span className="close rounded" />
        </div>
      </div>
    );
  }

  buildNav() {
    return (
      <div className="container-fluid nav_bar">
        {this.buildNavHolder()}
        {this.buildSearchHolder()}
      </div>
    );
  }

  render() {
    return (
      <div id="luxotus-blog-container">
        {this.buildNav()}
      </div>
    );
  }
}
