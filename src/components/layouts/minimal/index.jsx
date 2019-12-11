import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home-page/footer';

export default class Minimal extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  content() {
    const { data } = this.props;
    return data.map((item) => (
      <div
        key={this.getKey()}
        className="content-wrapper"
        id={`content-wrapper-${item.id}`}
      >
        <section>
          <Link to={item.link}>
            <h2>
              {item.title}
            </h2>
            <img src={item.image} alt={item.title} />
          </Link>
        </section>
      </div>
    ));
  }

  render() {
    return (
      <div id="minimal-layout-container">
        <div className="content-holder">
          {this.content()}
          <Footer />
        </div>
      </div>
    );
  }
}
