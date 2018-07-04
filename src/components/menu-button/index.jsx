import React from 'react';
import Menu from '../menu/index.jsx';
import './index.css';

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const menuId = document.getElementById('menu-btn-container');
    menuId.classList.toggle('menu-close');
    this.setState({ isOpen: menuId.classList.contains('menu-close') ? 'open' : '' });
  }

  render() {
    return (
      <div>
        <div
          id="menu-btn-container"
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
