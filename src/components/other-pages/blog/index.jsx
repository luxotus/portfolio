import React from 'react';
import './index.css';
import Maximum from '../../layouts/maximum';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.blogData = [
      {
        title: 'Minimum Viable Product',
        image: '/images/blog-lg-01.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus, sit amet ultrices felis. Vestibulum accumsan neque in metus sodales ultrices. Morbi iaculis viverra nunc ac sodales. Donec vitae tempor tortor. Vivamus eget magna quis magna lacinia pharetra.',
        content: 'Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus.Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus',
      },
      {
        title: 'Keeping up with the latest in the Front-End Dev',
        image: '/images/blog-lg-01.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus, sit amet ultrices felis. Vestibulum accumsan neque in metus sodales ultrices. Morbi iaculis viverra nunc ac sodales. Donec vitae tempor tortor. Vivamus eget magna quis magna lacinia pharetra.',
        content: 'Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus.Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus',
      },
    ];
  }

  render() {
    return (
      <Maximum data={this.blogData} />
    );
  }
}
