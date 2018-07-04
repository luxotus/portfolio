import React from 'react';
import MenuButton from '../menu-button/index.jsx';
import './index.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h4>
          {'Felix Manuel'}
        </h4>
        <MenuButton />
      </div>
    );
  }
}
