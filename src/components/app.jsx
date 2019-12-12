import React from 'react';
import Sites from './home-page/sites';
import OpenSource from './home-page/open-source';
import Blog from './home-page/blog';
import Footer from './home-page/footer';
import LandingScreen from './home-page/landing-screen';
import Contact from './home-page/contact';
import About from './home-page/about';

export default class App extends React.Component {
  componentDidMount() {
    this.handleScrollToSection();
  }

  componentDidUpdate() {
    this.handleScrollToSection();
  }

  handleScrollToSection() {
    const { scrollToSection, updateScrollToSection } = this.props;

    if (scrollToSection !== '') {
      document.querySelector(scrollToSection).scrollIntoView();
      updateScrollToSection('');
    }
  }

  render() {
    const { scrollToSection, updateScrollToSection } = this.props;

    return (
      <div id="landing-page-container">
        <LandingScreen />
        <About />
        <Sites />
        <OpenSource />
        <Blog />
        <Contact />
        <Footer scrollToSection={scrollToSection} updateScrollToSection={updateScrollToSection} />
      </div>
    );
  }
}
