import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlogPage from './other-pages/blog';
import SitesPage from './other-pages/sites';
import TeaShop from './sites/tea-shop';
import LuxotusBlog from './sites/luxotus-blog';
import PinterestRedesign from './sites/pinterest-redesign';
import StreamingService from './sites/streaming-service';
import OnlineStore from './sites/online-store';
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
          <Route exact path="/sites" render={({ match }) => <SitesPage match={match} {...this.props} />} />
          <Route path="/sites/tea-shop" render={({ match }) => <TeaShop match={match} {...this.props} />} />
          <Route path="/sites/luxotus-blog" render={({ match }) => <LuxotusBlog match={match} {...this.props} />} />
          <Route path="/sites/pinterest-redesign" render={({ match }) => <PinterestRedesign match={match} {...this.props} />} />
          <Route path="/sites/streaming-service" render={({ match }) => <StreamingService match={match} {...this.props} />} />
          <Route path="/sites/online-store" render={({ match }) => <OnlineStore match={match} {...this.props} />} />
        </Switch>
      </div>
    );
  }
}
