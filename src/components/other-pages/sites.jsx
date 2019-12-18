import React from 'react';
import Minimal from '../layouts/minimal';

export default class SitesPage extends React.Component {
  constructor(props) {
    super(props);
    this.siteData = [
      {
        id: 0,
        title: 'Streaming Service',
        link: '/sites/streaming-service',
        image: '/images/sites/screens/streaming-service.png',
      },
      {
        id: 1,
        title: 'Pinterest Redesign',
        link: '/sites/pinterest-redesign',
        image: '/images/sites/screens/pinterest-redesign.png',
      },
      {
        id: 2,
        title: 'Luxotus',
        link: '/sites/luxotus-blog',
        image: '/images/sites/screens/luxotus.png',
      },
      {
        id: 3,
        title: 'Tea Shop',
        link: '/sites/tea-shop',
        image: '/images/sites/screens/tea-shop.png',
      },
      {
        id: 4,
        title: 'Worldwide Stories',
        link: '/sites/worldwide-stories',
        image: '/images/sites/screens/worldwide-stories.png',
      },
    ];
  }

  render() {
    return (
      <Minimal data={this.siteData} />
    );
  }
}
