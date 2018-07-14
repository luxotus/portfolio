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
    this.triggerMenuBtn = this.triggerMenuBtn.bind(this);
  }

  fade(el) {
    let op = 1; // initial opacity
    const element = el;
    const timer = setInterval(() => {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = `alpha(opacity=${op * 100})`;
      op -= op * 0.1;
    }, 50);
  }

  unfade(el) {
    let op = 0.1; // initial opacity
    const element = el;
    element.style.display = 'block';
    const timer = setInterval(() => {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = `alpha(opacity=${op * 100})`;
      op += op * 0.1;
    }, 10);
  }

  fadeComponents(size) {
    if (size === 'whole') {
      if (this.state.isMenuOpen === 'open-menu') this.triggerMenuBtn();
      this.fade(document.getElementById('landing-page-container'));
      this.unfade(document.getElementById('main-container'));
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

  triggerMenuBtn() {
    document.getElementById(this.state.menuBtnId).click();
  }

  render() {
    return (
      <div id="app-container">
        <Header
          menuBtnId={this.state.menuBtnId}
          isMenuOpen={this.state.isMenuOpen}
          displaySize={this.state.displaysize}
          updateMenuState={this.updateMenuState}
          triggerMenuBtn={this.triggerMenuBtn}
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
