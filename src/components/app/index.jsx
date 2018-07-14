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
    };
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
      this.fade(document.getElementById('landing-page-container'));
      this.unfade(document.getElementById('main-container'));
    }
  }

  changeDisplaySize(selectedPath) {
    const updatedSize = (selectedPath === '/') ? 'part' : 'whole';
    this.setState({ displaysize: updatedSize });
    this.fadeComponents(updatedSize);
  }

  render() {
    return (
      <div id="app-container">
        <Header
          displaySize={this.state.displaysize}
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
