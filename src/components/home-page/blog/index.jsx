import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBlogPost: 1,
    };
    this.blogData = [
      {
        title: 'Netflix',
        description: 'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.',
        link: '/blog/test',
        image: '/images/blog-example-01.png',
      },
      {
        title: 'Showcase',
        description: 'Using the interactive showcase elements and amazing portfolio sliders in Assemble, you can easily highlight your top portfolio projects in a variety of captivating, innovative, and creative ways.',
        link: '/blog/test',
        image: '/images/blog-example-01.png',
      },
      {
        title: 'Hummus',
        description: 'Active showcase elements and amazing portfolio sliders in Assemble ok if it had content in this area. Which would be really great once I add it.',
        link: '/blog/test',
        image: '/images/blog-example-01.png',
      },
    ];

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildPreviewBlogPost(blogPost) {
    return (
      <div>
        <div id="blog-left-section" className="blog-sections">
          <div className="pad">
            <h1>
              {blogPost.title}
            </h1>
            <p>
              {blogPost.description}
            </p>
            <Link to={blogPost.link}>
              <button type="button">
                {'View Article'}
              </button>
            </Link>
          </div>
        </div>
        <div id="blog-right-section" className="blog-sections">
          <div className="arrow-section right">
            <div className="arrow" />
          </div>
          <div className="pad">
            <Link to={blogPost.link}>
              <img src={blogPost.image} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  buildDots(acitveID) {
    const dotClass = [
      'dot',
      'dot',
      'dot',
    ];
    const dots = dotClass.map((dot, key) => <div key={this.getKey()} className={key === acitveID ? `active ${dot}` : dot} />);
    return dots;
  }

  render() {
    return (
      <div id="blog-container">
        <div className="title">
          <h1>
            <a href="/blog">
              {'Blog'}
            </a>
          </h1>
        </div>
        <div className="arrow-section left">
          <div className="arrow" />
        </div>
        {this.buildPreviewBlogPost(this.blogData[this.state.visibleBlogPost])}
        <div className="arrow-section right">
          <div className="arrow" />
        </div>
        <div className="bread-crumbs">
          <div className="dot-section">
            {this.buildDots(this.state.visibleBlogPost)}
          </div>
        </div>
      </div>
    );
  }
}
