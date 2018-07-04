import React from 'react';
import Menu from '../menu/index.jsx';
import './index.css';

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
      menuBtnId: 'menu-btn-container',
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const menuId = document.getElementById(this.state.menuBtnId);
    menuId.classList.toggle('menu-close-btn');
    this.setState({ isOpen: menuId.classList.contains('menu-close-btn') ? 'open-menu' : '' });
  }

  render() {
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
        <Menu {...this.state} />
      </div>
    );
  }
}
