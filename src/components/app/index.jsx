import React from 'react';
import Sites from '../sites';
import Lab from '../lab';
import OpenSourceProjects from '../open-source-projects';
import Blog from '../blog';
import Footer from '../footer';
import LandingScreen from '../landing-screen';
import Main from '../main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaysize: 'part',
    };
  }

  render() {
    return (
      <div id="app-container">
        <div id="landing-page-container">
          <LandingScreen />
          <Sites displaySize={this.state.displaysize} />
          <Lab displaySize={this.state.displaysize} />
          <OpenSourceProjects displaySize={this.state.displaysize} />
          <Blog displaySize={this.state.displaysize} />
          <Footer />
        </div>
        <Main />
      </div>
    );
  }
}
