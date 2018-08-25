import React from 'react';
import './index.css';
import Contact from '../../home-page/contact';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      color: {
        general: '#a9a9a9',
        points: '#000000',
        line: '#bdbdbd',
      },
      number: {
        value: 20,
      },
    };
  }

  render() {
    return (
      <div id="contact-page-container">
        <Contact />
      </div>
    );
  }
}
