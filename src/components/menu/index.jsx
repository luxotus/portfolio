import React from 'react';
import './index.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'lab',
        'blog',
        'sites',
        'contact',
        'open source',
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById(this.props.menuBtnId).click();
  }

  render() {
    return (
      <div className={this.props.isOpen}>
        <div
          id="menu-side-wrapper"
          role="presentation"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
        />
        <div id="menu" className="menu-container">
          <ul>
            {this.state.items.map(item => (
              <li key={item}>
                <a href={`#${item}`}>
                  {item}
                </a>
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
}
