import React from 'react';
import Sites from '../sites';
import Lab from '../lab';
import OpenSourceProjects from '../open-source-projects';
import Blog from '../blog';
import Footer from '../footer';
import LandingScreen from '../landing-screen';
import Header from '../header';
import Main from '../main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaysize: (window.location.pathname === '/') ? 'part' : 'whole',
      isMenuOpen: '',
      menuBtnId: 'menu-btn-container',
    };
    this.updateMenuState = this.updateMenuState.bind(this);
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
    const elements = [
      document.getElementById('landing-page-container'),
      document.getElementById('main-container'),
    ];

    if (this.state.isMenuOpen === 'open-menu') {
      document.getElementById(this.state.menuBtnId).click();
    }

    if (size === 'whole') {
      this.fadingEffect(elements[0], elements[1]);
    } else if (size === 'part') {
      this.fadingEffect(elements[1], elements[0]);
    }
  }

  changeDisplaySize(selectedPath) {
    const updatedSize = (selectedPath === '/') ? 'part' : 'whole';
    this.setState({ displaysize: updatedSize });
    this.fadeComponents(updatedSize);
  }

  updateMenuState(menuState) {
    this.setState({ isMenuOpen: menuState });
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
          <Sites displaySize={this.state.displaysize} />
          <Lab displaySize={this.state.displaysize} />
          <OpenSourceProjects displaySize={this.state.displaysize} />
          <Blog displaySize={this.state.displaysize} />
          <Footer />
        </div>
        <Main displaySize={this.state.displaysize} />
      </div>
    );
  }
}
