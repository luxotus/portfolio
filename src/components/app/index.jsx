import React from 'react';
import MainRouter from '../main-router';
import Sites from '../home-page/sites';
import OpenSource from '../home-page/open-source';
import Blog from '../home-page/blog';
import Footer from '../home-page/footer';
import LandingScreen from '../home-page/landing-screen';
import Header from '../header';
import Contact from '../home-page/contact';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: '',
      menuBtnId: 'menu-btn-container',
    };
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  unfade(el, milSec) {
    const element = el;
    const maxVal = 1;
    const OpStep = 0.1;
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

  updateMenuState(menuState) {
    this.setState({ isMenuOpen: menuState });
  }

  render() {
    return (
      <div id="app-container">
        <Header
          menuBtnId={this.state.menuBtnId}
          isMenuOpen={this.state.isMenuOpen}
          updateMenuState={this.updateMenuState}
        />
        <div id="landing-page-container">
          <LandingScreen />
          <Sites />
          <Blog />
          <OpenSource />
          <Contact />
          <Footer />
        </div>
        <MainRouter />
      </div>
    );
  }
}
