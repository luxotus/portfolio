import React from 'react';
import './index.css';

export default class Maximum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
    };
    this.data = [
      {
        title: 'The Great Debate: Vanilla JS or JQuery',
        image: '/images/blog-lg-01.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus, sit amet ultrices felis. Vestibulum accumsan neque in metus sodales ultrices. Morbi iaculis viverra nunc ac sodales. Donec vitae tempor tortor. Vivamus eget magna quis magna lacinia pharetra.',
        content: 'Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus. Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus.Sed sit amet luctus neque, at tincidunt odio. Phasellus sit amet pulvinar risus',
      },
    ];
  }

  showBlogContent() {
    document.querySelector('#maximum-layout-container button.read-more').style.display = 'none';
    document.querySelector('#maximum-layout-container .blog-content .content').style.display = 'block';
    document.querySelector('#maximum-layout-container .arrow-container').classList.add('closed');
  }

  createBlogElement(data) {
    return (
      <div className="blog-wrapper">
        <h1>
          {data.title}
        </h1>
        <div className="blog-content">
          <div className="description">
            {data.description}
          </div>
          <div className="content">
            {data.content.repeat(5)}
          </div>
        </div>
        <button
          type="button"
          className="read-more"
          onClick={() => this.showBlogContent()}
        >
          {'Read More'}
          <div />
        </button>
      </div>
    );
  }

  createActionBtns() {
    return (
      <div className="arrow-container">
        <button type="button" className="left-arrow arrow">
          <div />
        </button>
        <button type="button" className="right-arrow arrow">
          <div />
        </button>
        <button type="button" className="close">
          <div className="x" />
        </button>
      </div>
    );
  }

  createContentHolder(data) {
    return (
      <div className="content-holder">
        <div className="blog-image min" style={{ backgroundImage: `url(${data.image})` }} />
        <div className="blog-holder">
          {this.createBlogElement(data)}
          {this.createActionBtns()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="maximum-layout-container">
        {this.createContentHolder(this.data[this.state.activeID])}
      </div>
    );
  }
}
