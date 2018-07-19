import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Lab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: {
        leftHidden: 0,
        leftVisible: 1,
        middle: 2,
        rightHidden: 3,
        rightVisible: 4,
      },
      data: [
        {
          id: 0,
          title: 'Garlic',
          link: '/lab/garlic',
        },
        {
          id: 1,
          title: 'Salt',
          link: '/lab/salt',
        },
        {
          id: 2,
          title: 'Rosemary',
          link: '/lab/rosemary',
        },
        {
          id: 3,
          title: 'Basil',
          link: '/lab/basil',
        },
        {
          id: 4,
          title: 'Olives',
          link: '/lab/olives',
        },
      ],
    };
    this.rotateSlides = this.rotateSlides.bind(this);
  }

  rotateSlides(direction) {
    const step = (direction === 'left') ? -1 : 1;
    const updateSlides = {};
    Object.entries(this.state.slides).forEach(([key, value]) => {
      if (value <= 0) {
        updateSlides[key] = this.state.data.length - 1;
      } else {
        updateSlides[key] = this.state.slides[key] + step;
      }
    });

    console.log(updateSlides);


    this.setState({ slides: updateSlides }, () => {
      console.table(this.state.slides);
    });

    console.log(`Direction: ${direction}`);
  }

  /**
   * Builds dots under the middle slide
   * @param {{title: string, isActive: boolean}} items
   */
  dots(items) {
    console.log(items);
  }

  render() {
    return (
      <div id="lab-container">
        <header>
          <h1>
            <Link
              to="/lab"
              onClick={() => this.props.onClick('/lab')}
              onKeyDown={() => this.props.onClick('/lab')}
            >
              {'Experimental Lab'}
            </Link>
          </h1>
        </header>
        <div id="carousel-container">
          <div className="carousel">
            <div id="left-hidden-item" className="floating-item hidden-item left" />
            <div id="left-shown-item" className="floating-item side-item left" />
            <div id="middle-shown-item" className="floating-item main-item">
              <div id="details">
                <h1>
                  {'Arkade'}
                  <br />
                  {'London'}
                </h1>
                <p>
                  {'- Audio Reactive Art'}
                </p>
              </div>
            </div>
            <div id="right-shown-item" className="floating-item side-item right" />
            <div id="right-hidden-item" className="floating-item hidden-item right" />
          </div>
          <div className="bread-crumbs">
            <div className="dot-section">
              <div
                className="dot"
                role="button"
                tabIndex="0"
                onClick={() => this.rotateSlides('left')}
                onKeyDown={() => this.rotateSlides('left')}
              />
              <div className="dot active" />
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
