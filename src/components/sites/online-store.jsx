import React from 'react';
import { ReactSVG } from 'react-svg';

export default class OnlineStore extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  shuffleList(a) {
    let j;
    let x;
    let i;
    const arr = a;

    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return a;
  }

  buildRandomItems() {
    const products = [
      {
        imagePath: '/images/sites/online-store/9.png',
        company: 'Zhu',
        productName: 'Brown Bear',
      },
      {
        imagePath: '/images/sites/online-store/15.png',
        company: 'Nike',
        productName: 'Mr. Lion',
      },
      {
        imagePath: '/images/sites/online-store/21.png',
        company: 'Addias',
        productName: 'Cool Bear',
      },
      {
        imagePath: '/images/sites/online-store/17.png',
        company: 'Ralph Lauren',
        productName: 'Doggo',
      },
      {
        imagePath: '/images/sites/online-store/19.png',
        company: 'Samsung',
        productName: 'Fancy Smart Watch',
      },
      {
        imagePath: '/images/sites/online-store/18.png',
        company: 'Dripz',
        productName: 'Shiny Bucket',
      },
      {
        imagePath: '/images/sites/online-store/10.png',
        company: 'Indigo Labs',
        productName: 'Brown Paper Bag',
      },
      {
        imagePath: '/images/sites/online-store/20.png',
        company: 'YMCMB',
        productName: 'Poker Table',
      },
      {
        imagePath: '/images/sites/online-store/4.png',
        company: 'Loki',
        productName: 'Bedroom Set',
      },
      {
        imagePath: '/images/sites/online-store/5.png',
        company: 'Neptune',
        productName: 'Park Table',
      },
      {
        imagePath: '/images/sites/online-store/22.png',
        company: 'Halo',
        productName: 'Suitcase',
      },
      {
        imagePath: '/images/sites/online-store/2.png',
        company: 'Carpie',
        productName: 'Red Couch',
      },
      {
        imagePath: '/images/sites/online-store/12.png',
        company: 'Ozoark',
        productName: 'Standing Table',
      },
      {
        imagePath: '/images/sites/online-store/13.png',
        company: 'Channel',
        productName: 'Gas Mask',
      },
    ];

    products.forEach((item, index) => {
      products[index].cost = Math.floor(Math.random() * 400) + 10;
    });

    return this.shuffleList(products);
  }

  render() {
    return (
      <div className="online-store-wrapper">
        <header>
          <div className="logo-nav-wrapper">
            <div className="mobile-menu-wrapper">
              <button type="button" className="menu-btn">
                <span className="icon">
                  <ReactSVG src="/svg/menu.svg" />
                </span>
              </button>
              <ul className="mobile-menu">
                <li>
                  <a className="active" href="/">Home</a>
                </li>
                <li>
                  <a href="/">Latest</a>
                </li>
                <li>
                  <a href="/">Gadgets</a>
                </li>
                <li>
                  <a href="/">Furniture</a>
                </li>
                <li>
                  <a href="/">Fashion</a>
                </li>
                <li>
                  <a href="/">Outdoors</a>
                </li>
              </ul>
            </div>
            <div className="logo">
              <h3>LQ</h3>
            </div>
            <nav>
              <a className="active" href="/">Home</a>
              <a href="/">Latest</a>
              <a href="/">Gadgets</a>
              <a href="/">Furniture</a>
              <a href="/">Fashion</a>
              <a href="/">Outdoors</a>
            </nav>
          </div>
          <div className="side">
            <div className="search-wrapper">
              <input type="text" name="" />
              <button type="button" className="search-btn btn">
                <span className="icon">
                  <ReactSVG src="/svg/search.svg" />
                </span>
              </button>
            </div>
            <button type="button" className="shop-btn btn">
              <span className="icon">
                <ReactSVG src="/svg/shopping-cart.svg" />
              </span>
            </button>
          </div>
        </header>
        <div className="upper-content">
          <div className="large-item item">
            <div className="text-wrapper">
              <h1>Worlds best online store for new families.</h1>
              <p>High quality goods for low prices.</p>
              <a href="/">Check it Out</a>
            </div>
            <div className="image-wrapper">
              <img src="/images/sites/online-store/23.png" alt="" />
            </div>
          </div>
          <div className="small-item item">
            <div className="text-wrapper">
              <h1>Relaxing Chairs</h1>
              <p>Drift into the wonderful bliss of pure comfort.</p>
              <a href="/">Check it Out</a>
            </div>
            <div className="image-wrapper">
              <img src="/images/sites/online-store/24.png" alt="" />
            </div>
          </div>
          <div className="small-item reverse-order item">
            <div className="text-wrapper">
              <h1>Luxury Cribs</h1>
              <p>Your baby can sleep in style. While staying cozy.</p>
              <a href="/">Check it Out</a>
            </div>
            <div className="image-wrapper">
              <img src="/images/sites/online-store/25.png" alt="" />
            </div>
          </div>
        </div>
        <div className="lower-content">
          <div className="title">
            <h2>Best Deals of the day</h2>
          </div>
          <div className="preview-wrapper">
            {this.buildRandomItems().map((item) => (
              <div className="item" key={`store-item-${this.getKey()}`}>
                <div className="top-row">
                  <h5>{item.company}</h5>
                  <button type="button" className="btn star-btn">
                    <span className="icon">
                      <ReactSVG src="/svg/star-border.svg" />
                    </span>
                  </button>
                </div>
                <div className="middle-row">
                  <img src={item.imagePath} alt="" />
                </div>
                <div className="bottom-row">
                  <h5>{item.productName}</h5>
                  <h4>{`$${item.cost}`}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
