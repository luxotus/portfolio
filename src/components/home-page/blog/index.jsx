import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleBlogPost: 0,
      isContentVisible: true,
    };
    this.blogData = [
      {
        title: 'Minimum Viable Product',
        description: 'When your starting a new product you should have a minimal viable product. Without it you could end up with a solution to a problem that no one uses or cares about. With it you can reduce your overall risk and increase your chances of launching a successful product.',
        link: '/blog/minimal-viable-product',
        image: '/images/blog/minimum-viable-product-side-sm.jpeg',
      },
      {
        title: 'Keeping up with the latest in your Dev Community',
        description: 'Keeping up with the latest in your development community will help you grow as a developer. From finding better employment opportunities to gaining insight into some of your common problems that others in the community have solved.',
        link: '/blog/keeping-up-with-dev-community',
        image: '/images/blog/keeping-up-with-the-latest-sm.jpeg',
      },
    ];

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.dotAnimation = this.dotAnimation.bind(this);
    this.blogAnimation = this.blogAnimation.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  getNextPos(currentPos, arrayLength, shouldIncrement) {
    let nextPosition = 0;

    if (currentPos <= 0 && !shouldIncrement) {
      nextPosition = arrayLength - 1;
    } else if (currentPos >= arrayLength - 1 && shouldIncrement) {
      nextPosition = 0;
    } else {
      nextPosition = shouldIncrement ? currentPos + 1 : currentPos - 1;
    }

    return nextPosition;
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

  dotAnimation(id) {
    if (this.state.visibleBlogPost !== id) {
      const direction = (id < this.state.visibleBlogPost) ? 'left' : 'right';
      this.blogAnimation(direction);
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

  updateBlogPost(direction) {
    const increase = (direction === 'right');
    const nextDataPos = this.getNextPos(this.state.visibleBlogPost, this.blogData.length, increase);

    if (this.state.isContentVisible) {
      this.setState({ isContentVisible: false, visibleBlogPost: nextDataPos }, () => {
        this.blogAnimation();
      });
    } else {
      this.setState({ isContentVisible: true });
    }
  }

  animationTranslateX(to, from, direction) {
    const elements = {
      image: document.getElementById('blog-left-section'),
      wrapper: document.getElementById('blog-right-section'),
    };
    const step = from > to ? -3.5 : 3.5;
    const xOrigin = to;
    let xPos = from;

    const timer = setInterval(() => {
      if ((step < 0 && xPos <= xOrigin) || (step > 0 && xPos >= xOrigin)) {
        clearInterval(timer);
        elements.image.style.transform = `translateX(-${xOrigin}%)`;
        elements.wrapper.style.transform = `translateX(${xOrigin}%)`;
        this.updateBlogPost(direction);
      } else {
        elements.image.style.transform = `translateX(-${xPos}%)`;
        elements.wrapper.style.transform = `translateX(${xPos}%)`;
        xPos += step;
      }
    }, 10);
  }

  blogAnimation(direction) {
    if (this.state.isContentVisible) {
      this.animationTranslateX(120, 0, direction);
    } else {
      this.animationTranslateX(0, 120, direction);
    }
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
        <div className="blog-sides-wrapper">
          <div
            className="arrow-section left"
            role="presentation"
            onClick={() => this.blogAnimation('left')}
            onKeyDown={() => this.blogAnimation('left')}
          >
            <div className="arrow" />
          </div>
          {this.buildPreviewBlogPost(this.blogData[this.state.visibleBlogPost])}
          <div
            className="arrow-section right"
            role="presentation"
            onClick={() => this.blogAnimation('right')}
            onKeyDown={() => this.blogAnimation('right')}
          >
            <div className="arrow" />
          </div>
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
