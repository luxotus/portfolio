import React from 'react';
import Minimal from '../../layouts/minimal';

export default class LabPage extends React.Component {
  constructor(props) {
    super(props);
    this.labData = [
      {
        id: 0,
        title: 'Crooked Smile',
        link: '/lab/crooked-smile',
        images: {
          sm: '/images/site_01.png',
          md: '/images/site_01.png',
          lg: '/images/site_01.png',
        },
      },
      {
        id: 1,
        title: 'Forbidden Fruit',
        link: '/lab/forbidden-fruit',
        images: {
          sm: '/images/site_02.png',
          md: '/images/site_02.png',
          lg: '/images/site_02.png',
        },
      },
      {
        id: 2,
        title: 'Born Sinner',
        link: '/lab/born-sinner',
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
      <Minimal data={this.labData} />
    );
  }
}
