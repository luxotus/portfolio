import React from 'react';
import './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h2>
          {'Felix Manuel '}
          <span>
            {`${String.fromCharCode(169)} 2018`}
          </span>
        </h2>
        <div className="icon-container">
          <a href="https://github.com/luxotus" className="icon-github" />
          <a href="https://codepen.io/luxotus/" className="icon-codepen" />
        </div>
      </footer>
    );
  }
}
