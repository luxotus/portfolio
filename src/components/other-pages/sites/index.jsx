import React from 'react';
import './index.css';
import Minimal from '../../layouts/minimal';

export default class SitesPage extends React.Component {
  constructor(props) {
    super(props);
    this.siteData = [
      {
        id: 0,
        title: 'Luxotus',
        link: '/sites/luxotus-blog',
        images: {
          sm: '/images/sites/screens/luxotus.png',
          md: '/images/sites/screens/luxotus.png',
          lg: '/images/sites/screens/luxotus.png',
        },
      },
      {
        id: 1,
        title: 'Tea Shop',
        link: '/sites/tea-shop',
        images: {
          sm: '/images/sites/screens/tea-shop.png',
          md: '/images/sites/screens/tea-shop.png',
          lg: '/images/sites/screens/tea-shop.png',
        },
      },
      {
        id: 2,
        title: 'Worldwide Stories',
        link: '/sites/worldwide-stories',
        images: {
          sm: '/images/sites/screens/worldwide-stories.png',
          md: '/images/sites/screens/worldwide-stories.png',
          lg: '/images/sites/screens/worldwide-stories.png',
        },
      },
    ];
  }

  render() {
    return (
      <Minimal data={this.siteData} />
    );
  }
}
