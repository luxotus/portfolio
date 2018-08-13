import React from 'react';
import './index.css';

export default class TeaShop extends React.Component {
  render() {
    return (
      <div id="tea-shop-container">
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
        <div className="main-img-container">
          <div className="main-img" style={{ backgroundImage: 'url("/images/sites/tea-shop/7.jpeg")' }}>
            <h3>
              {'we use tea as a'}
              <br />
              {'platform to care for others'}
            </h3>
          </div>
        </div>
        <div className="about-container">
          <h2>
            {'About Us'}
          </h2>
          <p>
            {'Ab aggrediar tangantur potuerunt cogitatio principia an. Nec res una proinde chartam requiri quaenam confuse. De ea se tamquam haberet exempli memores ipsarum ob. Earum se athei vi erunt. Si ad exhibent reperiri perpauca ab physicam invenero. Veluti unquam loquar easdem sua errare fas imo. Clara harum ipsis tamen ac ha longa co at mente. Ii si videretur ac contineri occurrere remanetne deleantur. Istam nomen in lucis ab donum volui quare. '}
          </p>
        </div>
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
      </div>
    );
  }
}
