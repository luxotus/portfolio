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
  }

  render() {
    return (
      <Minimal data={this.siteData} />
    );
  }
}
