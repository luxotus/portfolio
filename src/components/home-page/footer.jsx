import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.pageLinks = [
      {
        title: 'home',
        link: '/',
      },
      {
        title: 'about',
        link: '/',
        scrollToEl: '.about-me-section',
      },
      {
        title: 'sites',
        link: '/sites',
      },
      {
        title: 'blog',
        link: '/blog',
      },
      {
        title: 'contact',
        link: '/',
        scrollToEl: '#contact-container',
      },
    ];
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  handleMenuItemClick(event) {
    const { updateScrollToSection } = this.props;
    const dataScroll = event.currentTarget.getAttribute('data-scroll');

    if (dataScroll !== '') {
      updateScrollToSection(dataScroll);
    }
  }

  render() {
    return (
      <footer>
        <h2>
          {'Felix Manuel '}
          <span>
            © 2019
          </span>
        </h2>
        <ul>
          {this.pageLinks.map((item) => (
            <li
              key={`footer-links-${this.getKey()}`}
              role="presentation"
              data-scroll={'scrollToEl' in item ? item.scrollToEl : ''}
              onClick={(event) => this.handleMenuItemClick(event)}
              onKeyDown={(event) => this.handleMenuItemClick(event)}
            >
              <Link to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="icon-container">
          <a href="https://github.com/luxotus" className="icon-github" aria-label="github" />
          <a href="https://twitter.com/ManuelF_Dev" className="icon-twitter" aria-label="twitter" />
        </div>
      </footer>
    );
  }
}
