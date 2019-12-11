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
        title: 'sites',
        link: '/sites',
      },
      {
        title: 'blog',
        link: '/blog',
      },
      {
        title: 'contact',
        link: '/contact',
      },
    ];
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
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
            <li key={`footer-links-${this.getKey()}`} className="">
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
