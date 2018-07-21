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

  calcStepRatios(valTo, valFrom, milSec) {
    return (Math.abs(valFrom - valTo) / milSec) / 4;
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
    const milSec = 10;
    const step = this.calcStepRatios(to, from, milSec);
    let currentVal = from;

    const timer = setInterval(() => {
      if (direction === 'right') {
        if ((currentVal - step) <= to) {
          clearInterval(timer);
          element.style[direction] = (isHiddenItm) ? '-100%' : '0%';
        }
        currentVal -= step;
      }

      if (direction === 'left') {
        if ((currentVal + step) >= to) {
          clearInterval(timer);
          element.style[direction] = (isHiddenItm) ? 'calc(-100% - 200px)' : '-100%';
        }
        currentVal += step;
      }

      if (isHiddenItm) {
        element.style[direction] = (currentVal === 0) ? '-100%' : `calc(-100% - ${currentVal}px)`;
      } else {
        element.style[direction] = `-${currentVal}%`;
      }
    }, milSec);
  }

  reSizeAnimation(fromEl, toEl, isIncreasing) {
    const elements = {
      to: {
        el: toEl,
        size: {
          height: parseInt(window.getComputedStyle(toEl).getPropertyValue('height'), 10),
          width: parseInt(window.getComputedStyle(toEl).getPropertyValue('width'), 10),
        },
      },
      from: {
        el: fromEl,
        size: {
          height: parseInt(window.getComputedStyle(fromEl).getPropertyValue('height'), 10),
          width: parseInt(window.getComputedStyle(fromEl).getPropertyValue('width'), 10),
        },
      },
    };
    const currentSize = {
      height: elements.from.size.height,
      width: elements.from.size.width,
    };
    const milSec = 10;
    const step = {
      height: this.calcStepRatios(elements.to.size.height, elements.from.size.height, milSec),
      width: this.calcStepRatios(elements.to.size.width, elements.from.size.width, milSec),
    };

    Object.entries(step).forEach(([key, value]) => {
      step[key] = isIncreasing ? value : -value;
    });

    const timerWidth = setInterval(() => {
      if ((isIncreasing && currentSize.width >= elements.to.size.width)
      || (!isIncreasing && currentSize.width <= elements.to.size.width)) {
        clearInterval(timerWidth);
        elements.from.el.style.width = `${elements.to.size.width}px`;
      } else {
        elements.from.el.style.width = `${currentSize.width}px`;
        currentSize.width += step.width;
      }
    }, milSec);

    const timerHeight = setInterval(() => {
      if ((isIncreasing && currentSize.height >= elements.to.size.height)
      || (!isIncreasing && currentSize.height <= elements.to.size.height)) {
        clearInterval(timerHeight);
        elements.from.el.style.height = `${elements.to.size.height}px`;
      } else {
        elements.from.el.style.height = `${currentSize.height}px`;
        currentSize.height += step.height;
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
      this.toFromAnimation(domSlides.rightHidden, 'right', 0, 100, true);
      this.reSizeAnimation(domSlides.rightHidden, domSlides.rightVisible, true);

      // right side item to middle item
      this.toFromAnimation(domSlides.rightVisible, 'right', 0, 100, false);
      this.reSizeAnimation(domSlides.rightVisible, domSlides.middle, true);

      // middle item to left side item
      this.toFromAnimation(domSlides.middle, 'left', 100, 0, false);
      this.reSizeAnimation(domSlides.middle, domSlides.leftVisible, false);

      // left side item to left hidden item
      this.toFromAnimation(domSlides.leftVisible, 'left', 100, 0, true);
      this.reSizeAnimation(domSlides.leftVisible, domSlides.leftHidden, true);

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
