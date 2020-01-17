import React from 'react';
import { ReactSVG } from 'react-svg';
import Interweave from 'interweave';
import mvpData from '../../blog-data/mvp';
import devCommunityData from '../../blog-data/dev-community';
import productiveTipsData from '../../blog-data/productive-tips';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
    };

    this.blogData = [productiveTipsData(), mvpData(), devCommunityData()];
    this.updateCurrentBlog = this.updateCurrentBlog.bind(this);
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  componentDidMount() {
    this.blogData.forEach((item, index) => {
      if (item.main.link === window.location.pathname) {
        this.updateActiveIdD(index);
      }
    });
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  scaleImage(shouldIncrement) {
    const element = document.querySelector('.blog-layout-container .blog-image');
    const step = 0.01;
    const milSec = 10;
    const range = {
      min: 0.8,
      max: 1,
    };

    if (shouldIncrement) {
      let scale = range.min;

      const timer = setInterval(() => {
        if (scale >= range.max) {
          clearInterval(timer);
          element.classList.remove('min');
          element.style.transform = `scale(${range.max}, ${range.max})`;
        } else {
          element.style.transform = `scale(${scale}, ${scale})`;
          scale += step;
        }
      }, milSec);
    } else {
      let scale = range.max;

      const timer = setInterval(() => {
        if (scale <= range.min) {
          clearInterval(timer);
          element.classList.add('min');
          element.style.transform = `scale(${range.min}, ${range.min})`;
        } else {
          element.style.transform = `scale(${scale}, ${scale})`;
          scale -= step;
        }
      }, milSec);
    }
  }

  showBlogContent() {
    document.querySelector('.blog-layout-container button.read-more').style.display = 'none';
    document.querySelector('.blog-layout-container .blog-content .content').style.display = 'block';
    document.querySelector('.blog-layout-container .arrow-container').classList.add('closed');
    this.scaleImage(true);
  }

  hideBlogContent() {
    document.querySelector('.blog-layout-container button.read-more').style.display = 'block';
    document.querySelector('.blog-layout-container .blog-content .content').style.display = 'none';
    document.querySelector('.blog-layout-container .arrow-container').classList.remove('closed');
    this.scaleImage(false);
  }

  blogPostAnimation(transform) {
    const elements = {
      image: document.querySelector('.blog-layout-container .blog-image'),
      wrapper: document.querySelector('.blog-layout-container .blog-wrapper'),
    };
    const step = 5;
    const xOrigin = 0;
    let xPos = 120;

    const timer = setInterval(() => {
      if (xPos <= xOrigin) {
        clearInterval(timer);
        elements.image.style.transform = `${transform} translateX(${xOrigin}%)`;
        elements.wrapper.style.transform = `translateX(${xOrigin}%)`;
      } else {
        elements.image.style.transform = `${transform} translateX(-${xPos}%)`;
        elements.wrapper.style.transform = `translateX(${xPos}%)`;
        xPos -= step;
      }
    }, 20);
  }

  updateActiveIdD(id) {
    if (!Number.isNaN(parseInt(id, 10))) {
      this.setState({ activeID: id });
    }
  }

  updateCurrentBlog(direction, transform) {
    const { activeID } = this.state;
    let nextPos = activeID;

    if (direction === 'left') {
      nextPos = (activeID === 0 ? this.blogData.length - 1 : activeID - 1);
    } else if (direction === 'right') {
      nextPos = (activeID === this.blogData.length - 1 ? 0 : activeID + 1);
    }

    this.setState({ activeID: nextPos }, () => this.blogPostAnimation(transform));
  }

  changeBlogPost(direction) {
    const elements = {
      image: document.querySelector('.blog-layout-container .blog-image'),
      wrapper: document.querySelector('.blog-layout-container .blog-wrapper'),
    };
    let matrix = window.getComputedStyle(elements.image, null).getPropertyValue('transform');
    matrix = matrix.substring(7, matrix.length - 1).split(', ');
    const transform = `scale(${matrix[0]}, ${matrix[3]})`;
    const xPos = 120;

    elements.image.style.transform = `${transform} translateX(-${xPos}%)`;
    elements.wrapper.style.transform = `${transform} translateX(${xPos}%)`;

    this.updateCurrentBlog(direction, transform);
  }

  createContentFromData(data) {
    const subSection = data.map((section) => (
      <div className="content-section" key={this.getKey()}>
        <h2>
          {section.title}
        </h2>
        {
          section.paragraphs.map((paragraph) => (
            <p key={this.getKey()}>
              <Interweave content={paragraph} />
            </p>
          ))
        }
        {
          section.list.map((list) => (
            <div className="list-holder" key={this.getKey()}>
              <h4>
                {list.title}
              </h4>
              <ul className={section.isNumbered ? 'num-list' : ''}>
                {
                  list.isLinks
                    ? list.items.map((item) => (
                      <li key={this.getKey()}>
                        <a href={item}>
                          {item}
                        </a>
                      </li>
                    ))
                    : list.items.map((item) => (
                      <li key={this.getKey()}>
                        {item}
                      </li>
                    ))
                }
              </ul>
            </div>
          ))
        }
        {
          (typeof section.afterList !== 'undefined' ? (
            section.afterList.map((paragraph) => (
              <p key={this.getKey()}>
                <Interweave content={paragraph} />
              </p>
            ))
          ) : '')
        }
      </div>
    ));

    return subSection;
  }

  createBlogElement(data) {
    return (
      <div className="blog-wrapper">
        <h1>
          {data.main.title}
        </h1>
        <div className="blog-content">
          <div className="description">
            {data.main.description.map((paragraph) => (
              <p key={this.getKey()}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="content">
            {this.createContentFromData(data.subSections)}
          </div>
        </div>
        <button
          type="button"
          className="read-more"
          onClick={() => this.showBlogContent()}
        >
          Read More
        </button>
      </div>
    );
  }

  createActionBtns() {
    return (
      <div className="arrow-container">
        <button
          type="button"
          className="left-arrow arrow"
          onClick={() => this.changeBlogPost('left')}
        >
          <span className="icon">
            <ReactSVG src="/svg/arrow-left.svg" />
          </span>
        </button>
        <button
          type="button"
          className="right-arrow arrow"
          onClick={() => this.changeBlogPost('right')}
        >
          <span className="icon">
            <ReactSVG src="/svg/arrow-right.svg" />
          </span>
        </button>
        <button
          type="button"
          className="close"
          onClick={() => this.hideBlogContent()}
        >
          <span className="icon">
            <ReactSVG src="/svg/close.svg" />
          </span>
        </button>
      </div>
    );
  }

  createContentHolder(data) {
    return (
      <div className="content-holder">
        <div className="blog-image min" style={{ backgroundImage: `url(${data.main.image})` }} />
        <div className="blog-holder">
          {this.createBlogElement(data)}
          {this.createActionBtns()}
        </div>
      </div>
    );
  }

  render() {
    const { activeID } = this.state;

    return (
      <div className="blog-layout-container">
        {this.createContentHolder(this.blogData[activeID])}
      </div>
    );
  }
}
