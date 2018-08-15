import React from 'react';
import './index.css';

export default class TeaShop extends React.Component {

  buildNav() {
    return (
      <header>
        <h2>
          {'Tea shop'}
        </h2>
        <ul>
          <li>
            <a href="/sites/tea-shop/home">
              {'Home'}
            </a>
          </li>
          <li>
            <a href="/sites/tea-shop/menu">
              {'Menu'}
            </a>
          </li>
          <li>
            <a href="/sites/tea-shop/gallery">
              {'Gallery'}
            </a>
          </li>
          <li>
            <a href="/sites/tea-shop/contact">
              {'Contact'}
            </a>
          </li>
        </ul>
      </header>
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
    return (
      <div className="detail-holder">
        <div className="detail-block">
          <div className="detail-block-wrapper">
            <div className="detail-img" style={{ backgroundImage: 'url("/images/sites/tea-shop/3.jpeg")' }} />
            <h4>
              {'Source'}
            </h4>
            <p>
              {'Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt.'}
            </p>
          </div>
        </div>
        <div className="detail-block">
          <div className="detail-block-wrapper">
            <div className="detail-img" style={{ backgroundImage: 'url("/images/sites/tea-shop/6.jpeg")' }} />
            <h4>
              {'Ingredients'}
            </h4>
            <p>
              {'Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt.'}
            </p>
          </div>
        </div>
        <div className="detail-block">
          <div className="detail-block-wrapper">
            <div className="detail-img" style={{ backgroundImage: 'url("/images/sites/tea-shop/8.jpeg")' }} />
            <h4>
              {'Taste'}
            </h4>
            <p>
              {'Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  buildMenu() {
    const data = {
      focus: [
        {
          name: 'Earl Grey',
          location: 'Red Rooster 2016 Okanagan Valley, BC',
          price: '3.75',
        },
        {
          name: 'Black Tea',
          location: 'Red Rooster 2016 Okanagan Valley, BC',
          price: '3.75',
        },
      ],
    };
    const rows = {
      focus: data,
    };
    return (
      <div className="tea-menu-container">
        <h2>
          {'Our Menu'}
        </h2>
        <h3>
          {'Focus'}
        </h3>
        <div className="menu-table">
          <div className="column left">
            <div className="row">
              <div className="text-sec">
                <h4>
                  {'Earl Grey'}
                </h4>
                <p>
                  {'Red Rooster 2016 Okanagan Valley, BC'}
                </p>
              </div>
              <div className="price-sec">
                {'3.75'}
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="row">
              <div className="text-sec">
                <h4>
                  {'Black Tea'}
                </h4>
                <p>
                  {'Red Rooster 2016 Okanagan Valley, BC'}
                </p>
              </div>
              <div className="price-sec">
                {'3.75'}
              </div>
            </div>
          </div>
        </div>
        <h3>
          {'Cozy'}
        </h3>
        <div className="menu-table">
          <div className="column left">
            <div className="row">
              <div className="text-sec">
                <h4>
                  {'Jasmine'}
                </h4>
                <p>
                  {'Red Rooster 2016 Okanagan Valley, BC'}
                </p>
              </div>
              <div className="price-sec">
                {'3.75'}
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="row">
              <div className="text-sec">
                <h4>
                  {'Lavender'}
                </h4>
                <p>
                  {'Red Rooster 2016 Okanagan Valley, BC'}
                </p>
              </div>
              <div className="price-sec">
                {'3.75'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="tea-shop-container">
        {this.buildNav()}
        <div className="main-img-container">
          <div className="main-img" style={{ backgroundImage: 'url("/images/sites/tea-shop/7.jpeg")' }}>
            <h3>
              {'we use tea as a'}
              <br />
              {'platform to care for others'}
            </h3>
          </div>
        </div>
        {this.buildAbout()}
        {this.buildDetails()}
        {this.buildMenu()}
        <div className="gallery-container">
          <div className="gallery-itm" style={{ backgroundImage: 'url("/images/sites/tea-shop/2.jpeg")' }} />
          <div className="gallery-itm" style={{ backgroundImage: 'url("/images/sites/tea-shop/8.jpeg")' }} />
          <div className="gallery-itm" style={{ backgroundImage: 'url("/images/sites/tea-shop/9.jpeg")' }} />
          <div className="gallery-itm" style={{ backgroundImage: 'url("/images/sites/tea-shop/10.jpeg")' }} />
        </div>
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
      </div>
    );
  }
}
