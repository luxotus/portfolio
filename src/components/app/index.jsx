import React from 'react';
import Sites from '../home-page/sites';
import OpenSource from '../home-page/open-source';
import Blog from '../home-page/blog';
import Footer from '../home-page/footer';
import LandingScreen from '../home-page/landing-screen';
import Contact from '../home-page/contact';

export default class App extends React.Component {
  render() {
    return (
      <div id="landing-page-container">
        <LandingScreen />
        <Sites />
        <Blog />
        <OpenSource />
        <Contact />
        <Footer />
      </div>
    );
  }
}
