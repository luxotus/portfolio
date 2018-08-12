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
          sm: '/images/site_01.png',
          md: '/images/site_01.png',
          lg: '/images/site_01.png',
        },
      },
      {
        id: 1,
        title: 'Online Store',
        link: '/sites/online-store',
        images: {
          sm: '/images/site_02.png',
          md: '/images/site_02.png',
          lg: '/images/site_02.png',
        },
      },
      {
        id: 2,
        title: 'Software Product',
        link: '/sites/software-product',
        images: {
          sm: '/images/site_03.png',
          md: '/images/site_03.png',
          lg: '/images/site_03.png',
        },
      },
      {
        id: 3,
        title: 'French Toast',
        link: '/lab/born-sinner',
        images: {
          sm: '/images/site_04.png',
          md: '/images/site_04.png',
          lg: '/images/site_04.png',
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
