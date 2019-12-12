import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlogPage from './other-pages/blog';
import ContactPage from './other-pages/contact';
import SitesPage from './other-pages/sites';
import TeaShop from './sites/tea-shop';
import LuxotusBlog from './sites/luxotus-blog';
import WorldwideStories from './sites/worldwide-stories';
import App from './app';
import Header from './header';

export default class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: '',
      menuBtnId: 'menu-btn-container',
      scrollToSection: '',
    };

    this.updateScrollToSection = this.updateScrollToSection.bind(this);
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  updateMenuState(menuState) {
    this.setState({ isMenuOpen: menuState });
  }

  updateScrollToSection(scrollToSection) {
    if (typeof scrollToSection === 'string') {
      this.setState({ scrollToSection });
    }
  }

  render() {
    const { menuBtnId, isMenuOpen, scrollToSection } = this.state;

    return (
      <div id="main-container">
        <Header
          menuBtnId={menuBtnId}
          isMenuOpen={isMenuOpen}
          updateMenuState={this.updateMenuState}
          scrollToSection={scrollToSection}
          updateScrollToSection={this.updateScrollToSection}
        />
        <Switch>
          <Route exact path="/" render={({ match }) => <App match={match} scrollToSection={scrollToSection} updateScrollToSection={this.updateScrollToSection} />} />
          <Route path="/blog" render={({ match }) => <BlogPage match={match} {...this.props} />} />
          <Route path="/contact" render={({ match }) => <ContactPage match={match} {...this.props} />} />
          <Route exact path="/sites" render={({ match }) => <SitesPage match={match} {...this.props} />} />
          <Route path="/sites/tea-shop" render={({ match }) => <TeaShop match={match} {...this.props} />} />
          <Route path="/sites/luxotus-blog" render={({ match }) => <LuxotusBlog match={match} {...this.props} />} />
          <Route path="/sites/worldwide-stories" render={({ match }) => <WorldwideStories match={match} {...this.props} />} />
        </Switch>
      </div>
    );
  }
}
