import React from 'react';
import Minimal from '../layouts/minimal';

export default class SitesPage extends React.Component {
  constructor(props) {
    super(props);
    this.siteData = [
      {
        id: 0,
        title: 'Luxotus',
        link: '/sites/luxotus-blog',
        image: '/images/sites/screens/luxotus.png',
      },
      {
        id: 1,
        title: 'Tea Shop',
        link: '/sites/tea-shop',
        image: '/images/sites/screens/tea-shop.png',
      },
      {
        id: 2,
        title: 'Worldwide Stories',
        link: '/sites/worldwide-stories',
        image: '/images/sites/screens/worldwide-stories.png',
      },
    ];
  }

  componentDidMount() {
    const { unfade } = this.props;
    unfade(document.getElementById('minimal-layout-container'));
  }

  render() {
    return (
      <Minimal data={this.siteData} />
    );
  }
}
