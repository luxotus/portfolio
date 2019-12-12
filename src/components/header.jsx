import React from 'react';
import { Link } from 'react-router-dom';

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
    const { menuBtnId, updateMenuState } = this.props;
    const menuId = document.getElementById(menuBtnId);
    const closeBtnClass = 'menu-close-btn';
    menuId.classList.toggle(closeBtnClass);

    const menuState = menuId.classList.contains(closeBtnClass) ? 'open-menu' : '';
    this.setState({ isOpen: menuState });
    updateMenuState(menuState);
  }

  handleMenuItemClick(event) {
    const { menuBtnId, updateScrollToSection } = this.props;
    const dataScroll = event.currentTarget.getAttribute('data-scroll');

    if (dataScroll !== '') {
      updateScrollToSection(dataScroll);
    }

    document.getElementById(menuBtnId).click();
  }

  menu() {
    const linkItm = [
      {
        title: 'home',
        link: '/',
      },
      {
        title: 'about',
        link: '/',
        scrollToEl: '.about-me-section',
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
    const { isOpen } = this.state;
    const { menuBtnId } = this.props;

    return (
      <div className={isOpen}>
        <div
          id="menu-side-wrapper"
          role="presentation"
          onClick={() => document.getElementById(menuBtnId).click()}
          onKeyDown={() => document.getElementById(menuBtnId).click()}
        />
        <div id="menu" className="menu-container">
          <ul>
            {linkItm.map((item) => (
              <li
                key={this.getKey()}
                role="presentation"
                data-scroll={'scrollToEl' in item ? item.scrollToEl : ''}
                onClick={(event) => this.handleMenuItemClick(event)}
                onKeyDown={() => document.getElementById(menuBtnId).click()}
              >
                <Link to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="icon-container">
            <a href="https://github.com/luxotus" className="icon-github" aria-label="github" />
            <a href="https://twitter.com/ManuelF_Dev" className="icon-twitter" aria-label="twitter" />
          </div>
        </div>
      </div>
    );
  }

  menuBtn() {
    const { menuBtnId } = this.props;

    return (
      <div>
        <div
          id={menuBtnId}
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
            Felix Manuel
          </Link>
        </h4>
        {this.menuBtn()}
        {this.menu()}
      </header>
    );
  }
}
