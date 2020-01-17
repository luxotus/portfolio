import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home-page/footer';

export default class SitesPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: 0,
        title: 'Streaming Service',
        link: '/sites/streaming-service',
        image: '/images/sites/screens/streaming-service.png',
      },
      {
        id: 1,
        title: 'Online Store',
        link: '/sites/online-store',
        image: '/images/sites/screens/online-store.png',
      },
      {
        id: 2,
        title: 'Pinterest Redesign',
        link: '/sites/pinterest-redesign',
        image: '/images/sites/screens/pinterest-redesign.png',
      },
      {
        id: 3,
        title: 'Luxotus',
        link: '/sites/luxotus-blog',
        image: '/images/sites/screens/luxotus.png',
      },
      {
        id: 4,
        title: 'Tea Shop',
        link: '/sites/tea-shop',
        image: '/images/sites/screens/tea-shop.png',
      },
    ];

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  content() {
    return this.data.map((item) => (
      <div
        key={this.getKey()}
        className="content-wrapper"
        id={`content-wrapper-${item.id}`}
      >
        <section>
          <Link to={item.link}>
            <h2>
              {item.title}
            </h2>
            <img src={item.image} alt={item.title} />
          </Link>
        </section>
      </div>
    ));
  }

  render() {
    return (
      <div className="site-layout-container">
        <div className="content-holder">
          {this.content()}
          <Footer />
        </div>
      </div>
    );
  }
}
