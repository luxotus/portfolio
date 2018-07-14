import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
    };

    this.toggleState = this.toggleState.bind(this);
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
          onClick={this.props.triggerMenuBtn}
          onKeyDown={this.props.triggerMenuBtn}
        />
        <div id="menu" className="menu-container">
          <ul>
            {linkItm.map(item => (
              <li key={item}>
                <Link
                  to={`/${item.replace(' ', '-')}`}
                  onClick={() => this.props.onClick(`/${item.replace(' ', '-')}`)}
                  onKeyDown={() => this.props.onClick(`/${item.replace(' ', '-')}`)}
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
          <Link
            to="/"
            onClick={() => this.props.onClick('/')}
            onKeyDown={() => this.props.onClick('/')}
          >
            {'Felix Manuel'}
          </Link>
        </h4>
        {this.menuBtn()}
        {this.menu()}
      </header>
    );
  }
}
