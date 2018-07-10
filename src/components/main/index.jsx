import React from 'react';
import Sites from '../sites';
import Lab from '../lab';
import OpenSourceProjects from '../open-source-projects';
import Blog from '../blog';
import Footer from '../footer';
import LandingScreen from '../landing-screen';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <LandingScreen />
        <Sites />
        <Lab />
        <OpenSourceProjects />
        <Blog />
        <Footer />
      </div>
    );
  }
}
