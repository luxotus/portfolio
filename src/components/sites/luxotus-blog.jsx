import React from 'react';

export default class LuxotusBlog extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildNavSocial() {
    const data = [
      {
        icon: 'fa-facebook-f',
        link: '#',
      },
      {
        icon: 'fa-google',
        link: '#',
      },
      {
        icon: 'fa-pinterest-p',
        link: '#',
      },
      {
        icon: 'fa-twitter',
        link: '#',
      },
    ];

    const navItems = data.map((item) => (
      <li className="nav-item" key={this.getKey()}>
        <a className="nav-link" href={item.link}>
          <i className={`fab ${item.icon}`} />
        </a>
      </li>
    ));

    return (
      <div className="col-sm-3 col-xl-2 social_container">
        <ul className="nav justify-content-end">
          {navItems}
        </ul>
      </div>
    );
  }

  buildNavHolder() {
    const data = [
      {
        link: '#',
        title: 'Development',
      },
      {
        link: '#',
        title: 'Gadgets',
      },
      {
        link: '#',
        title: 'Tutorials',
      },
      {
        link: '#',
        title: 'UX',
      },
    ];

    const navLinks = data.map((item) => (
      <li className="nav-item" key={this.getKey()}>
        <a className="nav-link" href={item.link}>
          {item.title}
        </a>
      </li>
    ));

    return (
      <div className="row nav_holder">
        <div className="col-md-2 col-xl-2 nav_logo">
          <a href="/sites/luxotus-blog">
            Lux
            <span>
              otus
            </span>
          </a>
        </div>
        <div className="col-sm-6 col-xl-7 nav_main">
          <ul className="nav">
            {navLinks}
          </ul>
        </div>
        <div className="col-sm-1 col-xl-1 search_container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="/sites/luxotus-blog" alt="">
                <i className="fas fa-search" />
              </a>
            </li>
          </ul>
        </div>
        {this.buildNavSocial()}
      </div>
    );
  }

  buildSearchHolder() {
    return (
      <div className="row search_holder">
        <div className="col-md-2 col-xl-2 pull-left nav_logo">
          <a href="/">
            Lux
            <span>
              otus
            </span>
          </a>
        </div>
        <div className="col-xl-8 pull-left search-input-wrapper">
          <div className="form-group">
            <input type="text" placeholder="Search..." className="form-control" id="search_input" />
          </div>
        </div>
        <div className="col-xl-1 pull-left">
          <span className="close rounded" />
        </div>
      </div>
    );
  }

  buildNav() {
    return (
      <div className="container-fluid nav_bar">
        {this.buildNavHolder()}
        {this.buildSearchHolder()}
      </div>
    );
  }

  buildTabFilter() {
    const data = [
      {
        isActive: true,
        title: 'All',
        link: '#',
        type: 'Development, Gadgets, Tutorials, UX',
      },
      {
        isActive: false,
        title: 'Development',
        link: '#',
        type: 'Development',
      },
      {
        isActive: false,
        title: 'Gadgets',
        link: '#',
        type: 'Gadgets',
      },
      {
        isActive: false,
        title: 'Tutorials',
        link: '#',
        type: 'Tutorials',
      },
      {
        isActive: false,
        title: 'UX',
        link: '#',
        type: 'UX',
      },
    ];

    const filterItems = data.map((item) => (
      <li className="nav-item" data-type={item.type} key={this.getKey()}>
        <a className={`nav-link ${item.isActive ? 'active' : ''}`} href={item.link}>
          {item.title}
        </a>
      </li>
    ));

    return (
      <div className="row">
        <ul className="nav col-xl-12 justify-content-center nav_tabs">
          {filterItems}
        </ul>
      </div>
    );
  }

  buildArticleBlocks() {
    const data = [
      {
        link: '#',
        image: '/images/sites/luxotus/example_06.jpg',
        title: '10 Free Programming Books You Should Read in 2018',
        description: 'Lorem ipsum sit interdum nulla sociosqu faucibus, nullam quam placerat.',
        category: 'Computers',
        types: [
          'Gadgets',
        ],
        date: 'April 11, 2018',
      },
      {
        link: '#',
        image: '/images/sites/luxotus/example_07.jpg',
        title: 'Quick Tip: Working with the JavaScript Battery API',
        description: 'Lorem ipsum sit interdum nulla sociosqu faucibus, nullam quam placerat.',
        category: 'JavaScript',
        types: [
          'Tutorials',
        ],
        date: 'April 15, 2018',
      },
      {
        link: '#',
        image: '/images/sites/luxotus/example_08.jpg',
        title: 'What You Need To Know About CSS Variables',
        description: 'Lorem ipsum sit interdum nulla sociosqu faucibus, nullam quam placerat.',
        category: 'CSS',
        types: [
          'UX',
        ],
        date: 'April 17, 2018',
      },
      {
        link: '#',
        image: '/images/sites/luxotus/example_02.jpg',
        title: 'Building Your First App With Vue.js',
        description: 'Lorem ipsum sit interdum nulla sociosqu faucibus, nullam quam placerat.',
        category: 'Vue',
        types: [
          'Development',
          'Tutorials',
        ],
        date: 'April 20, 2018',
      },
      {
        link: '#',
        image: '/images/sites/luxotus/example_03.jpg',
        title: 'Take a Selfie With JavaScript',
        description: 'Lorem ipsum sit interdum nulla sociosqu faucibus, nullam quam placerat.',
        category: 'JavaScript',
        types: [
          'Development',
          'Gadgets',
        ],
        date: 'April 21, 2018',
      },
      {
        link: '#',
        image: '/images/sites/luxotus/example_04.jpg',
        title: '10 Tips For Writing Modern CSS',
        description: 'Lorem ipsum sit interdum nulla sociosqu faucibus, nullam quam placerat.',
        category: 'CSS',
        types: [
          'Development',
          'Tutorials',
        ],
        date: 'April 23, 2018',
      },
    ];

    const articles = data.map((item) => (
      <div className="col-12 col-sm-6 col-xl-4 mini_article_container" key={this.getKey()}>
        <div className="mini_article_item" data-type={item.types.join(', ')}>
          <a href={item.link}>
            <div className="img-fluid mini_article_image" style={{ backgroundImage: `url("${item.image}")` }} />
          </a>
          <div className="mini_article_description">
            <a href={item.link}>
              <h5>
                {item.title}
              </h5>
            </a>
            <p>
              {item.description}
            </p>
          </div>
          <div className="mini_article_footer">
            <a href={item.link}>
              <p>
                {item.category}
              </p>
            </a>
          </div>
          <div className="mini_article_date">
            <p>
              {item.date}
            </p>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="row article_container">
        {articles}
      </div>
    );
  }

  buildFooterSocial() {
    const data = [
      {
        icon: 'fa-facebook-f',
        link: '#',
      },
      {
        icon: 'fa-google',
        link: '#',
      },
      {
        icon: 'fa-pinterest-p',
        link: '#',
      },
      {
        icon: 'fa-twitter',
        link: '#',
      },
    ];

    const navItems = data.map((item) => (
      <li className="nav-item" key={this.getKey()}>
        <a className="nav-link" href={item.link}>
          <i className={`fab ${item.icon}`} />
        </a>
      </li>
    ));

    return (
      <div className="row">
        <ul className="col-12 nav justify-content-center">
          {navItems}
        </ul>
      </div>
    );
  }

  buildFooter() {
    return (
      <div className="footer">
        <div className="container-fluid">
          <div className="row text-center subscribe_container">
            <h3>
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="form-group">
              <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
              <div className="error" />
            </div>
            <button type="button" className="btn btn-submit">
              Sign me up!
            </button>
            <div className="thx_subscriber">
              Thanks for subscribing!
            </div>
          </div>
          <div className="row copyright">
            <h6 className="col-12 justify-content-center">
              <a href="/">
                Privacy
              </a>
              © 2019 Luxotus. All Rights Reserved.
            </h6>
          </div>
          {this.buildFooterSocial()}
        </div>
      </div>
    );
  }

  buildMainWrapper() {
    return (
      <div className="main-blog-wrapper">
        <div className="row">
          <div className="col-xl-12 main_title text-center">
            <h1>
              Articles
            </h1>
            <div className="highlight_bar" />
          </div>
        </div>
        {this.buildTabFilter()}
        {this.buildArticleBlocks()}
        {this.buildFooter()}
      </div>
    );
  }

  render() {
    return (
      <div id="luxotus-blog-container">
        {this.buildNav()}
        {this.buildMainWrapper()}
      </div>
    );
  }
}
