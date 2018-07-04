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
    const closeBtnClass = 'menu-close-btn';

    menuId.classList.toggle(closeBtnClass);
    this.setState({ isOpen: menuId.classList.contains(closeBtnClass) ? 'open-menu' : '' });
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
