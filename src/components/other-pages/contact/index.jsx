import React from 'react';
import './index.css';
import Contact from '../../home-page/contact';
import Footer from '../../home-page/footer';

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

  componentDidMount() {
    const { unfade } = this.props;
    unfade(document.getElementById('contact-page-container'));
  }

  render() {
    return (
      <div id="contact-page-container">
        <Contact />
        <Footer />
      </div>
    );
  }
}
