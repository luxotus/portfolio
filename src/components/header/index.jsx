import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
      menuBtnId: 'menu-btn-container',
    };

    this.toggleState = this.toggleState.bind(this);
    this.triggerMenuBtn = this.triggerMenuBtn.bind(this);
  }

  toggleState() {
    const menuId = document.getElementById(this.state.menuBtnId);
    const closeBtnClass = 'menu-close-btn';

    menuId.classList.toggle(closeBtnClass);
    this.setState({ isOpen: menuId.classList.contains(closeBtnClass) ? 'open-menu' : '' });
  }

  triggerMenuBtn() {
    document.getElementById(this.state.menuBtnId).click();
  }

  menu() {
    const linkItm = [
      'lab',
      'blog',
      'sites',
      'contact',
      'open source',
    ];

    return (
      <div className={this.state.isOpen}>
        <div
          id="menu-side-wrapper"
          role="presentation"
          onClick={this.triggerMenuBtn}
          onKeyDown={this.triggerMenuBtn}
        />
        <div id="menu" className="menu-container">
          <ul>
            {linkItm.map(item => (
              <li key={item}>
                <Link
                  to={{
                    pathname: `/${item.replace(' ', '-')}`,
                    state: this.props.displaysize,
                  }}
                  onClick={this.props.onClick}
                  onKeyDown={this.props.onClick}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="icon-container">
            <a href="https://github.com/luxotus" className="icon-github" />
            <a href="https://codepen.io/luxotus/" className="icon-codepen" />
          </div>
        </div>
      </div>
    );
  }

  menuBtn() {
    return (
      <div>
        <div
          id={this.state.menuBtnId}
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
          {'Felix Manuel'}
        </h4>
        {this.menuBtn()}
        {this.menu()}
      </header>
    );
  }
}
