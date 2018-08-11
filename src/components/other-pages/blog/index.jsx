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
        description: 'When your starting a new product you should have a minimal viable product. Without it you could end up with a solution to a problem that no one uses or cares about. With it you can reduce your overall risk and increase your chances of launching a successful product.',
        content: 'Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus.Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus',
      },
      {
        title: 'Keeping up with the latest in your Dev Community',
        image: '/images/blog-lg-01.jpg',
        description: 'Keeping up with the latest in your development community will help you grow as a developer. From finding better employment opportunities to gaining insight into some of your common problems that others in the community have solved.',
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
