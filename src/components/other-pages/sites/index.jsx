import React from 'react';
import './index.css';
import Minimal from '../../layouts/minimal';

export default class SitesPage extends React.Component {
  constructor(props) {
    super(props);
    this.siteData = [
      {
        id: 0,
        title: 'Tea Shop',
        link: '/sites/tea-shop',
        images: {
          sm: '/images/sites/testing/site_01.png',
          md: '/images/sites/testing/site_01.png',
          lg: '/images/sites/testing/site_01.png',
        },
      },
      {
        id: 1,
        title: 'Luxotus',
        link: '/sites/luxotus-blog',
        images: {
          sm: '/images/sites/testing/site_02.png',
          md: '/images/sites/testing/site_02.png',
          lg: '/images/sites/testing/site_02.png',
        },
      },
      {
        id: 2,
        title: 'Worldwide Stories',
        link: '/sites/worldwide-stories',
        images: {
          sm: '/images/sites/testing/site_03.png',
          md: '/images/sites/testing/site_03.png',
          lg: '/images/sites/testing/site_03.png',
        },
      },
      {
        id: 3,
        title: 'French Toast',
        link: '/lab/born-sinner',
        images: {
          sm: '/images/sites/testing/site_04.png',
          md: '/images/sites/testing/site_04.png',
          lg: '/images/sites/testing/site_04.png',
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
