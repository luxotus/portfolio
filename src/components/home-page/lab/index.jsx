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
        rightVisible: 3,
        rightHidden: 4,
      },
      direction: '',
      isCarouselAnimating: false,
    };
    this.dataForSlides = [
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
    ];
    this.updateSlides = this.updateSlides.bind(this);
    this.carouselAnimation = this.carouselAnimation.bind(this);
  }

  /**
   *
   * @param {obj} el
   * @param {string} direction
   * @param {int} to
   * @param {int} from
   * @param {boolean} isHiddenItm
   */
  toFromAnimation(el, direction, to, from, isHiddenItm) {
    const element = el;
    const milSec = 25;
    const step = 1;
    let currentVal = from;

    const timer = setInterval(() => {
      if ((currentVal - step) <= to) {
        clearInterval(timer);
      }

      currentVal -= step;

      if (isHiddenItm) {
        element.style[direction] = (currentVal === 0) ? '-100%' : `calc(-100% - ${currentVal}px)`;
      } else {
        element.style[direction] = `calc(-${currentVal}%)`;
      }
    }, milSec);
  }

  carouselAnimation() {
    const domSlides = {
      leftHidden: document.querySelector('#carousel-container .hidden-item.left'),
      leftVisible: document.querySelector('#carousel-container .side-item.left'),
      middle: document.querySelector('#carousel-container .main-item'),
      middleDetails: document.querySelector('#middle-shown-item .carousel-middle-details'),
      rightVisible: document.querySelector('#carousel-container .side-item.right'),
      rightHidden: document.querySelector('#carousel-container .hidden-item.right'),
    };

    // Prevent animation from triggering when animation is active
    if (this.state.isCarouselAnimating) {
      return;
    }

    if (!this.state.isCarouselAnimating) {
      this.setState({ isCarouselAnimating: true });
    }

    // Left
    if (this.state.direction === 'left') {
      //
    }

    // Right
    if (this.state.direction === 'right') {
      // Fade out middle item text
      this.props.fadingEffect(domSlides.middleDetails, null, 20);

      // right hidden item to right side item

      // right side item to middle item
      this.toFromAnimation(domSlides.rightVisible, 'right', 0, 100, false);

      // middle item to left side item

      // left side item to left hidden item

      // left hidden item removed

      // create right hidden item
    }

    console.log(this.state);
  }

  updateSlides(direction) {
    const step = 1;
    const slides = {};
    const lastSlidePosition = this.dataForSlides.length - 1;

    if (direction === 'left') {
      Object.entries(this.state.slides).forEach(([key, value]) => {
        slides[key] = (value <= 0) ? lastSlidePosition : value - step;
      });
    }

    if (direction === 'right') {
      Object.entries(this.state.slides).forEach(([key, value]) => {
        slides[key] = (value === lastSlidePosition) ? 0 : value + step;
      });
    }

    this.setState({
      slides: slides,
      direction: direction,
    }, () => {
      // console.table(this.state.slides);
      this.carouselAnimation();
    });
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
            <div
              id="left-shown-item"
              className="floating-item side-item left"
              role="button"
              tabIndex="0"
              onClick={() => this.updateSlides('left')}
              onKeyDown={() => this.updateSlides('left')}
            />
            <div id="middle-shown-item" className="floating-item main-item">
              <div className="carousel-middle-details">
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
            <div
              id="right-shown-item"
              className="floating-item side-item right"
              role="button"
              tabIndex="0"
              onClick={() => this.updateSlides('right')}
              onKeyDown={() => this.updateSlides('right')}
            />
            <div id="right-hidden-item" className="floating-item hidden-item right" />
          </div>
        </div>
      </div>
    );
  }
}
