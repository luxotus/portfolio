import React from 'react';
import './index.css';
import Carousel from '../carousel';

export default class Lab extends React.Component {
  part() {
    return (
      <div id="lab-container">
        <header>
          <h1>
            <a href="/lab">
              {'Experimental Lab'}
            </a>
          </h1>
        </header>
        <Carousel />
      </div>
    );
  }

  whole() {
    return <div id="lab-screen" />;
  }

  displayElement(props) {
    const displaySize = props.displaySize;

    if (displaySize === 'part') {
      return this.part();
    }

    return this.whole();
  }

  render() {
    console.log(this.props);
    return (this.displayElement(this.props));
  }
}
