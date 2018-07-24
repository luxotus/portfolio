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
    this.updateBlogPost = this.updateBlogPost.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildPreviewBlogPost(blogPost) {
    return (
      <div className="blog-sides-wrapper">
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
        <div id="blog-eraser" />
      </div>
    );
  }

  updateBlogPost(direction) {
    let pos = 0;
    const returnDirection = direction === 'left' ? 'right' : 'left';

    if (direction === 'right') {
      pos = (this.state.visibleBlogPost >= this.blogData.length - 1)
        ? 0 : this.state.visibleBlogPost + 1;
    } else {
      pos = (this.state.visibleBlogPost <= 0)
        ? this.blogData.length - 1 : this.state.visibleBlogPost - 1;
    }

    this.setState({ visibleBlogPost: pos }, () => {
      this.eraserAnimation(returnDirection);
    });
  }

  eraserAnimation(direction) {
    const element = document.getElementById('blog-eraser');
    const width = {
      current: parseFloat(window.getComputedStyle(element, null).getPropertyValue('width')),
      max: window.innerWidth,
    };
    const step = 5;
    const milSec = 10;
    const needsToBeUnErased = (width.current >= width.max);
    element.style.display = 'block';

    if (!needsToBeUnErased && direction === 'left') {
      element.style.left = 0;
      element.style.right = 'inherit';
      element.style.borderRight = '5px solid aqua';
      element.style.borderLeft = '';
    }

    if (!needsToBeUnErased && direction === 'right') {
      element.style.left = 'inherit';
      element.style.right = 0;
      element.style.borderRight = '';
      element.style.borderLeft = '5px solid aqua';
    }

    if (needsToBeUnErased) {
      const timer = setInterval(() => {
        if (width.current <= 0) {
          clearInterval(timer);
          element.style.width = '0px';
          element.style.display = 'none';
        } else {
          element.style.width = `${width.current}px`;
          width.current -= step;
        }
      }, milSec);
    } else {
      const timer = setInterval(() => {
        if (width.current >= width.max) {
          clearInterval(timer);
          element.style.width = `${width.max}px`;
          this.updateBlogPost(direction);
        } else {
          element.style.width = `${width.current}px`;
          width.current += step;
        }
      }, milSec);
    }
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
        <div
          className="arrow-section left"
          role="presentation"
          onClick={() => this.eraserAnimation('left')}
          onKeyDown={() => this.eraserAnimation('left')}
        >
          <div className="arrow" />
        </div>
        {this.buildPreviewBlogPost(this.blogData[this.state.visibleBlogPost])}
        <div
          className="arrow-section right"
          role="presentation"
          onClick={() => this.eraserAnimation('right')}
          onKeyDown={() => this.eraserAnimation('right')}
        >
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
