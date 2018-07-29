import React from 'react';
import './index.css';
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
          sm: '/images/land.jpg',
          md: '/images/land.jpg',
          lg: '/images/land.jpg',
        },
      },
      {
        id: 1,
        title: 'Forbidden Fruit',
        link: '/lab/forbidden-fruit',
        images: {
          sm: '/images/land.jpg',
          md: '/images/land.jpg',
          lg: '/images/land.jpg',
        },
      },
      {
        id: 2,
        title: 'Born Sinner',
        link: '/lab/born-sinner',
        images: {
          sm: '/images/land.jpg',
          md: '/images/land.jpg',
          lg: '/images/land.jpg',
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
