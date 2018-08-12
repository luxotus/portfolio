import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBlogPost: 0,
    };
    this.blogData = [
      {
        title: 'Minimum Viable Product',
        description: 'When your starting a new product you should have a minimal viable product. Without it you could end up with a solution to a problem that no one uses or cares about. With it you can reduce your overall risk and increase your chances of launching a successful product.',
        link: '/blog/test',
        image: '/images/blog/minimum-viable-product-side.jpeg',
      },
      {
        title: 'Keeping up with the latest in your Dev Community',
        description: 'Keeping up with the latest in your development community will help you grow as a developer. From finding better employment opportunities to gaining insight into some of your common problems that others in the community have solved.',
        link: '/blog/test',
        image: '/images/blog/keeping-up-with-the-latest.jpeg',
      },
    ];

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.updateBlogPost = this.updateBlogPost.bind(this);
    this.dotAnimation = this.dotAnimation.bind(this);
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

  updateBlogPost(direction, dotLocation) {
    const returnDirection = direction === 'left' ? 'right' : 'left';
    let pos = 0;

    if (typeof dotLocation === 'undefined') {
      if (direction === 'right') {
        pos = (this.state.visibleBlogPost >= this.blogData.length - 1)
          ? 0 : this.state.visibleBlogPost + 1;
      } else {
        pos = (this.state.visibleBlogPost <= 0)
          ? this.blogData.length - 1 : this.state.visibleBlogPost - 1;
      }
    } else {
      pos = dotLocation;
    }

    this.setState({ visibleBlogPost: pos }, () => {
      this.eraserAnimation(returnDirection);
    });
  }

  eraserAnimation(direction, dotLocation) {
    const element = document.getElementById('blog-eraser');
    const blogWrapper = document.querySelector('.blog-sides-wrapper');
    const blogPad = parseFloat(window.getComputedStyle(blogWrapper, null).getPropertyValue('padding-top')) * 2;
    const blogHeight = parseFloat(window.getComputedStyle(blogWrapper, null).getPropertyValue('height')) + blogPad;
    const width = {
      current: parseFloat(window.getComputedStyle(element, null).getPropertyValue('width')),
      max: window.innerWidth,
    };
    const step = 5;
    const milSec = 10;
    const needsToBeUnErased = (width.current >= width.max);
    element.style.display = 'block';
    element.style.height = `${blogHeight}px`;

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
          this.updateBlogPost(direction, dotLocation);
        } else {
          element.style.width = `${width.current}px`;
          width.current += step;
        }
      }, milSec);
    }
  }

  dotAnimation(id) {
    if (this.state.visibleBlogPost !== id) {
      const direction = (id < this.state.visibleBlogPost) ? 'left' : 'right';
      this.eraserAnimation(direction, id);
    }
  }

  buildDots(acitveID) {
    const dotClass = Array(this.blogData.length).fill('dot');

    const dots = dotClass.map((dot, key) => (
      <div
        key={this.getKey()}
        role="presentation"
        onClick={() => this.dotAnimation(key)}
        onKeyDown={() => this.dotAnimation(key)}
        className={key === acitveID ? `active ${dot}` : dot}
      />
    ));
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
