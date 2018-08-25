import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
    };

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  toggleState() {
    const menuId = document.getElementById(this.props.menuBtnId);
    const closeBtnClass = 'menu-close-btn';
    menuId.classList.toggle(closeBtnClass);

    const menuState = menuId.classList.contains(closeBtnClass) ? 'open-menu' : '';
    this.setState({ isOpen: menuState });
    this.props.updateMenuState(menuState);
  }

  menu() {
    const linkItm = [
      {
        title: 'home',
        link: '/',
      },
      {
        title: 'sites',
        link: '/sites',
      },
      {
        title: 'blog',
        link: '/blog',
      },
      {
        title: 'contact',
        link: '/contact',
      },
    ];

    return (
      <div className={this.state.isOpen}>
        <div
          id="menu-side-wrapper"
          role="presentation"
          onClick={() => document.getElementById(this.props.menuBtnId).click()}
          onKeyDown={() => document.getElementById(this.props.menuBtnId).click()}
        />
        <div id="menu" className="menu-container">
          <ul>
            {linkItm.map(item => (
              <li key={this.getKey()} className={(window.location.pathname.includes(`/${item.title.replace(' ', '-')}`)) ? 'active' : ''}>
                <Link to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="icon-container">
            <a href="https://github.com/luxotus" className="icon-github" />
            <a href="https://twitter.com/ManuelF_Dev" className="icon-twitter" />
          </div>
        </div>
      </div>
    );
  }

  menuBtn() {
    return (
      <div>
        <div
          id={this.props.menuBtnId}
          role="presentation"
          onClick={this.toggleState}
          onKeyDown={this.toggleState}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  render() {
    return (
      <header id="top-nav-bar">
        <h4>
          <Link to="/">
            {'Felix Manuel'}
          </Link>
        </h4>
        {this.menuBtn()}
        {this.menu()}
      </header>
    );
  }
}
