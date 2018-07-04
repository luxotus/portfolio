import React from 'react';
import './index.css';

export default class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.subMenuItems = this.subMenuItems.bind(this);
  }

  subMenuItems() {
    const listTypes = [
      'React',
      'Vue',
      'Sass',
      'Php',
      'JQuery',
    ];

    return (
      listTypes.map(item => (
        <li key={item}>
          <button type="button">
            {item}
          </button>
        </li>
      ))
    );
  }

  render() {
    return (
      <div id="sites-container">
        <h1>
          {'Sites'}
        </h1>
        <ul>
          {React.createElement(this.subMenuItems)}
        </ul>
      </div>
    );
  }
}
