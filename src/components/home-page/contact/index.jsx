import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact-container">
        <div className="title">
          <h2>
            <Link to="/contact">
              {'Get in Touch'}
            </Link>
          </h2>
          <p>
            {'Any feedback or inquiries is much appreciated!'}
          </p>
        </div>
        <h1>
          <a href="mailto:hello@felixmanuel.com">
            {'hello@felixmanuel.com'}
          </a>
        </h1>
      </div>
    );
  }
}
