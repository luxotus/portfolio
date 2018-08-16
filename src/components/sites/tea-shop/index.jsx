import React from 'react';
import './index.css';

export default class TeaShop extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildNav() {
    const links = [
      {
        href: '/sites/tea-shop/home',
        title: 'Home',
      },
      {
        href: '/sites/tea-shop/menu',
        title: 'Menu',
      },
      {
        href: '/sites/tea-shop/gallery',
        title: 'Gallery',
      },
      {
        href: '/sites/tea-shop/contact',
        title: 'Contact',
      },
    ];
    const nav = links.map(link => (
      <li key={this.getKey()}>
        <a href={link.href}>
          {link.title}
        </a>
      </li>
    ));

    return (
      <header>
        <h2>
          {'Tea shop'}
        </h2>
        <ul>
          {nav}
        </ul>
      </header>
    );
  }

  buildMainImage() {
    return (
      <div className="main-img-container">
        <div className="main-img" style={{ backgroundImage: 'url("/images/sites/tea-shop/7.jpeg")' }}>
          <h3>
            {'we use tea as a'}
            <br />
            {'platform to care for others'}
          </h3>
        </div>
      </div>
    );
  }

  buildAbout() {
    return (
      <div className="about-container">
        <h2>
          {'About Us'}
        </h2>
        <p>
          {'Ab aggrediar tangantur potuerunt cogitatio principia an. Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt. Si ad exhibent reperiri perpauca ab physicam invenero. Veluti unquam loquar easdem sua errare fas imo. Clara harum ipsis tamen ac ha longa co at mente. Ii si videretur ac contineri occurrere remanetne deleantur. Istam nomen in lucis ab donum volui quare. '}
        </p>
      </div>
    );
  }

  buildDetails() {
    const data = [
      {
        image: '/images/sites/tea-shop/3.jpeg',
        title: 'Source',
        description: 'Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt.',
      },
      {
        image: '/images/sites/tea-shop/6.jpeg',
        title: 'Ingredients',
        description: 'Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt.',
      },
      {
        image: '/images/sites/tea-shop/8.jpeg',
        title: 'Taste',
        description: 'Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt.',
      },
    ];

    const details = data.map(item => (
      <div className="detail-block" key={this.getKey()}>
        <div className="detail-block-wrapper">
          <div className="detail-img" style={{ backgroundImage: `url("${item.image}")` }} />
          <h4>
            {item.title}
          </h4>
          <p>
            {item.description}
          </p>
        </div>
      </div>
    ));

    return (
      <div className="detail-holder">
        {details}
      </div>
    );
  }

  buildMenu() {
    const menu = {
      Focus:
      {
        data: [
          {
            name: 'Earl Grey',
            location: 'Red Rooster 2016 Okanagan Valley, BC',
            price: '3.75',
          },
          {
            name: 'Black Tea',
            location: 'Red Rooster 2818 Okanagan Valley, BC',
            price: '3.75',
          },
        ],
        column: {},
      },
      Cozy:
      {
        data: [
          {
            name: 'Jasmine',
            location: 'Red Rooster 1987 Okanagan Valley, BC',
            price: '3.75',
          },
          {
            name: 'Lavender',
            location: 'Red Rooster 2007 Okanagan Valley, BC',
            price: '3.75',
          },
        ],
        column: {},
      },
    };

    Object.keys(menu).forEach((key) => {
      menu[key].column.left = menu[key].data.filter((element, index) => {
        const even = (index % 2 === 0);
        return even;
      }).map(row => (
        <div className="row" key={this.getKey()}>
          <div className="text-sec">
            <h4>
              {row.name}
            </h4>
            <p>
              {row.location}
            </p>
          </div>
          <div className="price-sec">
            {row.price}
          </div>
        </div>
      ));

      menu[key].column.right = menu[key].data.filter((element, index) => {
        const even = (index % 2 === 1);
        return even;
      }).map(row => (
        <div className="row" key={this.getKey()}>
          <div className="text-sec">
            <h4>
              {row.name}
            </h4>
            <p>
              {row.location}
            </p>
          </div>
          <div className="price-sec">
            {row.price}
          </div>
        </div>
      ));
    });

    const sections = Object.keys(menu).map(key => (
      <div key={this.getKey()}>
        <h3>
          {key}
        </h3>
        <div className="menu-table">
          <div className="column left">
            {menu[key].column.left}
          </div>
          <div className="column right">
            {menu[key].column.right}
          </div>
        </div>
      </div>
    ));

    return (
      <div className="tea-menu-container">
        <h2>
          {'Our Menu'}
        </h2>
        {sections}
      </div>
    );
  }

  buildGallery() {
    const images = [
      '/images/sites/tea-shop/2.jpeg',
      '/images/sites/tea-shop/8.jpeg',
      '/images/sites/tea-shop/9.jpeg',
      '/images/sites/tea-shop/10.jpeg',
    ];
    const galleryItems = images.map(item => (
      <div className="gallery-itm" key={this.getKey()} style={{ backgroundImage: `url("${item}")` }} />
    ));

    return (
      <div className="gallery-container">
        {galleryItems}
      </div>
    );
  }

  buildFooter() {
    return (
      <div className="footer">
        <div className="store-hour-container">
          <h4>
            {'Open Hours'}
          </h4>
          <span>
            {'M-F 9-9pm'}
          </span>
          <span>
            {'Sat 12-10pm'}
          </span>
          <span>
            {'Sun 12-6pm'}
          </span>
        </div>
        <div className="contact-us-container">
          <h4>
            {'Contact Us'}
          </h4>
          <a href="mailto:hello@teashop.com">
            {'hello@teashop.com'}
          </a>
          <span>
            {'West Hills Drive 234'}
          </span>
          <span>
            {'Knoxville, TN'}
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="tea-shop-container">
        {this.buildNav()}
        {this.buildMainImage()}
        {this.buildAbout()}
        {this.buildDetails()}
        {this.buildMenu()}
        {this.buildGallery()}
        {this.buildFooter()}
      </div>
    );
  }
}
