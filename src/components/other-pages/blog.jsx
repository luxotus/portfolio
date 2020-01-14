import React from 'react';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    let loadPos = 0;

    this.blogData = [
      {
        main: {
          title: 'Minimal Viable Product',
          link: '/blog/minimal-viable-product',
          image: '/images/blog/minimum-viable-product.jpeg',
          description: 'When your starting a new product you should have a minimal viable product. Without it you could end up with a solution to a problem that no one uses or cares about. With it you can reduce your overall risk and increase your chances of launching a successful product.',
        },
        subSections: [
          {
            title: 'What is a minimum viable product?',
            paragraphs: [
              'The most commonly accepted definition comes from the book Lean Startup. Eric Ries defines it as “a version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort”.',
              'Early adopters are the primary target customers for a minimum viable product and validated learning is the feedback from those customers. Keep in mind that feedback can come in many different forms.',
            ],
            isNumbered: false,
            list: [],
          },
          {
            title: 'Why should I have a minimum viable product?',
            paragraphs: [
              'Creating a minimum viable product will save you time and money and overall reduce the risk of creating an unprofitable product. Without it, development will likely fail to understand it’s customers. You could end up with a product that does everything under the sun, but if no one buys it then that time and money was wasted. ',
              'Having a minimum viable product will allow you to get valuable feedback from potential customers. Revealing how early adopters are using your product. This might reveal flaws in your original assumption for why people would use your product. When you can see the flaws reveled by your minimum viable product you can improve on it, creating a better product for your customers.',
            ],
            isNumbered: false,
            list: [],
          },
          {
            title: 'How do I figure out my minimum viable product?',
            paragraphs: [
              'Theirs not a really simple straight froward way of figuring out your minimum viable product. But fear not, I can provide you with a general guideline for finding it.',
            ],
            isNumbered: true,
            list: [
              {
                title: '',
                isLinks: false,
                items: [
                  'Figure out what is the main problem your trying to solve. It’s important to keep this problem as simple as possible, and easy for others to understand. ',
                  'After identifying the problem its time to create a solution. It might help to have a list a solution and using your best guess to choose one. Keep in mind this solution is just an assumption and will need to be tested.',
                  'Come up with a description of your ideal customer. This is a good idea in business in general. Being able to visualize your ideal customer will make it easier to build your minimum viable product. Identifying the core features they would likely use will help reduce development time.',
                  'Determine what is the fastest way to get feedback about your product solution. This could be a video of how your product works like what Dropbox did to test their solution. Since they knew after research, that building the product would require a lot of resources. Or you could build the product with just its core basic features. ',
                  'Create your minimum viable product and get early adopters to test it out. This could be bring some people into the office and watching how they interact with the product. Or you can track user behaviors in your product. The latter is generally applicable to most software products.',
                  'Learn from your users. This might be actually talking to some of your customers, or looking at metrics. An example, say your product is a site. You could see where users are spending most of their time, common click patterns, or pages with the highest drop off rate. ',
                  'Taking what you learned and improving on it and retest it again and again. You want to do this till you get an acceptable growth rate. Ideally these improvement will be smaller as more users are regularly using your product. If your growth rate starts to slow down or fizzle out you may need to consider pivoting, which is beyond the scope of this post.',
                ],
              },
            ],
          },
          {
            title: 'Final Thoughts',
            paragraphs: [
              'Understanding how the market reacts to your product is at the heart of the minimal viable product process. Guiding development to produce a solution to a problem shared by others. Testing your product will help reduce some of the risk and increase your chances of producing profitable business.',
            ],
            isNumbered: false,
            list: [],
            images: [],
          },
        ],
      },
      {
        main: {
          title: 'Keeping up with the latest in your Dev Community',
          link: '/blog/keeping-up-with-dev-community',
          image: '/images/blog/keeping-up-with-the-latest.jpeg',
          description: 'Keeping up with the latest in your development community will help you grow as a developer. From finding better employment opportunities to gaining insight into some of your common problems that others in the community have solved.',
        },
        subSections: [
          {
            title: 'Why should I keep up with the latest?',
            paragraphs: [
              'Keeping up the latest in your development community will help your grow as a developer. Without a community we become ridged on how we do things. Keeping up with the latest will expose you to the current best practice which are continually evolving. Here’s a list of some of the benefits. ',
            ],
            isNumbered: false,
            list: [
              {
                title: '',
                isLinks: false,
                items: [
                  'Finding better employment opportunities',
                  'Increasing your base salary',
                  'Increase your chance of a promotion',
                  'Finding help on future project',
                  'Write better code that incorporates current best practices',
                  'Insight into common problems that you come across that others in the dev community have solved',
                ],
              },
            ],
          },
          {
            title: 'Where can I find my dev community?',
            paragraphs: [
              'I’ll give you a list of some sites and people to follow but this may change over time. Best thing you can do is to find contributors to your favorite open source projects and follow them. Or do some digging and find some of biggest names in your dev community and follow them on social media. ',
              'Also find blogs that specialize in your area of development and pick articles to read that spark your interest. If you struggle with finding time then try podcast. You can listen to experts in your dev community talk about the latest trends and topics. Best part of podcast, is that you can listen while your on your way to work, working out, cleaning or eating.',
            ],
            isNumbered: false,
            list: [
              {
                title: 'Twitter',
                isLinks: true,
                items: [
                  'https://twitter.com/wesbos',
                  'https://twitter.com/addyosmani',
                  'https://twitter.com/youyuxi',
                  'https://twitter.com/dan_abramov ',
                ],
              },
              {
                title: 'Blogs',
                isLinks: true,
                items: [
                  'https://www.smashingmagazine.com/',
                  'https://scotch.io/',
                  'https://www.sitepoint.com/',
                ],
              },
              {
                title: 'Podcast',
                isLinks: true,
                items: [
                  'https://syntax.fm/',
                  'http://www.fullstackradio.com/',
                  'https://changelog.com/podcast ',
                ],
              },
              {
                title: 'Reddit',
                isLinks: true,
                items: [
                  'https://www.reddit.com/r/programming/ ',
                  'https://www.reddit.com/r/Frontend/ ',
                  'hhttps://www.reddit.com/r/reactjs/',
                  'https://www.reddit.com/r/PHP/',
                ],
              },
            ],
          },
        ],
      },
    ];

    this.blogData.forEach((item, index) => {
      if (item.main.link === window.location.pathname) {
        loadPos = index;
      }
    });

    this.state = {
      activeID: loadPos,
    };

    this.updateCurrentBlog = this.updateCurrentBlog.bind(this);
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  scaleImage(shouldIncrement) {
    const element = document.querySelector('#maximum-layout-container .blog-image');
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
    document.querySelector('#maximum-layout-container button.read-more').style.display = 'none';
    document.querySelector('#maximum-layout-container .blog-content .content').style.display = 'block';
    document.querySelector('#maximum-layout-container .arrow-container').classList.add('closed');
    this.scaleImage(true);
  }

  hideBlogContent() {
    document.querySelector('#maximum-layout-container button.read-more').style.display = 'block';
    document.querySelector('#maximum-layout-container .blog-content .content').style.display = 'none';
    document.querySelector('#maximum-layout-container .arrow-container').classList.remove('closed');
    this.scaleImage(false);
  }

  blogPostAnimation(transform) {
    const elements = {
      image: document.querySelector('#maximum-layout-container .blog-image'),
      wrapper: document.querySelector('#maximum-layout-container .blog-wrapper'),
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
      image: document.querySelector('#maximum-layout-container .blog-image'),
      wrapper: document.querySelector('#maximum-layout-container .blog-wrapper'),
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
        <h3>
          {section.title}
        </h3>
        {
          section.paragraphs.map((paragraph) => (
            <p key={this.getKey()}>
              {paragraph}
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
            {data.main.description}
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
          <div />
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
          <div />
        </button>
        <button
          type="button"
          className="right-arrow arrow"
          onClick={() => this.changeBlogPost('right')}
        >
          <div />
        </button>
        <button
          type="button"
          className="close"
          onClick={() => this.hideBlogContent()}
        >
          <div className="x" />
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
      <div id="maximum-layout-container">
        {this.createContentHolder(this.blogData[activeID])}
      </div>
    );
  }
}
