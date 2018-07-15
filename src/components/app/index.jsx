import React from 'react';
import Sites from '../home-page/sites';
import Lab from '../home-page/lab';
import OpenSourceProjects from '../home-page/open-source-projects';
import Blog from '../home-page/blog';
import Footer from '../home-page/footer';
import LandingScreen from '../home-page/landing-screen';
import Header from '../header';
import MainRouter from '../main-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaysize: (window.location.pathname === '/') ? 'part' : 'whole',
      isMenuOpen: '',
      menuBtnId: 'menu-btn-container',
    };
    this.updateMenuState = this.updateMenuState.bind(this);
    // this.updateScrollPosition = this.updateScrollPosition.bind(this);
  }

  componentDidMount() {
    const parentContainers = [
      document.getElementById('landing-page-container'),
      document.getElementById('main-container'),
    ];

    if (window.location.pathname !== '/') {
      this.inverseVisible(parentContainers[0], parentContainers[1]);
    }
  }

  inverseVisible(elToBeHidden, elToBeShown) {
    const elements = [
      elToBeHidden,
      elToBeShown,
    ];

    elements[0].style.display = 'none';
    elements[1].style.display = 'block';
  }

  unfade(el) {
    const element = el;
    const maxVal = 1;
    const OpStep = 0.1;
    const milSec = 50;
    let op = parseFloat(window.getComputedStyle(element, null).getPropertyValue('opacity'));
    op = (op === 0) ? OpStep : op;
    element.style.display = 'block';
    this.forceUpdate();

    const timer = setInterval(() => {
      if (op >= maxVal) {
        clearInterval(timer);
        element.style.opacity = maxVal;
        element.style.filter = `alpha(opacity=${maxVal})`;
      } else {
        element.style.opacity = op;
        element.style.filter = `alpha(opacity=${op * 100})`;
        op += op * OpStep;
      }
    }, milSec);
  }

  fadingEffect(elHide, elShow) {
    const element = elHide;
    const minVal = 0;
    const OpStep = 0.1;
    const milSec = 50;
    let op = parseFloat(window.getComputedStyle(element, null).getPropertyValue('opacity'));
    op = (op === 0) ? OpStep : op;

    const timer = setInterval(() => {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
        element.style.opacity = minVal;
        element.style.filter = `alpha(opacity=${minVal})`;
        this.unfade(elShow);
      } else {
        element.style.opacity = op;
        element.style.filter = `alpha(opacity=${op * 100})`;
        op -= op * OpStep;
      }
    }, milSec);
  }

  fadeComponents(size) {
    const parentContainers = [
      document.getElementById('landing-page-container'),
      document.getElementById('main-container'),
    ];

    if (this.state.isMenuOpen === 'open-menu') {
      document.getElementById(this.state.menuBtnId).click();
    }

    if (size === 'whole') {
      this.fadingEffect(parentContainers[0], parentContainers[1]);
    } else if (size === 'part') {
      this.fadingEffect(parentContainers[1], parentContainers[0]);
    }
  }

  updateMenuState(menuState) {
    this.setState({ isMenuOpen: menuState });
    // this.updateScrollPosition();
  }

  // updateScrollPosition() {
  //   this.setState({ scrollYPos: window.scrollY });
  // }

  changeDisplaySize(selectedPath) {
    // console.log(`Y: ${this.props.scrollYPos}`);
    // window.scrollTo(0, this.props.scrollYPos);
    const updatedSize = (selectedPath === '/') ? 'part' : 'whole';
    this.setState({
      displaysize: updatedSize,
    });
    this.fadeComponents(updatedSize);
  }

  render() {
    return (
      <div id="app-container">
        <Header
          menuBtnId={this.state.menuBtnId}
          isMenuOpen={this.state.isMenuOpen}
          displaySize={this.state.displaysize}
          updateMenuState={this.updateMenuState}
          onClick={selectedPath => this.changeDisplaySize(selectedPath)}
        />
        <div id="landing-page-container">
          <LandingScreen />
          <Sites />
          <Lab />
          <OpenSourceProjects />
          <Blog />
          <Footer />
        </div>
        <MainRouter displaySize={this.state.displaysize} />
      </div>
    );
  }
}
